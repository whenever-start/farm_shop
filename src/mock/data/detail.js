import Mock from 'mockjs'

function getDetail () {
  const data = {
    img: Mock.Random.image('210x108'),
    url: 'javascript:;',
    id: Mock.Random.id(),
    title: Mock.Random.ctitle(4, 8),
    content: Mock.Random.cparagraph(3, 6),
    price: Mock.Random.integer(60, 200),
  }

  return data
}

export default getDetail
