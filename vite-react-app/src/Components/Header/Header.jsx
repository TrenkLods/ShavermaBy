import React from 'react'
import style from './Header.module.scss'

const Header = () => {
    return (
    <div className={style.container}>
        <div className={style.header}>
            LOGO

            <div className={style.search}>
                <p> SEARCH</p>
            </div>
            <div className={style.account}>
                <p>cart</p>
                <p>user</p>

            </div>
        </div>
        <nav>
            <ul>
                <li>Новинки</li>
                <li>Все</li>
                <li>Популярная шаурма</li>
                <li>Шаурма с курицей</li>
                <li>Шаурма с говядиной</li>
                <li>Шаурма с сытной начинкой</li>
                <li>Комбо </li>
                <li>Напитки</li>
                <li>Салаты</li>
             
            </ul>
        </nav>
        
    </div>
    )
}
export default Header