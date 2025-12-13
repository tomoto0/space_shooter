CREATE TABLE `gameScores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`score` int NOT NULL,
	`waveReached` int NOT NULL DEFAULT 0,
	`difficulty` varchar(32) NOT NULL DEFAULT 'normal',
	`playerName` varchar(128),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `gameScores_id` PRIMARY KEY(`id`)
);
