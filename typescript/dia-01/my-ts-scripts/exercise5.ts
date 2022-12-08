const units4: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const convert4 = (nome: string, symbol: string, value: number): number => {
  const fromIndex = units.indexOf(symbol);
  const toIndex = units.indexOf(nome);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(100, exponent);
};