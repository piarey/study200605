import React from 'react'
import { text, number, boolean, select } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Button',
  components: Button,
}

// 변수명을 한글로 해도 네이밍 커스텀 할 수 있긴한데
export const BasicButton = () => (
  <Button
    margin={text('margin')}
    fontSize={number('fontSize', 20)}
    full={boolean('full', false)}
    color={select('color', ['blue', 'red'])}
  >
    버튼
  </Button>
)

// 이런식으로 네이밍 커스텀 할 수 있음. (권장)
BasicButton.story = {
  name: '기본상태',
}
