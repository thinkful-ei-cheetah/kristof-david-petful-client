export default {
  async peekDog(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
    console.log(data)
    return data;
  },
  async getAllDogPictures(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
   
  },

  async deleteDog(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
    console.log(data)
    return data;
  },

  async peekCat(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
    console.log(data)
    return data;
  },
  async getAllDogPictures(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
    console.log(data)
    return data;
  },

  async deleteCat(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
    console.log(data)
    return data;
  },
}