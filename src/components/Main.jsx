import React, { useState, useEffect } from 'react'
import { shuffle, imageListArray } from '../utils/utils'

const Main = (props) => {
  const [imageList, setImageList] = useState(imageListArray)

  useEffect(() => {
    setImageList(shuffle(imageList))
    console.log(imageList)
  })

  const handleClick = (id, clicked) => {
    if(clicked){
      props.resetCurrentScore()
    } else {
      props.incrementScore()
    }
    setImageList(
      imageList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            clicked: true,
          }
        } else {
          return {
            ...item
          }
        }
      })
    )
  }

  return (
    <div className='buttons'>
      {imageList.map((item) => {
        return (
          <img
            key={item.id}
            onClick={() => handleClick(item.id, item.clicked)}
            src={item.imageURL}
            width='300px'
          />
        )
      })}
    </div>
  )
}

export default Main
