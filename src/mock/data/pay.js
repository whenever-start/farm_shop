import Mock from 'mockjs'

function getPay () {
  const orders = []
  for (let i = 0; i < Mock.Random.integer(3, 10); i++) {
    orders.push({
      img: Mock.Random.image('210x108'),
      url: 'javascript:;',
      id: Mock.Random.id(),
      title: Mock.Random.ctitle(4, 8),
      price: Mock.Random.integer(60, 200),
      count: Mock.Random.integer(1, 5),
    })
  }

  const data = {
    address: Mock.Random.province() + Mock.Random.city() + Mock.Random.county() + Mock.Random.cword(2, 3) + '路' + Mock.Random.integer(1, 20) + '号',
    name: Mock.Random.cname(),
    tel: Mock.Random.integer(11),
    orders,
  }

  return data
}

export default getPay
