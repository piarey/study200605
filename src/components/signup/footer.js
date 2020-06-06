import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function Footer({ users }) {
  //return <div>Footer</div>
  return (
    <Container>
      <Text>회원가입된 유저수 : {users.length}</Text>

      {users.map((user, index) => {
        return (
          // key 값 안줘도 잘 나오긴하는데 key 값을 명시해주는게 권장.
          <Text key={index} block>
            {user.name}
          </Text>
        )
      })}
    </Container>
  )
}

Footer.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Footer
