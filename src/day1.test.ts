import { recoverCalibration } from './day1';
import { sample1, sample2 } from './inputs/input1';

describe('Day 1', () => {
  describe('recoverCalibration', () => {
    it('should recover sum of calibration values (numbers only)', () => {
      const sum = recoverCalibration(sample1, 1);
      expect(sum).toBe(142);
    });

    it('should recover sum of calibration values (numbers + words)', () => {
      const sum = recoverCalibration(sample2, 2);
      expect(sum).toBe(281);
    });
  });
});
