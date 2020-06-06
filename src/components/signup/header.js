import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

// 해체할당을 통해 요 function 내 props 를 그냥 title 로 변경 가능.
// 또는 es6 문법 상 function Header(title = "기본 타이틀") 로도 기본 값 가능.
// 또는 타입스크립트로 이케저케 interface 로 어쩌구저쩌구 하면 됨.
//function Header(props) {
function Header({ title = '기본타이틀' }) {
  //console.log(props)
  //return <div>{props.title || '기본 타이틀'}</div>

  return (
    <Container padding="20px 0">
      <Text size="24" bold color="blue">
        {title}
      </Text>
    </Container>
  )
}

Header.propTypes = {
  // 필수 값 일시 isRequired
  title: PropTypes.string.isRequired,
}

export default Header
