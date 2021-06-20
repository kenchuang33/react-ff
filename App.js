import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart, Checkout } from './components';
import { commerce } from './library/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Pages/Home';

// import fire from './fire';


const App = () => {
  const [products, setProducts] = useState([]); //商品hook
  const [cart, setCart] = useState({}); //購物車hook
  
//   const [user, setUser] = useState(''); 
//   const [email, setEmail] = useState(''); 
//   const [password, setPassword] = useState(''); 
//   const [emailError, setEmailError] = useState(''); 
//   const [passwordError, setPassError] = useState(''); 
//   const [hasAccount, setHasAccount] = useState(false); 

//   const clearInputs =()=>{
//     setEmail('');
//     setPassword(''); 
//   }

//   const clearErrors=()=>{
//     setEmailError('');
//     setPasswordError(''); 
//   }


//   const handleLogin=()=>{
//     clearErrors();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email,password)
//       .catch(err=>{
//         switch(err.code){
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case  " auth/user-not-found":
//            setEmailError(err.message);
//            break;
//           case "auth/wrong-password":
//             setPassordError(err.message);
//             break; 
//         }
//       });
//   };


// const handleSignup=()=>{
//   clearErrors();
//   fire
//   .auth()
//   .createUserWithEmailAndPassword(email,password)
//   .catch(err=>{
//     switch(err.code){
//       case "auth/email-already-in-use":
//       case "auth/invalid-email":      
//        setEmailError(err.message);
//        break;
//       case "auth/weak-password":
//         setPassordError(err.message);
//         break; 
//     }
//   });
// };


// const handleLogout=()=>{
// fire.auth().signOut();

// };

// const authListener  =()=>{
//   fire.auth().onAuthStateChanged(user=>{
//     if(user){
//       clearInputs();
//       setUser(user);
//     }else{
//       setUser("");
//     }
//   });
// };


var firebaseConfig = {
  apiKey: "AIzaSyA_XxSzXd9CcEtsg1pM08SY9N0AEA93X-E",
  authDomain: "react-f0805.firebaseapp.com",
  projectId: "react-f0805",
  storageBucket: "react-f0805.appspot.com",
  messagingSenderId: "987299999681",
  appId: "1:987299999681:web:af2398d003205ec5600940"
};
// Initialize Firebase
// const fire=firebase.initializeApp(firebaseConfig);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  } //抓取commerce.js的商品API

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  } //抓取commerce.js的購物車API

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }//抓取commerce.js的商品ID、數量API

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };//Cart的Update功能

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };//Cart的remove功能

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    // authListener();//firebase
  }, []); //hook, run at th start on the render

  

  //對應Products.jsx、Cart.jsx、CartItem.jsx、Checkout.jsx那邊的props
  //Navbar的totalItems={cart.total_items}為購物車上的數字
  //利用Router來判斷更換頁面，Switch內的為可更換的page，Route為可更換的page的路徑
  return (
    <>
      <Router>
        <Navbar totalItems={cart.total_items} />
        <Switch>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart} />
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>

        </Switch>
      </Router>
    </>
  );
}
export default App;
