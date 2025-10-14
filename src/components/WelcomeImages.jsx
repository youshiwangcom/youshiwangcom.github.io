import { useState } from 'react'
import './WelcomeImages.css'

function WelcomeImages({ images }) {
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

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  }

  return (
    <div className="welcome-images">
      <div className="welcome-images-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="welcome-image-item"
            onClick={() => openLightbox(image, index)}
          >
            <img
              src={getImageSrc(image.src)}
              alt={image.alt}
              style={{
                width: image.width ? `${Math.min(image.width, 500)}px` : 'auto',
                height: image.height ? `${Math.min(image.height * (500 / (image.width || 500)), 400)}px` : 'auto',
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
          className="welcome-lightbox-overlay" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="welcome-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="welcome-lightbox-close" 
              onClick={closeLightbox}
              aria-label="关闭图片"
            >
              ×
            </button>
            
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
            
            <div className="welcome-lightbox-info">
              <p className="welcome-image-alt">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WelcomeImages
