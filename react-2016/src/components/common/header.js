"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        var stilizare = {
            background: 'rgba(192,192,192,0.3)',
            border: 'ridge',
            borderColor: 'rgba(204,204,204,0.1)'
        };
        var stilizare2 = {
            color: 'blue'
        };
        return (
            <nav className="navbar navbar-default" style={stilizare}>
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="app" style={stilizare2}>Home</Link></li>
                        <li><Link to="about" style={stilizare2}>About</Link></li>
                        <li><Link to="register" style={stilizare2}>Register</Link></li>

                    </ul>
                        <span className="navbar-right">
                        <img className="logo"
                                 src={'http://diylogodesigns.com/blog/wp-content/uploads/2016/05/instagram-Logo-PNG-Transparent-Background-download.png'}
                                 width="100px" margin-right="50px"/></span>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
