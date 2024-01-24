import React, { useEffect, useState } from 'react'
import style from './Card.module.scss'
const Card = ({ item }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const tags = ['action', 'delivery'];

    const img2 = item.img
    console.log(img2)
    return (
        <div className={style.card}>
            <div className={style.card__visual__info}>
                <img src={img2} />

                <div className={style.card__teg}>


                    {item.tegs.map(tag => (
                        <p key={tag.id}>{tag.teg_title }</p>
                    ))}


                </div>
            </div>
            <div className={style.card__main__info}>
                <h3 style={{ fontWeight: 600 }}>{item.title} </h3>
                <h3 style={{ fontWeight: 100 }}>Price :{item.size.find(item => item.title === 'стандарт').price}$</h3>

            </div>
            <div className={style.card__another__info}>
                <p>{item.rating}⭐</p>

                <p>{item.size.find(item => item.title === 'стандарт').grams}<br />{item.description}</p>
            </div>

        </div>
    )
}
export default Card