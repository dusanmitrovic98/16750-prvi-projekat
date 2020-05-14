import { ChocolateProductType } from "../../models/chocolate-products/chocolate-product";

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomProductType() {
  let random = getRandomIntInclusive(1, 4);
  if (random == 4) {
    return ChocolateProductType.DarkChocolate;
  }
  if (random == 3) {
    return ChocolateProductType.WhiteChocolate;
  }
  if (random == 2) {
    return ChocolateProductType.MilkChocolate;
  }
  if (random == 1) {
    return ChocolateProductType.RubyChocolate;
  }
}
