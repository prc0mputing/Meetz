import React, {Component} from 'react';
import {DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity} from 'office-ui-fabric-react/lib/DocumentCard';
import './themes/style.css';
import SidebarMenu from './components/sidebarmenu/sidebarmenu.component';
import NavBar from './components/navbar/navbar.component';
import Content from './components/content/content.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <NavBar />
        </div>        
        <div className="body">
          <div className="content">
          <Content />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>      
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
