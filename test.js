const imageListArray = [
  {
    imageURL:
      'https://i.pinimg.com/originals/8b/38/40/8b38403216f9878a52107bbb5c8ebe60.jpg',
    clicked: false,
    id: 1,
  },
  {
    imageURL:
      'https://i.pinimg.com/originals/00/21/06/0021062a35f3ae04a52af4abb966827e.jpg',
    clicked: false,
    id: 2,
  },
  {
    imageURL:
      'https://i.pinimg.com/originals/b6/a8/7a/b6a87ac12c1c9c2a7c29d25092d796a0.jpg',
    clicked: false,
    id: 3,
  },
]

const newArray = imageListArray.map(item => {
  return {imageURL: item.imageURL,
  clicked:true,
  id:item.id}
})
console.log(newArray)
