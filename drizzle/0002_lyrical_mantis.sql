CREATE TABLE `player_rankings` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`player_name` text NOT NULL,
	`score` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `player_rankings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `gameScores`;--> statement-breakpoint
DROP TABLE `users`;