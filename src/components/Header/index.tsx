import { ReactElement } from 'react'
import styles from './index.module.css'
import {
  RiPlayCircleLine as IconPlayer,
  RiQuestionAnswerLine as IconForum,
  RiAccountCircleLine as IconAccount
} from 'react-icons/ri'
import { ReactComponent as Logo } from '../../assets/logo-zhozhna.svg'
import NavBtn from '../NavBtn'
import Search from '../Search'

interface HeaderProps {
  s?: CSSModule
}

export default function Header({ s = styles }: HeaderProps): ReactElement {
  return (
    <header className={s.body}>
      <nav className={s.navLeft}>
        <a href="search">
          <Logo className={s.logo} />
        </a>
        <a href="search" className={s.subName}>
          Прывідная кроў
        </a>
      </nav>
      <nav className={s.navRight}>
        <Search />
        <NavBtn href="#player" name="Бачма" Icon={IconPlayer} />
        <NavBtn href="#comments" name="Размовы" Icon={IconForum} />
        <NavBtn href="#account" name="Акаўнт" Icon={IconAccount} />
      </nav>
    </header>
  )
}
