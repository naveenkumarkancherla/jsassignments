import React from 'react'

const Header = () => {
  return (
    <div>
      <nav  className="navbar navbar-light bg-light">
        <a className="navbar-brand">Restaurant</a>
        <button style={{margin:10}} className="btn btn-primary">
            Orders <span style={{fontSize:'20'}} className="badge bg-danger rounded-pill">
                0</span>
        </button>
      </nav>
    </div>
  )
}

export default Header
