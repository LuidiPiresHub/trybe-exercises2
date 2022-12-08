const units2: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convert2 = (nome: string, symbol: string, value: number): number => {
  const fromIndex = units.indexOf(symbol);
  const toIndex = units.indexOf(nome);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
};