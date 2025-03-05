function maskify(string: string): string {
    if (string.length <= 4) return string;
    
    const lastFourChars = string.slice(-4);
    const maskedPart = '#'.repeat(string.length - 4);
    
    return maskedPart + lastFourChars;
}

export default maskify;