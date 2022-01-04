import React, { Fragment, useEffect, useState } from 'react';
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';
import { useParams } from 'react-router-dom';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Sorry from "../../images/sorry.jpg";
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData';

const categories = [
    "Laptop",
    "Footwear",
    "console",
    "Games",
    "Attire",
    "Phones",
    "Camera"
]
const Products = () => {
    const dispatch = useDispatch();

    const alert = useAlert();

    const [price, setPrice] = useState([0, 500000]);
    const [category, setCategory] = useState("");

    const [ratings, setRatings] = useState(0);

    const {
        products,
        loading,
        error,
        filteredProductsCount,
    } = useSelector((state) => state.products);

    const { keyword } = useParams();

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    const setPriceRange = (event) => {
        event.preventDefault();
        console.log([Number(event.target[0].value), Number(event.target[1].value)]);
        setPrice([Number(event.target[0].value), Number(event.target[1].value)]);
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword, price, category, ratings));
    }, [dispatch, keyword, price, category, ratings, alert, error]);


    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>
                <MetaData title="PRODUCTS --- MYKART" />
                <h1 className='productsHeading'>Products</h1>
                <div className='products'>
                    {filteredProductsCount > 0 ?
                        products &&
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        )) : <div classname='no_product'>
                            <div><h1>Sorry. No products found</h1></div>
                            <br />
                            <div><img src={Sorry} classname="sorry" alt="download" /></div>
                        </div>
                    }
                </div>
                <div className='filterBox'>
                    <Typography>Price</Typography>
                    <Slider
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={500000}
                    />
                    <div className='minmax'>
                        <form onSubmit={setPriceRange}>
                            <label className='rangelabel'>Min</label>
                            <input type='number' className='range' placeholder='Minimum' />
                            <label className='rangelabel'>Max</label>
                            <input type='number' className='range' placeholder='Maximum' />
                            <input name='max' type='submit' className='btn-filter' value='Filter Price' />
                        </form>
                    </div>
                    <div className='category'>
                        <Typography>
                            Categories
                        </Typography>
                        <ul className='categoriesBox'>
                            {categories.map((category) => (
                                <li
                                    className='category-link'
                                    key={category}
                                    onClick={() => setCategory(category)}
                                >{category}</li>
                            ))}
                        </ul>
                    </div>
                    <fieldset>
                        <Typography component="legend">Ratings Above</Typography>
                        <Slider
                            value={ratings}
                            onChange={(e, newRatings) => { setRatings(newRatings) }}
                            valueLabelDisplay="auto"
                            aria-labelledby="continuous-slider"
                            min={0}
                            max={5}
                        />
                    </fieldset>
                </div>
            </Fragment>}

        </Fragment>
    )
}

export default Products;
