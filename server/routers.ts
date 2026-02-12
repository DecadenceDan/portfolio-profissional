import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactMessages } from "../drizzle/schema";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          subject: z.string().min(1),
          message: z.string().min(10),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const db = await getDb();
          if (!db) {
            throw new Error("Database not available");
          }

          await db.insert(contactMessages).values({
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message,
          });

          await notifyOwner({
            title: `Nova mensagem de contato de ${input.name}`,
            content: `Email: ${input.email}\nAssunto: ${input.subject}\n\nMensagem:\n${input.message}`,
          });

          return { success: true, message: "Mensagem enviada com sucesso!" };
        } catch (error) {
          console.error("Contact form error:", error);
          throw new Error("Falha ao enviar mensagem");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
