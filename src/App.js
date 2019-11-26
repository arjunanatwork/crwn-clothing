import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.action";

class App extends React.Component {

    componentDidMount() {

        const { checkUserSession } = this.props
        checkUserSession()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to={'/'}/>) : (<SignInAndSignUpPage/>)}/>
                </Switch>
            </div>
        );
    }


}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
