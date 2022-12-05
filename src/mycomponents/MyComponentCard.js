import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToXBasket, deleteFromXBasket } from "../store/xbasket/xbasketSlice"

export default function MyComponentCard (props) {
    const dispatch=useDispatch();
    const basket=useSelector((state) => state.xbasket)
    
    const myclick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.target.innerText==="Добавить в список"){
            event.target.innerText="Убрать из списка";
            event.target.style.borderColor='lime';
            event.target.style.backgroundColor= 'maroon';
            dispatch(addToXBasket(props.id-1))
        }
         else if (event.target.innerText==="Убрать из списка"){
            event.target.innerText="Добавить в список"
            event.target.style.borderColor='bisque';
            event.target.style.backgroundColor= 'darkgreen';
            dispatch(deleteFromXBasket(props.id-1))
        } 
    }

    return (
        <Link className="card-main" to={`/largecard/${props.id}`}>
            <img className="card-pic" alt = {props.title} src={props.image}/>  
                <div className="card__info">
                  <span className='card-title__title'>{props.title}</span>
                  <button className="common__button"  onClick={myclick} 
                  style= {(basket[props.id-1])?{borderColor:'lime',backgroundColor:'maroon'}:{borderColor:'bisque',backgroundColor:'darkgreen'}}>{(basket[props.id-1])?'Убрать из списка':'Добавить в список'}</button>   
                </div>
            <span className='card-title__price card-title__price_left'>{props.price}р.</span>
            <span className='card-title__price card-title__price_right'>Цена</span>
        </Link>    
    )
};
