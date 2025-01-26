import test, { describe, beforeEach, } from 'node:test';
import { Math } from '../src/math';
import { expect, it } from '@jest/globals';

describe('Math class', () => {
    it('teste', () => {
        let math: Math;

        beforeEach(() => {
            math = new Math();
        });

        test('should add two numbers correctly', () => {
            expect(math.add(2, 3)).toBe(5);
        });

        test('should subtract two numbers correctly', () => {
            expect(math.subtract(5, 3)).toBe(2);
        });

        test('should multiply two numbers correctly', () => {
            expect(math.multiply(2, 3)).toBe(6);
        });

        test('should divide two numbers correctly', () => {
            expect(math.divide(6, 3)).toBe(2);
        });

        test('should power two numbers correctly', () => {
            expect(math.power(2, 3)).toBe(8);
        });

        test('should square root a number correctly', () => {
            expect(math.squareRoot(4)).toBe(2);
        });

        test('should return true if a number is even', () => {
            expect(math.isEven(2)).toBe(true);
        });

        test('should return false if a number is odd', () => {
            expect(math.isOdd(2)).toBe(false);
        });
    })
});

