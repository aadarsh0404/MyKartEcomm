import React, { Fragment, useEffect } from 'react';
import { CgMouse } from "react-icons/all";
import "./Home.css"
import ProductCard from './ProductCard.jsx';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from "react-alert"

const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products, resultPerPage } = useSelector(state => state.products)

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [alert, dispatch, error]);

    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>
                <MetaData title="MyKart" />
                <div className='banner' >
                    <a href='#container'>
                        <button>
                            scroll <CgMouse />
                        </button>
                    </a>
                </div>
                <h2 className='homeHeading'>Featured Products</h2>
                <div className='container' id='container'>
                    {products && products.slice(0,8).map(product => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </Fragment>}
        </Fragment>

    )
}


export default Home;