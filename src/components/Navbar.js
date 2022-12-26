import React from 'react';


function navbar(props) {
    return (
            <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="\">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="\">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="\About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="\Support">Support</a>
                            </li>
                        </ul>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Oceanic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Green</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Dark</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Light</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeTheme}/>
                            <label className={`formCheckLabel text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> Enable {props.mode} mode </label>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default navbar
