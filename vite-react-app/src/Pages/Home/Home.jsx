import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import style from './Home.module.scss'
import Card from '../../Components/Card/Card'
import { fetchOrderData } from '../../Store/slice/menuSlice';
const Home = () => {
    const data = useSelector(state => state.menu.data);
    const loading = useSelector(state => state.menu.loading); // Замените 'menuSlice' на название вашего slice
    const error = useSelector(state => state.menu.error); // Замените 'menuSlice' на название вашего slice


    return (
        <div className={style.Home__container}>
            {data && data.map((item) => {
                return (
                    <Card key={item.id} item={item}/>
                )
            })}
           
        </div>
    )
}
export default Home