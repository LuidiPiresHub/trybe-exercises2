const units3: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convert3 = (nome: string, symbol: string, value: number): number => {
  const fromIndex = units.indexOf(symbol);
  const toIndex = units.indexOf(nome);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
};