import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import imgurl1 from './img/cake.jpg'
import imgurl2 from './img/kid.png'
import imgurl3 from './img/dessert.jpg'
import TweenMax from 'gsap';
import GSAP from 'gsap-react-plugin';
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';




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

    componentDidMount() {
        TweenMax.set("#foreground", { alpha: 1 }, 0);
        TweenMax.from(".path", 1, { x: 50, scale: 1.2 }, 0);
        TweenMax.from(".small-path", 1, { scale: 2.4, x: 150 }, 0);
        // Staggered menu items 
        TweenMax.set(('.icon-line'), { autoAlpha: 0, width: "0%", ease: Sine.easeInOut });
        TweenMax.to('.icon-line', 2, { autoAlpha: 1, width: "35%", ease: Sine.easeInOut });

        TweenMax.staggerFrom(".fadeText", 1, { delay: 2, opacity: 0, x: -50 });
        TweenMax.to("#foreground", 1, {
            delay: 4, x: '100%',
            //initiate Bootstrap
            onComplete: function () {
                $('#carousel').carousel('pause');
                TweenMax.to(".fadeText", .7, {
                    scale: 1,
                    ease: Cubic.easeOut
                })
                $('#carousel').carousel('cycle');

                $('#carousel').one('slide.bs.carousel', function () {
                    TweenMax.set(('.icon-line'), { autoAlpha: 0, width: "0%", ease: Sine.easeInOut });
                    TweenMax.to('.icon-line', 2, { autoAlpha: 1, width: "35%", ease: Sine.easeInOut });

                });

                $('#carousel').on('slide.bs.carousel', function (e) {
                    TweenMax.fromTo("#foreground", 0.7, { x: "0%" }, { x: "100%", ease: Sine.easeInOut });
                    TweenMax.set(('.icon-line'), { autoAlpha: 0, width: "0%", ease: Sine.easeInOut });
                    TweenMax.to('.icon-line', 2, { autoAlpha: 1, width: "35%", ease: Sine.easeInOut });
                    tl.play();
                });
            }
        });

        function slideIn(el) {
            return TweenMax.from(el, 0.7, {
                autoAlpha: 0, x: "+=50"
            })
        }
    
        function slideOut(el) {
            return TweenMax.to(el, 0.7, {
                autoAlpha: 0, x: "+=50"
            })
    
        }
    
    
    
        var tl = new TimelineMax();
        tl.add(slideIn(".paph-wrapper"));
    
        tl.addPause()
        tl.add(slideOut(".paph-wrapper"));
        tl.add(slideIn(".paph-wrapper1"));
    
        tl.addPause()
        tl.add(slideOut(".paph-wrapper1"));
        tl.add(slideIn(".paph-wrapper2"));
    
        tl.addPause()
        tl.add(slideOut(".paph-wrapper2"));
        tl.call(tl.play, [1], tl);
    }
}

export default Carourel