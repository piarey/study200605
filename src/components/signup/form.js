import React, { useState, useEffect } from 'react'

import propTypes from 'prop-types'

import Container from '../shared/container'
import Input from '../shared/input'
import Button from '../shared/button'
import Text from '../shared/text'

const INITIAL_VALUE = {
  name: '',
  password: '',
  passwordRe: '',
}

function Form({ onAddUser }) {
  /* 이렇게도 쓸수있는데 따로 빼서 상수로...
  const [values, setValues] = useState({
    name: '',
    password: '',
    passwordRe: '',
  })*/
  const [values, setValues] = useState(INITIAL_VALUE)
  const [errors, setErrors] = useState({
    isValid: false,
    isMathcedPassword: false,
  })

  // useEffect 라는 거는 약속된 거임.
  useEffect(() => {
    console.log('변화', values)
    formValidatoer()
    // 저거 주석처리를 하면 eslint 에 안잡히게해주는거임. (원래는 훅으로 뭐시기해야하는데 특이케이스라)
  }, [values]) //eslint-disable-line react-hooks/exhaustive-deps

  const formValidatoer = () => {
    /**
     * 입력한 비밀번호가 유효한지?
     */
    const { password, passwordRe } = values
    /*
    const isMathcedPassword =
      values.password &&
      values.passwordRe &&
      values.password === values.passwordRe*/
    const isMathcedPassword = password && passwordRe && password === passwordRe

    /**
     * input 의 값이 다 입력이 되었는지? (every)
     */
    //const isVlid = isMathcedPassword && Object.values(values).every((v) => v)

    setErrors({
      isMathcedPassword,
      isValid: isMathcedPassword && Object.values(values).every((v) => v),
    })
  }

  // 함수 하나하나 다 만드는게 아니라 함수 하나로 제어하는거임.
  const handleInput = ({ target: { name, value } }) => {
    // e.~~ 이렇게도 할 수 있는데 주석처리 안한 그렇게하면 코드를 더 줄일 수 있음.
    //const handleInput = (e) => {
    //console.log(e.target, e.name, e.value)

    // ... ~~ -> 요게 뭐냐면.... 원본을 복사해서 붙여넣은다음 그걸 제어한다는 거임.
    setValues({
      ...values,
      //[e.target.name]: e.target.value,
      [name]: value,
    })
  }
  const handleSubmit = () => {
    const { name, password } = values

    onAddUser({ name, password })

    // 리셋.
    setValues(INITIAL_VALUE)
  }

  console.log(errors)

  return (
    <Container>
      <Container padding="6px 0 30px 0">
        <Text margin="0 0 6px 0" block>
          이름
        </Text>
        <Input
          name="name"
          placeholder="이름을 입력하세요."
          value={values.name}
          onChange={handleInput}
        />
      </Container>
      <Container padding="6px 0 30px 0">
        <Text margin="0 0 6px 0" block>
          비밀번호
        </Text>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          value={values.password}
          onChange={handleInput}
        />
      </Container>
      <Container padding="6px 0 30px 0">
        <Text margin="0 0 6px 0" block>
          비밀번호 재입력
        </Text>
        <Input
          type="password"
          name="passwordRe"
          placeholder="비밀번호 재입력"
          value={values.passwordRe}
          onChange={handleInput}
        />
        {!errors.isMathcedPassword ? (
          <Text color="red" block margin="5px 0 0 0">
            입력한 비밀번호와 같은 값을 입력
          </Text>
        ) : null}
      </Container>
      <Button
        disabled={!errors.isValid}
        margin="10px 0"
        full
        color="blue"
        font-size="16"
        padding="15px 0"
        onClick={errors.isValid ? handleSubmit : () => {}}
      >
        회원가입
      </Button>
    </Container>
  )
}

Form.propTypes = {
  onAddUser: propTypes.func,
}

export default Form
