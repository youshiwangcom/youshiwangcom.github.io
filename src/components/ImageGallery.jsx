import { useState } from 'react'
import './ImageGallery.css'

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) {
    return null
  }

  // 处理图片路径，确保与 base path 兼容
  const getImageSrc = (src) => {
    if (src.startsWith('http') || src.startsWith('data:')) {
      return src
    }
    return import.meta.env.BASE_URL + src.replace(/^\//, '')
  }

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index })
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    
    const currentIndex = selectedImage.index
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedImage({ ...images[newIndex], index: newIndex })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev')
    } else if (e.key === 'ArrowRight') {
      navigateImage('next')
    }
  }

  return (
    <div className="image-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openLightbox(image, index)}
          >
            <img
              src={getImageSrc(image.src)}
              alt={image.alt}
              style={{
                width: image.width ? `${Math.min(image.width, 400)}px` : 'auto',
                height: image.height ? `${Math.min(image.height * (400 / (image.width || 400)), 300)}px` : 'auto',
                maxWidth: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={closeLightbox}
              aria-label="关闭图片"
            >
              ×
            </button>
            
            {images.length > 1 && (
              <>
                <button 
                  className="lightbox-nav lightbox-prev" 
                  onClick={() => navigateImage('prev')}
                  aria-label="上一张图片"
                >
                  ‹
                </button>
                <button 
                  className="lightbox-nav lightbox-next" 
                  onClick={() => navigateImage('next')}
                  aria-label="下一张图片"
                >
                  ›
                </button>
              </>
            )}
            
            <img
              src={getImageSrc(selectedImage.src)}
              alt={selectedImage.alt}
              style={{
                width: selectedImage.width ? `${selectedImage.width}px` : 'auto',
                height: selectedImage.height ? `${selectedImage.height}px` : 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
            
            <div className="lightbox-info">
              <p className="image-alt">{selectedImage.alt}</p>
              {images.length > 1 && (
                <p className="image-counter">
                  {selectedImage.index + 1} / {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
