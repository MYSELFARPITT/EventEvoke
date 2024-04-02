import React, { useState } from 'react';
import '../css/Gallery.css';


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dummy data for gallery images
  const galleryImages = [
    { id: 1, category: 'Decor', imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, category: 'Mandap', imageUrl: 'https://via.placeholder.com/300' },
    { id: 3, category: 'Stage', imageUrl: 'https://via.placeholder.com/300' },
    { id: 4, category: 'Entrance', imageUrl: 'https://via.placeholder.com/300' },
    { id: 5, category: 'Jaimala', imageUrl: 'https://via.placeholder.com/300' },
    { id: 6, category: 'Decor', imageUrl: 'https://via.placeholder.com/300' },
    // Add more images as needed
  ];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' ? galleryImages : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="gallery">
      <div className="gallery__header">
        <h1>Gallery</h1>
        <hr />
        <h2>All About Visuals</h2>
        <p>Browse our stunning collection of wedding memories.</p>
        <div className="gallery__categories">
          <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</button>
          <button className={selectedCategory === 'Decor' ? 'active' : ''} onClick={() => setSelectedCategory('Decor')}>Decor</button>
          <button className={selectedCategory === 'Mandap' ? 'active' : ''} onClick={() => setSelectedCategory('Mandap')}>Mandap</button>
          <button className={selectedCategory === 'Stage' ? 'active' : ''} onClick={() => setSelectedCategory('Stage')}>Stage</button>
          <button className={selectedCategory === 'Entrance' ? 'active' : ''} onClick={() => setSelectedCategory('Entrance')}>Entrance</button>
          <button className={selectedCategory === 'Jaimala' ? 'active' : ''} onClick={() => setSelectedCategory('Jaimala')}>Jaimala</button>
        </div>
      </div>
      <div className="gallery__images">
        {filteredImages.map(image => (
          <img key={image.id} src={image.imageUrl} alt={`Gallery Image ${image.id}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
