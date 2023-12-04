export const parseInput = (input: string): Game[] => {
  const games = input.split('\n').map((line) => {
    return parseGame(line);
  });

  return games;
};

const parseGame = (input: string): Game => {
  const game: Game = {
    id: Number(input.split(':')[0].replace('Game ', '')),
    round: input
      .split(':')[1]
      .split(';')
      .map((round) => {
        const x = round.split(',').map((x) => x.trimStart());

        const r: Round = {
          red: parseCube(x, 'red'),
          blue: parseCube(x, 'blue'),
          green: parseCube(x, 'green'),
        };

        return r;
      }),
    power: 0,
  };

  // find maximum red
  const maxRed = Math.max(...game.round.map((round) => round.red));
  const maxBlue = Math.max(...game.round.map((round) => round.blue));
  const maxGreen = Math.max(...game.round.map((round) => round.green));

  game.power = maxRed * maxBlue * maxGreen;

  return game;
};

const parseCube = (x: string[], color: 'red' | 'blue' | 'green'): number =>
  x.find((x) => x.includes(color))
    ? Number(x.find((x) => x.includes(color)).split(` ${color}`)[0])
    : 0;

type Game = {
  id: number;
  round: Round[];
  power: number;
};

type Round = {
  red: number;
  blue: number;
  green: number;
};
