import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import imgurl1 from './img/cake.jpg'
import imgurl2 from './img/kid.png'
import imgurl3 from './img/dessert.jpg'


class Carourel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="content-wrapper">
                <div id="foreground"></div>
                <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100"
                                src={imgurl1}
                                alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                src={imgurl2}
                                alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                src={imgurl3}
                                alt="Third slide"/>
                        </div>
                    </div>
                </div>

                <div id="slider-container">
                    <div className="paph-wrapper">
                        <div id="text">
                            <h2 className="fadeText">a big meal</h2>
                            <i className="icon-line"></i>
                            <p className="fadeText">Can you image how delicious it is!</p>
                        </div>
                        <div className="small-path"></div>
                        <div className="path"></div>
                    </div>
                    <div className="paph-wrapper1">
                        <div id="text">
                            <h2 className="fadeText">an goog idea</h2>
                            <i className="icon-line"></i>
                            <p className="fadeText">The idea in the meal make a sunny!</p>
                        </div>
                        <div className="small-path"></div>
                        <div className="path"></div>
                    </div>
                    <div className="paph-wrapper2">
                        <div id="text">
                            <h2 className="fadeText">dessert</h2>
                            <i className="icon-line"></i>
                            <p className="fadeText">...for the one who loves sweet food.</p>
                        </div>
                        <div className="small-path"></div>
                        <div className="path"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carourel