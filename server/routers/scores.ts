import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc";
import { saveGameScore, getTopScores, getUserBestScore } from "../db";

export const scoresRouter = router({
  /**
   * Save a game score (protected - requires authentication)
   */
  save: protectedProcedure
    .input(
      z.object({
        score: z.number().int().min(0),
        waveReached: z.number().int().min(0),
        difficulty: z.enum(["easy", "normal", "hard"]).default("normal"),
        playerName: z.string().max(128).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await saveGameScore({
          userId: ctx.user.id,
          score: input.score,
          waveReached: input.waveReached,
          difficulty: input.difficulty,
          playerName: input.playerName || ctx.user.name || "Anonymous",
        });
        return { success: true };
      } catch (error) {
        console.error("Failed to save score:", error);
        throw error;
      }
    }),

  /**
   * Get top scores for the ranking board (public)
   */
  getTopScores: publicProcedure
    .input(
      z.object({
        limit: z.number().int().min(1).max(100).default(100),
      }).optional()
    )
    .query(async ({ input }) => {
      const limit = input?.limit || 100;
      const scores = await getTopScores(limit);
      return scores.map((score, index) => ({
        rank: index + 1,
        id: score.id,
        playerName: score.playerName,
        score: score.score,
        waveReached: score.waveReached,
        difficulty: score.difficulty,
        createdAt: score.createdAt,
      }));
    }),

  /**
   * Get user's best score (protected - requires authentication)
   */
  getUserBestScore: protectedProcedure
    .query(async ({ ctx }) => {
      const bestScore = await getUserBestScore(ctx.user.id);
      if (!bestScore) return null;
      return {
        id: bestScore.id,
        score: bestScore.score,
        waveReached: bestScore.waveReached,
        difficulty: bestScore.difficulty,
        createdAt: bestScore.createdAt,
      };
    }),
});
