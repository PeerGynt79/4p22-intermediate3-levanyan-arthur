import './styles.css';
import MyComponentHeader from './MyComponentHeader';
import MyComponentFooter from './MyComponentFooter';
import { Outlet } from 'react-router-dom';

export default function LayoutBasic (){
    return (
    <>
        <MyComponentHeader/>
        <Outlet/>
        <MyComponentFooter/>
    </>    
    )
}