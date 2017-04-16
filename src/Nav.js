import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

const Nav = ({ red, blue })=>(
  <div className = 'container'>
    <ul className = 'nav nav-tabs'>
      <Link to= 'red'>Red ({ red }) </Link>{' '}
      <Link to= 'blue'>Blue({ blue }) </Link>
    </ul>
  </div>

)

const mapStateToProps = (state) => (
  state.counter
  // {
  //   red: state.counter.red,
  //   blue: state.counter.blue
  // }
)

export default connect(mapStateToProps)(Nav)

 //export default Nav;
