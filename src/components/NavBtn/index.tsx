import { ReactElement } from 'react'
import s from './index.module.css'

interface navBtnProps {
  href: string
  name: string
  Icon: React.ElementType
  iconColor?: string
  altHide?: boolean
}

export default function NavBtn({
  href,
  name,
  Icon,
  iconColor = '#000000',
  altHide
}: navBtnProps): ReactElement {
  return (
    <a href={href} className={altHide ?? false ? s.body_search : s.body}>
      <Icon className={s.icon} color={iconColor} title={name} />
      <h2 className={s.name}>{name}</h2>
    </a>
  )
}
