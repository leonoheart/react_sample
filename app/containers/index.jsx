import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 
import './style.less'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                <div id='overlay'>
                    <svg id="svg1" version="1.1" xmlns="http://www.w3.org/2000/svg" width="900px" height="500px">
                        <text stroke="#dd3915" fill="#dd3915">Gourmet
                        <animateTransform attributeName="transform" type="scale" begin="0s" dur="10s" from="1" to="3" dur="10s" repeatCount="1" additive="sum"/>
                        <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 100 200" to="360 30 20" dur="10s" fill="freeze" repeatCount="1" additive="sum"/>
                        </text>
                    </svg>  
                    <svg  id="svg2" version="1.1" xmlns="http://www.w3.org/2000/svg" width="900px" height="500px">
                            <text stroke="#dd3915" fill="#dd3915" y="50%" x="50%">Gourmet 
                            <set attributeName="opacity" to="0" begin="0s" /> 
                            <animate attributeName="opacity" begin="10s" dur="5s" from="0" to="1" repeatCount="1" />     
                            <animate attributeName="opacity" begin="15s" dur="5s" from="1" to="0" repeatCount="1" />                       
                            </text>
                    </svg>  
                </div>
                        

                <ReactCSSTransitionGroup component="div" className="react-container" transitionName="slide-in" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div key={this.props.location.pathname} className={this.props.location.pathname}>
                        {
                            this.state.initDone
                            ? this.props.children
                            : <div>正在加载...</div>
                        }
                    </div>
                </ReactCSSTransitionGroup>        
            </div>
            
            
            
        )
    }
    componentDidMount() {
        // 获取位置信息
        setTimeout(function(){$("#svg1").css("display", "none");}, 10000);     
        setTimeout(function(){$("#overlay").css("display", "none");}, 20000);     

        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })

        // 更改状态
        this.setState({
            initDone: true
        })
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
