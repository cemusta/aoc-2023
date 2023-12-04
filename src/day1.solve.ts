import { recoverCalibration } from './day1';
import { input } from './inputs/input1';

const part1 = recoverCalibration(input, 1);
console.log(`sum of calibration values: ${part1}`);

const part2 = recoverCalibration(input, 2);
console.log(`sum of calibration values: ${part2}`);
