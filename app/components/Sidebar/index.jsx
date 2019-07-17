import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link } from 'react-router'


class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

        return (
            <div id="sidebar">
                <ul>
                    <li> <Link to="/search/jingdian"><i className="catogory-icon icon-bg1"></i>breakfast</Link></li>
                    <li> <Link to="/search/jingdian"><i className="catogory-icon icon-bg2"></i>meat</Link></li>
                    <li> <Link to="/search/jingdian"><i className="catogory-icon icon-bg3"></i>fish</Link></li>
                    <li> <Link to="/search/jingdian"><i className="catogory-icon icon-bg1"></i>vegetable</Link></li>
                    <li> <Link to="/search/jingdian"><i className="catogory-icon icon-bg2"></i>fruit</Link></li>
                    <li> <Link to="/search/jingdian"><i className="catogory-icon icon-bg3"></i>dessert</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar