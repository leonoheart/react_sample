import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'








class LeftLabel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

        return (
            <div id="left-label">
                <ul>
                    <li>
                        <a href="#">
                            <i className="catogory-icon icon-bg1"></i>
                            <span className="catogory-name">breakfast</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="catogory-icon icon-bg2"></i>
                            <span className="catogory-name">meat</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="catogory-icon icon-bg3"></i>
                            <span className="catogory-name">fish</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="catogory-icon icon-bg4"></i>
                            <span className="catogory-name">vegetable</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftLabel