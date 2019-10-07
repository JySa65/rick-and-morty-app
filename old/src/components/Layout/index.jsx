import React from 'react'

import Navbar from '../Organisms/navbar'

const Layout = (props) => {
    return (
      <React.Fragment>
        <Navbar children={props.children} />
      </React.Fragment>
    );
}

export default Layout
