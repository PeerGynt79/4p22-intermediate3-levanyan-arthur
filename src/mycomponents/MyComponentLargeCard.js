import './styles.css';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {addToXBasket, deleteFromXBasket} from "../store/xbasket/xbasketSlice"

export default function MyComponentLargeCard () {
    const {idCard}=useParams()
    const dispatch=useDispatch();
    const basket=useSelector((state) => state.xbasket)
    const [products] = useSelector((state) => [state.products.entities]);
    
    const myclick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.target.innerText==="Добавить в список"){
            event.target.innerText="Убрать из списка";
            event.target.style.borderColor='lime';
            event.target.style.backgroundColor= 'maroon';
            dispatch(addToXBasket(idCard-1))
        }
         else if (event.target.innerText==="Убрать из списка"){
            event.target.innerText="Добавить в список"
            event.target.style.borderColor='bisque';
            event.target.style.backgroundColor= 'darkgreen';
            dispatch(deleteFromXBasket(idCard-1))
        } 
    }
    return (
    <>
        <h1  className='common__text_big'>{`${products[idCard-1].title}`}</h1>
        <div className='large-card__main-block'>
            <img className='large-card__main-block-image' alt = {`product ${products[idCard-1].id}`} src={`${products[idCard-1].image}`}/>  
            <div className='large-card__main-block_internal-block'>
                <button className="common__button common__button_basket common__text"  onClick={myclick}  style= {(basket[idCard-1])?{borderColor:'lime',backgroundColor:'maroon'}:{borderColor:'bisque',backgroundColor:'darkgreen'}}>{(basket[idCard-1])?'Убрать из списка':'Добавить в список'}</button>   
                <div className='large-card__internal-block_info-block'>
                    <h3 className='large-card__info-block large-card__info-block_caption'>Категория:</h3>
                    <h4 className='large-card__info-block large-card__info-block_content'>{`${products[idCard-1].category}`}</h4>
                </div>
                <div className='large-card__internal-block_info-block'>
                    <h3 className='large-card__info-block large-card__info-block_caption'>Описание:</h3>
                    <h4 className='large-card__info-block large-card__info-block_content'>{`${products[idCard-1].description}`}</h4>
                </div>
            </div>
        </div>
    </>
    )
};
