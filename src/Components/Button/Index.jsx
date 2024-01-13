import React from 'react'
import Style from "./button.module.scss"

export const Button = ({customStyle,title}) => {
  return (
    <div>
        <button className={customStyle ? customStyle : Style.mybutton}>{title?title:"I need help"}</button>
    </div>
  )
}
