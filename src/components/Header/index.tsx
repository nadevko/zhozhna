import { ReactElement } from 'react'
import s from './index.module.css'
import {
  RiSearchLine as IconSearch,
  RiPlayCircleLine as IconPlayer,
  RiQuestionAnswerLine as IconForum,
  RiAccountCircleLine as IconAccount
} from 'react-icons/ri'
import { ReactComponent as Logo } from '../../assets/logo-zhozhna.svg'
import NavBtn from '../NavBtn'
import Search from '../Search'

export default function Header(): ReactElement {
  return (
    <header className={s.body}>
      <nav className={s.nav_altHide}>
        <a href="/search">
          <Logo className={s.logo} />
        </a>
        <a href="/search" className={s.subNameParent}>
          <h1 className={s.subName}>Прывідная кроў</h1>
        </a>
      </nav>
      <nav className={s.nav}>
        <Search />
        <NavBtn href="/search" name="Пошук" Icon={IconSearch} altHide />
        <NavBtn href="#player" name="Бачма" Icon={IconPlayer} />
        <NavBtn href="#comments" name="Размовы" Icon={IconForum} />
        <NavBtn href="#account" name="Акаўнт" Icon={IconAccount} />
      </nav>
    </header>
  )
}
