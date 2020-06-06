// react 자체에 useState 가 있어서 이걸 쓴다는 의미임
import React, { useState, useEffect } from 'react'

import Header from '../../components/signup/header'
import Body from '../../components/signup/body'
import Footer from '../../components/signup/footer'
import Container from '../../components/shared/container'

function Signup() {
  const [users, setUsers] = useState([
    /*
    { name: '가가가', password: '1234' },
    { name: '나나나', password: '1234' },
    { name: '다다다', password: '1234' },
    */
  ])

  useEffect(() => {
    const users = localStorage.getItem('users')
    if (users) {
      setUsers(JSON.parse(users))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const handleAddUser = (user) => {
    //console.log(user)
    setUsers([...users, user])
  }
  /*
  function handleAddUser(user) {
    console.log(user)
  }
  */

  return (
    <Container maxWidth="720" centered>
      <Header title="회원가입 페이지" />
      <Body onAddUser={handleAddUser} />
      <Footer users={users} />
    </Container>
  )
}

export default Signup
