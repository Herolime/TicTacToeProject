import calculateWinner from '../src/calculateWinner';

test('should return null', () => {
    let result = calculateWinner(Array(9).fill(null));
    expect(!!result).toBe(false);
});
