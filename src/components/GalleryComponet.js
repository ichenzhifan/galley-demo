require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imagesData = require('data/images.json');

imagesData = imagesData => {
  imagesData.forEach(v => {
    v.fileName = require('images/' + v.fileName);
  });

  return imagesData;
};

class GalleryComponet extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-section">
          <h1>hello</h1>
        </section>
        <nav className="img-control"></nav>
      </section>
    );
  }
}

GalleryComponet.defaultProps = {

};

export default GalleryComponet;
