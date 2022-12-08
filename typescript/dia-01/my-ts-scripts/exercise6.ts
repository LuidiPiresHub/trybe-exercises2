const units6 = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

const convert6 = (nome: string, symbol: string, value: number): number => {
  const fromIndex = units.indexOf(symbol);
  const toIndex = units.indexOf(nome);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(1000, exponent);
};