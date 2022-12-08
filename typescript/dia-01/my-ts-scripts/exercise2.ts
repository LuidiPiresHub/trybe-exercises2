const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (value: number, fromUnit: string, toUnit: string ): number => {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const expoent = fromIndex - toIndex;
  return value * Math.pow(10, expoent);
};