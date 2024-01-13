import React from 'react'
import Style from "./card.module.scss"
import { ContactButton } from '../ContactButton/Index'
import { Button } from '../Button/Index'

export const Card = () => {
  return (
    <div>
        <div className={Style.card}>

          <h1 className={Style.heading}>Contact Us</h1>
        <ContactButton></ContactButton>
        <ContactButton></ContactButton>
        <ContactButton></ContactButton>
        <Button customStyle={Style.buttons} title={" "}></Button>

        </div>
    </div>
  )
}
