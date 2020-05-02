import React from 'react';
import '../App.css';

function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">React Employee Directory</h1>
                    <p className="lead">Easily see and sort employees by different fields.</p>
                </div>
                <br/>
            </div>

            <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Search by Phone #</label>
                <input class="form-control" id="exampleFormControlInput1" />
            </div>
            </form>
        </div>
    )
}

export default Header;