import config from '../config';

export default {
  async peekDog(){
    const data = await fetch(`${config.BASE_URL}/api/dogs`).then(data => data.json())
    return data;
  },

  async deleteDog(){
    await fetch(`${config.BASE_URL}/api/dogs`, {  
      method: 'DELETE',
    })
  },

  async peekCat(){
    const data = await fetch(`${config.BASE_URL}/api/cats`).then(data => data.json())

    return data;
  },

  async deleteCat(){
    await fetch(`${config.BASE_URL}/api/cats`, {
      method: 'DELETE'
    })
  },

  async peekUser(){
    const data = await fetch(`${config.BASE_URL}/api/users`).then(data => data.json())
    console.log(data, 'peeked')
    return data.user === 'David';
  },

  async deleteUser(){
    const data = await fetch(`${config.BASE_URL}/api/users`, {
      method: 'DELETE'
    }).then(data => data.json())

    return data;
  },
}

