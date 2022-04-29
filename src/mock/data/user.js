import Mock from 'mockjs'

function getUser () {
  const data = {
    img: Mock.Random.image('160x160'),
    url: 'javascript:;',
    id: Mock.Random.id(),
    name: Mock.Random.ctitle(2, 8),
  }

  return data
}

export default getUser
