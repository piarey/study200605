const BASE_URL = 'http://localhost:8000/todo'

/**
 * Todos 목록을 가져온다
 */

export async function fetchTodos() {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    return []
  }

  return response.json()
}

/**
 * 새로운 todo 를 저장
 */
export async function postTodo(payload) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function updateTodo(payload) {
  const response = await fetch(`${BASE_URL}/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

// delete 는 보내줄 게 없음.
export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.ok
}
