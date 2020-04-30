import React from 'react'
import s from './styles.module.css'
import { Props } from './types'

const Avatar: Props = ({ imageLink, alt }) => {
  return (
    <div className={s.imageWrapper}>
      <img src={imageLink} alt={alt} />
    </div>
  )
}

export default Avatar
