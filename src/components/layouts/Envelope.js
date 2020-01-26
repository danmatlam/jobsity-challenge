import React from 'react'
import styled from 'styled-components'

import { palette, CSS_HELPERS, MEDIA_SCREENS } from "../../theme"

import uxPrimary from '../../assets/ux-primary.png'
export const EnvelopeLayout = (props) => {
    return (
        <Container>
            <BoxContainer>
                <Box>
                    {props.children[0]}
                </Box>
            </BoxContainer>


            <MainSide>
            </MainSide>
            <SecondarySide>

                {props.children[1]}

            </SecondarySide>

        </Container>

    )
}



const { primary, secondary } = palette;


const Container = styled.div` 
    width:100%;
    position: relative;
    z-index: 1;
    `

const BoxContainer = styled.div`
 ${CSS_HELPERS.CENTER_HORIZONTAL}
    position:absolute;
    z-index:1;
    width:100%;
    margin-top:9vh;
    max-height:60vh;
`
const Box = styled.div`
    background-color:white;
    width:80%;
    ${CSS_HELPERS.RADIUS_MD}
    ${CSS_HELPERS.BOX_SHADOW}
`

const MainSide = styled.section`
    height:40vh;
    overflow-y:auto;
    object-fit:cover;
    background-color:${secondary.main};

`

const SecondarySide = styled.section`
    padding:2em;
    height:50vh;
    background-color:${secondary.contrastText};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`



