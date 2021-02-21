import * as React from 'react'
import PriceWindow from './price-window'

export default function Main() {
    const [bitcoin, setBitcoin] = React.useState(null)
    const [ethereum, setEthereum] = React.useState(null)
    const [error, setError] = React.useState(false)

    const getCryptoData = async () => {
        try {
            const b = await fetch(
                'https://api.cryptonator.com/api/ticker/btc-usd'
            ).then(resp => resp.json())

            const e = await fetch(
                'https://api.cryptonator.com/api/ticker/eth-usd'
            ).then(resp => resp.json())

            setBitcoin(b)
            setEthereum(e)
        } catch (error) {
            setError(true)
        }
    }

    React.useEffect(() => {
        getCryptoData()
    }, [])

    return (
        <main>
            {error === true ? (
                <h2>uh oh...</h2>
            ) : (
                <React.Fragment>
                    <PriceWindow coin={bitcoin} />
                    <hr />
                    <PriceWindow coin={ethereum} />
                </React.Fragment>
            )}
        </main>
    )
}
