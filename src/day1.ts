export const recoverCalibration = (input: string, part: 1 | 2): number => {
  const filter = part === 1 ? numbers : both;

  const values = input.split('\n').map((line) => {
    const found = findMatches(line, filter);
    return 10 * found[0] + found[1];
  });

  return values.reduce((acc, curr) => acc + curr, 0);
};

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const both = [...numbers, ...words];

// find first occurrence of list item in line
const findMatches = (line: string, list: string[]): any => {
  const found = [];
  for (let listItem of list) {
    const item = listItem;
    const index = line.indexOf(item);

    if (index > -1) {
      found.push(item);
    }
  }

  const first = found.sort((a, b) => line.indexOf(a) - line.indexOf(b))[0];
  const last = found.sort((a, b) => line.lastIndexOf(b) - line.lastIndexOf(a))[0];

  const map: Record<string, number> = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return [map[first], map[last]];
};
