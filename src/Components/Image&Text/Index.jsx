import React from 'react'
import Style from "./imageandtext.module.scss"
export const ImageAndText = ({imageUrl,text}) => {
  return (
    <div className={Style.main}>
        <img src={imageUrl}></img>
        <p>{text}</p>
    </div>
  )
}
