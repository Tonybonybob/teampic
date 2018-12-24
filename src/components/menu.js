import React, { Component } from 'react'
import '../css/menu.css'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render(){
        return(
                    <div className="navigation">
                        <ul>
                            <li>
                                <Link to="/vector" className="vectorImg menuImg"></Link>
                                <div className="menuLink">Векторы</div>
                            </li>
                            <li>
                                <Link to="/psd" className="psdImg menuImg"></Link>
                                <div className="menuLink">PSD</div>
                            </li>
                            <li>
                                <Link to="/icons" className="iconsImg menuImg"></Link>
                                <div className="menuLink">Иконки</div>
                            </li>
                            <li>
                                <Link to="/3d" className="dddImg menuImg"></Link>
                                <div className="menuLink">3-D</div>
                            </li>
                        </ul>
                    </div>
        )
    }
}