"use strict";


var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: null,
            password: null
        };
    },
    userChangeHandler: function (event) {
        this.setState({username: event.target.value});
    },
    passwordChangeHandler: function (event) {
        this.setState({password: event.target.value});
    },
    formSubmitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/login/',
            type: 'POST',
            data: this.state,
            error: function (xhr, textStatus, errorThrown) {
                var json = JSON.parse(xhr.responseText);
                for (var prop in json) {
                    alert(prop + "  " + json[prop]);
                }
            }
        }).then(function (data) {
            sessionStorage.setItem('authToken', data.token);
            Router.HashLocation.push('photo');
        });
    },

    render: function () {
        var stilizare = {
            color: 'blue',
            background: 'rgba(255,140,0,0.6)',

            border: '2px solid orange',
            borderRadius: '25px',
            position: 'center',
            width: '30%',
            margin: '0 auto',
            marginTop: '7%',
            textAlign: 'center'

        };
        var stilizare2 = {

            background: 'orange',
            color: 'white',
            fontFamily: 'Helvetica Neue,sans-serif',
            fontSize: '18px',
            lineheight: '30px',
            borderRadius: '20px',
            WebkitBorderRadius: '20px',
            MozBorderRadius: '20px',
            border: '0',
            width: '120px',
            height: '32px'
        };


        return (

            <div className="LoginForm" style={stilizare}>

                <form>
                    <center><img src="../Images/text2.png" width="280" height="100"></img></center>
                    <center><img src="../Images/sign.png" width="140" height="50"></img></center>

                    <input type="text" name="u" placeholder="Username" required="required"
                           onChange={this.userChangeHandler}/><br /><br />
                    <input type="password" name="p" placeholder="Password" required="required"
                           onChange={this.passwordChangeHandler}/><br /><br />
                    <button type="submit" class="btn btn-primary btn-block btn-large" style={stilizare2}
                            onClick={this.formSubmitHandler}>Let me in!
                    </button>

                    <br /><br /><Link to="register">Create an account</Link>
                </form>

            </div>
        );
    }
});

module.exports = Login;