import './styles.css';
import MyComponentCard from './MyComponentCard';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function MyComponentCards () {
const [basketActive,setBasketActive] = useState(false)
const [searchValue,setSearchValue] = useState('');
const [categoryValue,setCategoryValue] = useState('all');
const [categories,setCategories] = useState([]);
const basket=useSelector((state)=>state.xbasket);
const [products] = useSelector((state) => [state.products.entities]);

useEffect( () => {
    setBasketActive(basket.reduce((accum, item) => accum + item, 0))
},[basket])

useEffect( () => {
    const newCategories = Array.from(new Set(products.map((item)=>item.category)))
    newCategories.unshift('all')
    setCategories(newCategories)
},[])

return (
    <>
        <div className="header header_search">
            <div className="header__side">
                <span className="header-side__item">Поиск</span>
                <input className="header-side__item header-side__item_input common__text" id="searchval" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>
            </div>
            <div className="header__side">
                <span className="header-side__item">Категория</span>
                <select className="header-side__item header-side__item_input"  name='category-selector' value={categoryValue} onChange={(e)=>setCategoryValue(e.target.value)}>
                    {categories.map((item,idx)=> <option  className='header-side__item header-side__item_input common__text' key={idx}>{item}</option>)}
                </select>        
            </div>
            <Link to='/' className={(basketActive)?'header-side__item basket-icon_full':'header-side__item basket-icon_empty'} id='basket-link'></Link>
        </div>
        <div className="main__cards-area">
            <h1  className='common__text_big'> Каталог товаров</h1>
                {products
                    .filter((item)=>new RegExp(searchValue, "i").test(item.title))
                    .filter((item)=>(item.category===categoryValue)||(categoryValue==='all'))
                    .map((item)=>{
                        return <MyComponentCard key={item.id}
                                                id={item.id}
                                                image={item.image} 
                                                description={item.description} 
                                                title={item.title}
                                                price={item.price}/>
                    })
                }
        </div>
    </>
)
};
