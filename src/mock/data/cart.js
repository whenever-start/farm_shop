import Mock from 'mockjs'

function getCart () {
  const data = []

  for (let i = 0; i < Mock.Random.integer(4, 10); i++) {
    const o = {
      img: Mock.Random.image('210x108'),
      url: 'javascript:;',
      id: Mock.Random.id(),
      title: Mock.Random.ctitle(4, 8),
      desc: Mock.Random.cword(18, 28),
      price: Mock.Random.integer(60, 200),
      count: Mock.Random.integer(1, 5),
    }
    data.push(o)
  }

  return data
}

export default getCart
