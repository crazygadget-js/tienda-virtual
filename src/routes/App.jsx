import React from 'react'; 
import Home from '../pages/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom' 
import Checkout from '../pages/Checkout' 
import Information from '../pages/Information' 
import Payment from '../pages/Payment' 
import Notfound from '../pages/Notfound' 
import Success from '../pages/Success' 
import Layout from '../components/Layout' 
import AppContext from '../context/AppContext' 
import useInitialState from '../Hooks/useInitialState'

const App = () => { 
    const initialState = useInitialState()
    return ( 
        <AppContext.Provider value={initialState}>
        <BrowserRouter>  
            <Layout> 
            <Switch>
                <Route exact path="/" component ={Home} /> 
                <Route exact path="/checkout" component ={Checkout} />
                <Route exact path="/checkout/information" component ={Information} />
                <Route exact path="/checkout/payment/" component ={Payment} />
                <Route exact path="/checkout/success" component ={Success} /> 
                <Route component ={Notfound}/>
            </Switch> 
           </Layout>
        </BrowserRouter>  
        </AppContext.Provider> 
    );
}

export default App;