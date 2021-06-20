import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import Review from './Review';

//與Checkout.jsx對應
const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                
            </div>
        </>
    )
}

export default PaymentForm;
