import { ReactElement } from 'react'
import styles from './index.module.css'

interface NavBtnProps {
  href: string
  name: string
  Icon: React.ElementType
  iconColor?: string
  s?: CSSModule
}

export default function NavBtn({
  href,
  name,
  Icon,
  iconColor = '#000000',
  s = styles
}: NavBtnProps): ReactElement {
  return (
    <a href={href} className={s.body}>
      <Icon className={s.icon} color={iconColor} title={name} />
      <h2 className={s.name}>{name}</h2>
    </a>
  )
}
