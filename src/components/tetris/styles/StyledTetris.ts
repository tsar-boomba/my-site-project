import styled from 'styled-components';
import bgImage from '../tetrisBg.png'

export const StyledTetrisWrapper = styled.div`
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    height: 90vh;
    padding-top: 5px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`