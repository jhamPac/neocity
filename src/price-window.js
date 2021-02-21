import * as React from 'react'
import styled from 'styled-components'
import { Window, WindowContent, WindowHeader } from 'react95'

export default function PriceWindow({ coin }) {
    return coin === null ? null : (
        <Wrapper>
            <Window className="window">
                <WindowHeader>
                    <h2>{coin?.ticker?.base}</h2>
                </WindowHeader>
                <WindowContent>
                    <p>{Number.parseFloat(coin?.ticker?.price).toFixed(2)}</p>
                </WindowContent>
            </Window>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .window {
        width: 500px;
        height: 250px;
    }
`
