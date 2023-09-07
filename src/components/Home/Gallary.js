import React, { useState } from 'react';
import './index.scss';


export function Gallary ({ imageUrls, imageDescriptions })  {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  const galleryDiv = React.createElement(
    'div',
    { className: 'imageUrls' },
    imageUrls.map((url, index) =>
      React.createElement(
        'img',
        {
          key: index,
          src: url,
          alt: `Image ${index + 1}`,
          onClick: () => handleImageClick(index),
        }
      )
    )
  );

  const closeButton = React.createElement(
    'button',
    {
      className: 'close-button',
      onClick: handleImageClose,
    },
    'X'
  );

  const expandedImageDiv = selectedImage !== null ? React.createElement(
    'div',
    { className: 'expandedImage' },
    closeButton,
    React.createElement(
      'img',
      {
        src: imageUrls[selectedImage],
        alt: `Expanded Image ${selectedImage + 1}`,
        onClick: handleImageClose,
      }
    ),
    React.createElement(
      'p',
      null,
      imageDescriptions[selectedImage]
    )
  ) : null;

  return (
    <>
      {galleryDiv}
      {expandedImageDiv}
      
    </>
  );
};


