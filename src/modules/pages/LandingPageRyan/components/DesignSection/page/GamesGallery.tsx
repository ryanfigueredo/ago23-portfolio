import React, { useState } from "react";
import "./gallery.css";
import Header from "../../../../../../components/Header/Header"
import Footer from "../../../../../../components/Footer/Footer"

const GamesGallery: React.FC = () => {
  const images = [
    "posts/e_sports/01.png",
    "posts/e_sports/03.png",
    
  ];

  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleImageClose = () => {
    setSelectedImage("");
  };

  const renderGallery = () => {
    const numCols = 3;
    const numRows = Math.ceil(images.length / numCols);
    const galleryItems = [];

    for (let row = 0; row < numRows; row++) {
      const cols = [];
      for (let col = 0; col < numCols; col++) {
        const index = row * numCols + col;
        if (index >= images.length) break;

        const image = images[index];
        const isImageSelected = selectedImage === image;

        cols.push(
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`gallery-image ${isImageSelected ? "selected" : ""} ${
                isImageSelected ? "expanded-image" : ""
              }`}
              style={{
                width: isImageSelected ? "80%" : "30%",
                transition: isImageSelected ? "width 0.2s ease" : "" // Adicionando a transição suave apenas às imagens selecionadas
              }}
              onClick={() => handleImageClick(image)}
            />
        );
      }
      galleryItems.push(
        <div key={row} className="gallery-row">
          {cols}
        </div>
      );
    }

    return <div className="gallery-container">{galleryItems}</div>;
  };

  
  return (
      
        <div className="relative bg-gray-200 w-[100]  overflow-hidden text-left text-[3rem] text-mediumblue-300 ">
          <Header />

          <section
          id="cafe-palmares-gallery"
          className="bg-gray-200 w-[100%] flex flex-col box-border items-center justify-start ">
            
          <h1 className="text-[3rem] text-mediumblue-300 ">Games</h1>
          <h3 className="text-[1rem] text-gray-300 ">• Feito por Ryan•</h3><br />

                  
          <div className="flex flex-col py-[0rem] px-[6.25rem] items-start justify-start gap-[2.5rem] text-center text-[0.75rem] text-darkslateblue-200 font-ibm-plex-mono">
              {renderGallery()}
          </div>
          {selectedImage && (
              <div className="image-overlay" onClick={handleImageClose}>
              <div className="image-container">
                  <img
                  src={selectedImage}
                  alt="Expanded Image"
                  className="expanded-image"
                  />
                  <button className="close-button" onClick={handleImageClose}>
                  X
                  </button>
              </div>
              </div>
          )}
          </section>
          <br />
          <Footer />
        </div>
      

  );
};



export default GamesGallery;
