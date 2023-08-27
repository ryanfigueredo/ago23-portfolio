import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../../../../../components/Header/Header"
import Footer from "../../../../../../components/Footer/Footer"

const ColonialGallery: React.FC = () => {
  const images = [
    "posts/colonial/01.png",
    "posts/colonial/04.png",
    "posts/colonial/02.png",
    "posts/colonial/03.png",
    "posts/colonial/05.png",
    "posts/colonial/06.png",
    "posts/colonial/07.png",
    "posts/colonial/08.png",
    "posts/colonial/09.png",
    "posts/colonial/10.png",
    "posts/colonial/11.png",
    "posts/colonial/12.png",
    "posts/colonial/13.png",
    "posts/colonial/14.png",
    "posts/colonial/15.png",
    "posts/colonial/16.png",
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
        <h1 className="text-[2rem] text-mediumblue-300">Colonial Gourmet</h1>
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

export default ColonialGallery;
