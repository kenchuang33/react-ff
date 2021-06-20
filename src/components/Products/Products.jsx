import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import Footer from  '../Pages/Footer';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e844e75d-7452-43af-9b02-2d2d77257663/acg-air-nasu-gore-tex-%E6%AC%BE-hn7MsB.png'},
//     { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-silver-select-202011_GEO_TW?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1613673937000' },

// ];

//對應App.js的div Products props
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles(); //hook

//對應到product.jsx的product
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
            <Footer/>
        </main>
        
    )

}

export default Products;