import React, {PropTypes as T} from 'react'
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox'
import './navbar.component.css'

const NavBar = ({onChange, onSearch}) => (
  <div className="NavBar">
    <div className="logo ms-font-xl">
      <strong>Awesome App</strong>
    </div>
    <div className="searchbox">
      <SearchBox labelText="Search"
        onChange={(newValue) => console.log('SearchBox onChange fired: ' + newValue)}
        onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
      />
    </div>
  </div>
)

NavBar.defaultProps = {
  onChange: (newValue) => console.log('SearchBox onChange fired: ' + newValue),
  onSearch: (newValue) => console.log('SearchBox onSearch fired: ' + newValue),
}

export default NavBar