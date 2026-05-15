//
// Exported type definitions...
//
export type PlayerStrokes = {
  [playerName: string]: number[];
};

export type GameResult = {
  winner: string;
  players: string[];
  strokes: PlayerStrokes;

  start: string;
  end: string;
};

export type GeneralFacts = {
  lastPlayed: string;
  totalGames: number;
  shortestGame: string;
  longestGame: string;
};

//
// Exported funcs...
//
export const getGeneralFacts = (games: GameResult[]): GeneralFacts => {
  const now = Date.now();

  const gamesLastPlayedAgoInMilliseconds = games.map(
    (x) => now - Date.parse(x.end),
  );

  const mostRecentlyPlayedInMilliseconds = Math.min(
    ...gamesLastPlayedAgoInMilliseconds,
  );

  const gameDurationsInMilliseconds = games.map(
    (x) => Date.parse(x.end) - Date.parse(x.start),
  );

  // console.log(
  //     gamesLastPlayedAgoInMilliseconds
  // );

  return {
    lastPlayed: `${mostRecentlyPlayedInMilliseconds / 1000 / 60 / 60 / 24} days ago`,
    totalGames: games.length,
    shortestGame: `${Math.min(...gameDurationsInMilliseconds) / 1000 / 60} minutes`,
    longestGame: `${Math.max(...gameDurationsInMilliseconds) / 1000 / 60} minutes`,
  };
};

export const getPersonWithMostMaxStrokeCount = (
  games: GameResult[],
): string | null => {
  if (games.length === 0) return null;

  const maxStrokeCountByPlayer: { [playerName: string]: number } = {};

  games.forEach((game) => {
    Object.entries(game.strokes).forEach(([playerName, strokes]) => {
      const maxedOutCount = strokes.filter((stroke) => stroke >= 12).length;
      maxStrokeCountByPlayer[playerName] =
        (maxStrokeCountByPlayer[playerName] || 0) + maxedOutCount;
    });
  });

  let personWithMost = null;
  let maxCount = 0;

  Object.entries(maxStrokeCountByPlayer).forEach(([playerName, count]) => {
    if (count > maxCount) {
      maxCount = count;
      personWithMost = playerName;
    }
  });

  return personWithMost;
};

//
// Helper funcs...
//
