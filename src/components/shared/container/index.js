import styled from 'styled-components'

/**
 * Container
 * maxwidth, width, margin, padding, centered
 */

// ${} 이렇게 써야함. 자바스크립트를 백틱 내에서 쓸라면.
// 스타일드 컴포넌트는 뒤에 ; 적어줘야함.
export default styled.div`
  ${(props) => {
    console.log(props)
  }}

  box-sizing:border-box;

  ${({ maxWidth }) => maxWidth && `max-width : ${maxWidth}px;`}
  ${({ centered }) => centered && `margin : 0 auto;`}
  ${({ margin }) => margin && `margin : ${margin};`}
  ${({ padding }) => padding && `margin : ${padding};`}
  ${({ width }) => `width : ${width || '100%;'}`}
`
