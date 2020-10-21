import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">GymApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Modalidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Turmas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Planos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Contato</Link>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to='/login'><button className='btn btn-primary btn-block'>Login</button></Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;