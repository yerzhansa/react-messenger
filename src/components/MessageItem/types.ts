import { FC } from 'react'

export interface IMessage {
  id: number
  userAvatar: string
  userName: string
  message: string
  date: string
}

export type Props = FC<IMessage>
