import {Math} from '../src';
import { describe, beforeEach, expect, it } from '@jest/globals';

describe('Math class', () => {
    let math: Math;

    beforeEach(() => {
        math = new Math();
    });

    it('should add two numbers correctly', () => {
        expect(math.add(2, 3)).toBe(5);
    });

    it('should subtract two numbers correctly', () => {
        expect(math.subtract(5, 3)).toBe(2);
    });

    it('should multiply two numbers correctly', () => {
        expect(math.multiply(2, 3)).toBe(6);
    });

    it('should divide two numbers correctly', () => {
        expect(math.divide(6, 3)).toBe(2);
    });

    it('should power two numbers correctly', () => {
        expect(math.power(2, 3)).toBe(8);
    });

    it('should squareRoot a number correctly', () => {
        expect(math.squareRoot(4)).toBe(2);
    });

    it('should check if a number is even', () => {
        expect(math.isEven(4)).toBe(true);
    });

});

