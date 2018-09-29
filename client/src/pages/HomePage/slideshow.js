import React from 'react';
import "./Home.css";
import photo1 from "../../images/slideshow/slideshow-01.png";
import photo2 from "../../images/slideshow/slideshow-02.png";
import photo3 from "../../images/slideshow/slideshow-03.png";
import photo4 from "../../images/slideshow/slideshow-04.png";
import photo5 from "../../images/slideshow/slideshow-05.png";
import photo6 from "../../images/slideshow/slideshow-06.png";
import photo7 from "../../images/slideshow/slideshow-07.png";
import photo8 from "../../images/slideshow/slideshow-08.png";
import photo9 from "../../images/slideshow/slideshow-09.png";
import photo10 from "../../images/slideshow/slideshow-10.png";
import photo11 from "../../images/slideshow/slideshow-11.png";
import photo12 from "../../images/slideshow/slideshow-12.png";
import photo13 from "../../images/slideshow/slideshow-13.png";
import photo14 from "../../images/slideshow/slideshow-14.png";
import photo15 from "../../images/slideshow/slideshow-15.png";
import photo16 from "../../images/slideshow/slideshow-16.png";
import photo17 from "../../images/slideshow/slideshow-17.png";
import photo18 from "../../images/slideshow/slideshow-18.png";
import photo19 from "../../images/slideshow/slideshow-19.png";
import photo20 from "../../images/slideshow/slideshow-20.png";



const Slideshow = () => (
    <div className="slideWrap">
    <div className="slideshow">
        <div className="cf">
                <img className="bottom" src={photo1} />
                <img className="top" src={photo2} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo3} />
                <img className="top2" src={photo4} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo5} />
                <img className="top3" src={photo6} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo7} />
                <img className="top4" src={photo8} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo9} />
                <img className="top5" src={photo10} />
        </div>
        </div>

        <div className="slideshow">
        <div className="cf">
                <img className="bottom" src={photo11} />
                <img className="top6" src={photo12} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo13} />
                <img className="top7" src={photo14} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo15} />
                <img className="top8" src={photo16} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo17} />
                <img className="top9" src={photo18} />
        </div>
        <div className="cf">
                <img className="bottom" src={photo19}/>
                <img className="top10" src={photo20} />
        </div>
    </div>
    </div>
    );
    
export default Slideshow;
