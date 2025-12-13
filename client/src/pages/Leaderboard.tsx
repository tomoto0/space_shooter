import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Trophy, Zap } from "lucide-react";

export default function Leaderboard() {
  const { data: topScores, isLoading } = trpc.scores.getTopScores.useQuery({
    limit: 100,
  });

  const { data: userBestScore } = trpc.scores.getUserBestScore.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin w-8 h-8" />
          <p className="text-foreground/60">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Stellar Assault Leaderboard
          </h1>
          <p className="text-foreground/60">Top scores across all players</p>
        </div>

        {/* User's Best Score */}
        {userBestScore && (
          <Card className="bg-accent/10 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Your Best Score
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-foreground/60">Score</p>
                <p className="text-2xl font-bold text-foreground">{userBestScore.score.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Wave Reached</p>
                <p className="text-2xl font-bold text-foreground">{userBestScore.waveReached}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Difficulty</p>
                <p className="text-xl font-bold text-foreground capitalize">{userBestScore.difficulty}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Date</p>
                <p className="text-sm text-foreground">{new Date(userBestScore.createdAt).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Top Scores Table */}
        <Card>
          <CardHeader>
            <CardTitle>Top 100 Scores</CardTitle>
            <CardDescription>Global ranking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold text-foreground/70">Rank</th>
                    <th className="text-left py-3 px-2 font-semibold text-foreground/70">Player</th>
                    <th className="text-right py-3 px-2 font-semibold text-foreground/70">Score</th>
                    <th className="text-center py-3 px-2 font-semibold text-foreground/70">Wave</th>
                    <th className="text-center py-3 px-2 font-semibold text-foreground/70">Difficulty</th>
                    <th className="text-right py-3 px-2 font-semibold text-foreground/70">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {topScores && topScores.length > 0 ? (
                    topScores.map((entry) => (
                      <tr
                        key={entry.id}
                        className="border-b border-border/50 hover:bg-accent/5 transition-colors"
                      >
                        <td className="py-3 px-2">
                          <span className="font-bold text-lg">
                            {entry.rank === 1 && "🥇"}
                            {entry.rank === 2 && "🥈"}
                            {entry.rank === 3 && "🥉"}
                            {entry.rank > 3 && entry.rank}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-foreground font-medium">{entry.playerName}</td>
                        <td className="py-3 px-2 text-right text-foreground font-bold">
                          {entry.score.toLocaleString()}
                        </td>
                        <td className="py-3 px-2 text-center text-foreground">{entry.waveReached}</td>
                        <td className="py-3 px-2 text-center">
                          <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-accent/20 text-accent">
                            {entry.difficulty.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right text-foreground/60 text-xs">
                          {new Date(entry.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-foreground/60">
                        No scores yet. Be the first to submit a score!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
