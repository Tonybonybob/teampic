import React, { Component } from 'react'
import '../css/heading.css'
export default class Head extends Component {
    render(){
        return(
            <header className="heading">
                <div className="logo">teampic</div>
                <div className="flex-wrapp">
                    <input className="searchArea" type="text" name="search"/>
                    <button className="searchBtn"></button>
                </div>
                <div className="flex-wrapp">
                    <button className="logIn">Войти</button>
                    <button className="signIn">Регистрация</button>
                </div>  
            </header>
        )
    }
}