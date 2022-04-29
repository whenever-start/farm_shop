import Mock from 'mockjs'

function getRcmd () {
  const data = []

  for (let i = 0; i < 10; i++) {
    const o = {
      img: Mock.Random.image('210x108'),
      url: 'javascript:;',
      id: Mock.Random.id(),
      title: Mock.Random.ctitle(4, 8),
      desc: Mock.Random.cword(18, 28),
    }
    data.push(o)
  }

  return data
}

export default getRcmd
