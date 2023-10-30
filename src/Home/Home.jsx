import React, { useState } from 'react'
import './Home.scss'
import { data } from '../lib/data'
import Aos from 'aos';
import html from '../img/html.svg'
import js from '../img/js.svg'
import react from '../img/react.svg'
import sass from '../img/sass.svg'
import github from '../img/github.jpg'
import bootstrap from '../img/bootstrap-logo.png'
import css from '../img/css (1).svg'
// import JavascriptIcon from '@mui/icons-material/Javascript';
// import CssIcon from '@mui/icons-material/Css';
// import HtmlIcon from '@mui/icons-material/Html';

function Home() {
    Aos.init();

    const [itemData, setData] = useState([])

    return (
        <div className='home'>
            <div className="home__container">
                <h1>F-3 GURUH</h1>
                <ul>
                    {
                        data?.map((e) => (
                            <li data-aos={e.id % 2 == 0 ? 'fade-left' : 'fade-right'} data-aos-duration="500" key={e.id} className='ulli row'>
                                <img className='col-3 row' src={e.img} alt="" />
                                <h2 className='col-3'>{e.name}</h2>
                                <h3 className='col-3'><img src={html} alt="" />                              
                                 <img src={sass} alt="" /> <img src={css} alt="" /> <img src={js} alt="" /> <img src={bootstrap} alt="" /> <img src={react} alt="" /> <img src={github} alt="" /></h3>
                                <button onClick={() => setData(e)} className='btn btn-primary col-2' type="button" data-toggle="modal" data-target="#exampleModal">Button</button>

                            </li>
                        ))
                    }
                </ul>

                <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="#exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="#exampleModalLabel">{itemData?.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className='ulitem'>
                                    {itemData?.project?.map((q) => (
                                        <li key={q.id}>
                                            <h5><a href={q.link} target='_blank'><img src={q.img} alt="" />project</a></h5>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
