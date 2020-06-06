import React, { useState } from 'react'
import styled from 'styled-components'

// styled 뒤에는 html 태그
const YellowBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #faa;
  background-color: yellow;
`

function Box() {
  const [color, setColor] = useState('yellow')

  /* 함수는 여기 다가 */
  /*  */
  return (
    <div>
      <YellowBox />
      <input
        type="text"
        placeholder="색상 값 입력"
        onChange={(e) => setColor(e.target.value)}
      />
      <div
        style={{
          width: 100,
          height: 100,
          border: '1px solid #faa',
          backgroundColor: color,
        }}
      ></div>
    </div>
  )
}

export default Box
