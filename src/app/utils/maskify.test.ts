import maskify from './maskify';

describe('maskify', () => {
    test('masks all but last 4 characters with #', () => {
        expect(maskify('4556364607935616')).toBe('############5616');
        expect(maskify('64607935616')).toBe('######5616');
        expect(maskify('1')).toBe('1');
        expect(maskify('')).toBe('');
        expect(maskify('Skippy')).toBe('##ippy');
        expect(maskify('Nanananananananananana Batman!')).toBe('##########################man!');
    });
});