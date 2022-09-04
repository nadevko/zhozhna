import { ReactElement } from 'react'
import styles from './index.module.css'
import NavBtn from '../NavBtn'
import NavBtnStyles from './NavBtn.module.css'
import { RiSearchLine as IconSearch } from 'react-icons/ri'

interface SearchProps {
  s?: CSSModule
}

export default function Search({ s = styles }: SearchProps): ReactElement {
  return (
    <form action="submit" method="get" className={s.body}>
      <input type="search" placeholder="Пошук" name="search" className={s.input} />
      <NavBtn href="search" name="Пошук" Icon={IconSearch} s={NavBtnStyles} />
    </form>
  )
}
