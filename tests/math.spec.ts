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
    })
});

