import { getCurrencies } from './getcurrencies';

describe('getcurrencies', () => {

    it('should return the supported currencies', () => {
        const result = getCurrencies();
    
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
    
});