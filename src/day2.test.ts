import { parseInput } from './day2';
import { sample1 } from './inputs/input2';

describe('Day 2', () => {
  describe('parseInput', () => {
    it('should parse games correctly', () => {
      const games = parseInput(sample1);

      const red: number = 12,
        green: number = 13,
        blue: number = 14;

      const validGames = games.filter((game) =>
        game.round.every((round) => round.red <= red && round.blue <= blue && round.green <= green),
      );

      const sum = validGames.map((game) => game.id).reduce((a, b) => a + b, 0);

      expect(sum).toBe(8);

      const sumPower = games.map((game) => game.power).reduce((a, b) => a + b, 0);

      expect(sumPower).toBe(2286);
    });
  });
});
