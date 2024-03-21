import styled from 'styled-components'

const Styled = {
   TextSplitterRoot: styled.span`
    display: block;
    position: relative;
  `,
   SplittedText: styled.span`
    display: inline-block;
    position: relative;
    & p.line {
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

