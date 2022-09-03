import { ReactElement } from 'react'
import s from './index.module.css'

export default function Search(): ReactElement {
  return <input type="search" placeholder="Пошук" name="search" className={s.body} />
}
