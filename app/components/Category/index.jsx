import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class Category extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian">breakfast</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">lunch</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">supper</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">meat</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">fish</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">vegetable</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">dessert</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">diery</li></Link>
                            <Link to="/search/zizhucan"><li className="float-left zizhucan">snack</li></Link>
                            <Link to="/search/jiuba"><li className="float-left jiuba">drinks</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian">breakfast</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">lunch</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">supper</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">meat</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">fish</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">vegetable</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">dessert</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">diery</li></Link>
                            <Link to="/search/zizhucan"><li className="float-left zizhucan">snack</li></Link>
                            <Link to="/search/jiuba"><li className="float-left jiuba">drinks</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian">breakfast</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">lunch</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">supper</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">meat</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">fish</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">vegetable</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">dessert</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">diery</li></Link>
                            <Link to="/search/zizhucan"><li className="float-left zizhucan">snack</li></Link>
                            <Link to="/search/jiuba"><li className="float-left jiuba">drinks</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category