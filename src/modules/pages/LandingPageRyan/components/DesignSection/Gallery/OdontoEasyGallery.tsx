import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../../../../../components/Header/Header"
import Footer from "../../../../../../components/Footer/Footer"

const OdontoEasyGallery: React.FC = () => {
  const images = [
    "posts/odontoeasy/01.png",
    "posts/odontoeasy/1.png",
    "posts/odontoeasy/2.png",
    "posts/odontoeasy/4.png",
    "posts/odontoeasy/5.png",
    "posts/odontoeasy/6.png",
    "posts/odontoeasy/7.png",
    "posts/odontoeasy/8.png",
    "posts/odontoeasy/9.png",
    "posts/odontoeasy/10.png",
    "posts/odontoeasy/11.png",
    "posts/odontoeasy/12.png",
    "posts/odontoeasy/13.png",
    "posts/odontoeasy/14.png",
    "posts/odontoeasy/15.png",    
  ];

  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const renderGallery = () => {
    const numCols = 3;
    const numRows = Math.ceil(images.length / numCols);

    const imageVariants = {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    };

    const galleryItems = [];

    for (let row = 0; row < numRows; row++) {
      const cols = [];
      for (let col = 0; col < numCols; col++) {
        const index = row * numCols + col;
        if (index >= images.length) break;

        const image = images[index];
        const isImageSelected = selectedImage === image;

        cols.push(
          <motion.img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            initial="initial"
            animate="animate"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }} // Animação ao passar o mouse sobre a imagem
            style={{ 
              width: isImageSelected ? "20%" : "20%",
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
    <div className="relative bg-gray-200 w-[100] overflow-hidden text-left text-[3rem] text-mediumblue-300">
      <Header />

      <section
        className="bg-gray-200 w-[100%] flex flex-col box-border items-center justify-start"
      >
        <h1 className="text-[2rem] text-mediumblue-300">Clínica Odontoeasy</h1>
        <br />

        <div className="flex flex-col px-[6.25rem] items-start justify-start text-center">
          {renderGallery()}
        </div>
      </section>
      <br />
      <Footer />
    </div>
  );
};

export default OdontoEasyGallery;
