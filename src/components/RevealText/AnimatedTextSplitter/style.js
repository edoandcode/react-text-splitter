import styled from 'styled-components'

const Styled = {
  AnimatedTextSplitterRoot: styled.span`
    display: block;
    position: relative;
  `,
  SplittedText: styled.span`
    display: inline-block;
    position: relative;
    & * {
      transform-style: preserve-3d;
      perspective: 800px;
    }
    & .line {
      margin: 0px;
    }
  `,
  GuideText: styled.span`
    display: inline-block;
    color: #ffff00;
    position: absolute;
    width: 100%;
    visibility: visible;
  `,
}

export default Styled

