import Express from 'express'
import Axios from 'axios'
import { extractBitcoinPrice } from './bitcoinPriceExtractor'

async function getBitcoinPrice() {
  const rawData: any = await (
    await Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  ).data
  const price = extractBitcoinPrice(rawData)
  return price
}

function main() {
  const server = Express()
  server.get('/probe', async (req, res) => {
    const price = await getBitcoinPrice()
    console.log('Bitcoin price fetched')
    res.send(`probe_btc_price_usd ${price}`)
  })
  server.listen(9001, () => {
    console.log('Server started')
  })
}

main()
