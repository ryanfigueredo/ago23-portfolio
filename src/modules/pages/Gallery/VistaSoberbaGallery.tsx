import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"

const VistaSoberbaGallery: React.FC = () => {
  const images = [
    "posts/vistasoberba/1.png",
    "posts/vistasoberba/2.png",
    "posts/vistasoberba/4.png",
    "posts/vistasoberba/5.png",
    "posts/vistasoberba/6.png",
    "posts/vistasoberba/7.png",
    "posts/vistasoberba/st1.png",
    "posts/vistasoberba/st2.png",
    "posts/vistasoberba/st3.png",
    "posts/vistasoberba/st4.png",
    "posts/vistasoberba/st5.png",
    "posts/vistasoberba/st6.png",
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
        <h1 className="text-[2rem] text-mediumblue-300">Cuidado Sublime</h1>
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

export default VistaSoberbaGallery;
