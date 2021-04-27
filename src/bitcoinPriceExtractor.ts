export function extractBitcoinPrice(src: any): number {
  return src.bpi.USD.rate_float
}
