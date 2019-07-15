import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left">
                    <div id="logo">
                        <a href="./index.html"><h1>Gourmet</h1></a> 
                    </div>
                </div>
                <div className="home-header-middle">
                    <form role="form" className="search-container form-inline">
                        <Link to="/city">
                                <span>{this.props.cityName}</span>
                                &nbsp;
                                <i className="icon-angle-down"></i>
                        </Link>
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                        <button className="btn btn-primary btn-danger" type="submit">Search</button>  
                    </form>                                                                   
                </div>
                <div className="home-header-right">
                    <Link to="/Login">
                        <i className="icon-user"></i>
                    </Link>
                </div>  
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader