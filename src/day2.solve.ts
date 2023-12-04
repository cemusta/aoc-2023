import { parseInput } from './day2';
import { sample1, input } from './inputs/input2';

const part1 = (input: string) => {
  const games = parseInput(input);

  const red: number = 12,
    green: number = 13,
    blue: number = 14;

  const validGames = games.filter((game) =>
    game.round.every((round) => round.red <= red && round.blue <= blue && round.green <= green),
  );

  return [
    validGames.map((game) => game.id).reduce((a, b) => a + b, 0),
    games.map((game) => game.power).reduce((a, b) => a + b, 0),
  ];
};

console.log(part1(input));
