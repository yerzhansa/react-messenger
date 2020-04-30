import { FC } from 'react'
import { IMessage } from '../MessageItem/types'

interface OwnProps {
  messages: IMessage[]
}

export type Props = FC<OwnProps>
