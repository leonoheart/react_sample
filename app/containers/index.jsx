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
                    {/* <div id="svg1" >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <text stroke="#dd3915" fill="#dd3915">Gourmet
                            <animateTransform attributeName="transform" type="scale" begin="0s" dur="10s" from="1" to="3" dur="10s" repeatCount="1" additive="sum"/>
                            <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 400 500" to="360 30 20" dur="10s" fill="freeze" repeatCount="1" additive="sum"/>
                            </text>
                        </svg>
                       
                     </div>
                     <div id="svg2" >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                <text stroke="#dd3915" fill="#dd3915" x="50%" y="50%" textAnchor="middle">Gourmet 
                                <set attributeName="opacity" to="0" begin="0s" /> 
                                <animate attributeName="opacity" begin="10s" dur="5s" from="0" to="1" repeatCount="1" />     
                                <animate attributeName="opacity" begin="15s" dur="5s" from="1" to="0" repeatCount="1" />                       
                                </text>
                        </svg> 
                    </div> */}

                    <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="100%" height="100%">

                            <text stroke="#3399FF" fill="#3399FF" x="650" y="350" textAnchor="middle" fontSize="100px">G
                                <animate attributeName="rotate" begin="0s" dur="5s" from="0" to="360" repeatCount="1" />
                            </text>

                            <text stroke="#A80000" fill="#A80000" x="700" y="350" fontSize="60px" >
                                <set attributeName="opacity" to="1" begin="0s" /> OUR
                                    <animate attributeName="opacity" begin="0s" dur="5s" from="0" to="1" repeatCount="1" />                                   
                            </text>
                            <text  stroke="#FF9933" fill="#FF9933" x="840" y="350" fontSize="60px" >
                                <set attributeName="x" to="840" begin="0s" /> MET 
                                <animate attributeName="x" begin="0s" dur="5s" from="1240" to="840" repeatCount="1"/>
                            </text>
                           
  




                            {/* <text id="rear-text" stroke="#FF9933" fill="#FF9933" x="840" y="350" fontSize="60px" >MET 
                    
                                <animate 
                                    attributeName="x" 
                                    begin="0s" 
                                    dur="15s" 
                                    from="840" 
                                    to="1240" 
                                    repeatCount="1" 
                                    calcMode="spline" 
                                    keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1"
                                    keySplines=".42 0 1 1; 0 0 .59 1; .42 0 1 1;0 0 .59 1;.42 0 1 1;0 0 .59 1;.42 0 1 1;0 0 .59 1;"  
                                    values="840; 1240; 1040; 1240; 1090; 1240; 1150; 1240" 
                                    fill="freeze" 
                                    />     
                                </text>  */}
                
                            
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
        // setTimeout(function(){$("#svg1").css("display", "none");}, 10000);     
        // setTimeout(function(){$("#overlay").css("display", "none");}, 20000);     

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
