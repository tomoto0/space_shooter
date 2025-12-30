import { mysqlTable, bigint, text, int, timestamp } from 'drizzle-orm/mysql-core';

export const playerRankings = mysqlTable('player_rankings', {
  id: bigint('id', { mode: 'number', unsigned: true }).primaryKey().autoincrement(),
  playerName: text('player_name').notNull(),
  score: int('score').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type PlayerRanking = typeof playerRankings.$inferSelect;
export type NewPlayerRanking = typeof playerRankings.$inferInsert;
