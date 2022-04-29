import Mock from 'mockjs'

function getBanner () {
  const data = []

  for (let i = 0; i < 4; i++) {
    const o = {
      img: Mock.Random.image('750x332'),
      url: 'javascript:;',
      id: Mock.Random.id(),
    }
    data.push(o)
  }

  return data
}

export default getBanner
