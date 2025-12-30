import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { db } from './db.js';
import { playerRankings } from './schema.js';
import { desc } from 'drizzle-orm';

const t = initTRPC.create();

export const appRouter = t.router({
  // Get top 100 rankings
  getRankings: t.procedure.query(async () => {
    const rankings = await db
      .select()
      .from(playerRankings)
      .orderBy(desc(playerRankings.score))
      .limit(100);
    return rankings;
  }),

  // Add new score
  addScore: t.procedure
    .input(
      z.object({
        playerName: z.string().min(1).max(255),
        score: z.number().int().positive(),
      })
    )
    .mutation(async ({ input }) => {
      const [result] = await db.insert(playerRankings).values({
        playerName: input.playerName,
        score: input.score,
      });
      return { success: true, id: result.insertId };
    }),

  // Check if score qualifies for top 100
  checkQualification: t.procedure
    .input(z.object({ score: z.number().int() }))
    .query(async ({ input }) => {
      const rankings = await db
        .select()
        .from(playerRankings)
        .orderBy(desc(playerRankings.score))
        .limit(100);

      if (rankings.length < 100) {
        return { qualifies: true, rank: rankings.length + 1 };
      }

      const lowestScore = rankings[rankings.length - 1].score;
      if (input.score > lowestScore) {
        const rank = rankings.filter((r) => r.score >= input.score).length + 1;
        return { qualifies: true, rank };
      }

      return { qualifies: false, rank: null };
    }),
});

export type AppRouter = typeof appRouter;
