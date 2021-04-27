import { extractBitcoinPrice } from './bitcoinPriceExtractor'

test('Bitcoin price extractor', () => {
  const data = {
    time: {
      updated: 'Apr 27, 2021 03:23:00 UTC',
      updatedISO: '2021-04-27T03:23:00+00:00',
      updateduk: 'Apr 27, 2021 at 04:23 BST',
    },
    disclaimer:
      'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org',
    chartName: 'Bitcoin',
    bpi: {
      USD: {
        code: 'USD',
        symbol: '&#36;',
        rate: '53,576.9017',
        description: 'United States Dollar',
        rate_float: 53576.9017,
      },
      GBP: {
        code: 'GBP',
        symbol: '&pound;',
        rate: '38,606.3366',
        description: 'British Pound Sterling',
        rate_float: 38606.3366,
      },
      EUR: {
        code: 'EUR',
        symbol: '&euro;',
        rate: '44,404.0003',
        description: 'Euro',
        rate_float: 44404.0003,
      },
    },
  }
  expect(extractBitcoinPrice(data)).toEqual(53576.9017)
})
