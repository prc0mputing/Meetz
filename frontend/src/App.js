import React, { Component } from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import './themes/style.css';

class App extends Component {
  render() {
    return (
      <DocumentCard onClickHref='http://bing.com'>
        <DocumentCardPreview
          previewImages={ [
            {
              previewImageSrc: require('./documentpreview.png'),
              iconSrc: require('./iconppt.png'),
              width: 318,
              height: 196,
              accentColor: '#ce4b1f'
            }
          ] }
        />
        <DocumentCardTitle title='دانلود فایل نمونه سرمایه گذاری پیشرفته'/>
        <DocumentCardActivity
          activity='ایجاد شده در 2 آذر 1397'
          people={
            [
              { name: 'کتی لارسن', profileImageSrc: require('./avatarkat.png') }
            ]
          }
          />
      </DocumentCard>
    );
  }
}

export default App;
