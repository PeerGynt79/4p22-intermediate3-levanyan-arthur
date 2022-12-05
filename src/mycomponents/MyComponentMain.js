import './styles.css';
import MyComponentCards from './MyComponentCards';
import MyComponentLargeCard from './MyComponentLargeCard';
import LayoutBasic from './LayoutBasic';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {initXBasket,loadXBasket} from "../store/xbasket/xbasketSlice"
import { useEffect } from 'react';
import { getProducts } from '../store/products/productsSlice';


function MyComponentMain (){
const dispatch=useDispatch();
const loadedBasket=JSON.parse(localStorage.getItem("basket"))
useEffect(() => {        
  dispatch(getProducts());    
}, []);
axios.get('https://fakestoreapi.com/products')
        .then((result)=>{
            if ((loadedBasket===null)||(loadedBasket===undefined)){
                dispatch(initXBasket(result.data.length))
                } else {
                dispatch(loadXBasket(loadedBasket))
                };
            })
return (
    <div  className='body-container'>
        <Routes>
            <Route path={'/'} element={<LayoutBasic/>}>
                <Route index element={<MyComponentCards/>}/>
                <Route path={'largecard'}>
                    <Route path={':idCard'} element={<MyComponentLargeCard/>}/>
                </Route>
            </Route>
        </Routes>
    </div>
    )
}

export default MyComponentMain;