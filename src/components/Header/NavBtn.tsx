import { ReactElement } from 'react'
import s from './NavBtn.module.css'

interface navBtnProps {
  href: string
  name: string
  Icon: React.ElementType
  iconColor?: string
  altHide?: boolean
}

/**
 *
 * @param root0
 * @param root0.href
 * @param root0.name
 * @param root0.Icon
 * @param root0.iconColor
 * @param root0.altHide
 */
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
