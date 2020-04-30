import { FC } from 'react'
import { IChat } from '../ChatItem/types'

interface OwnProps {
  chats: IChat[]
  handleClickOnChat: (id: number) => () => void
  selectedChatId?: number
}

export type Props = FC<OwnProps>
