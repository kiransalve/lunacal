"use client";
import React, { useState, useEffect } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Image from "next/image";

const Gallary = () => {
  const initialPhotos = () => {
    const savedPhotos = localStorage.getItem("galleryPhotos");
    return savedPhotos
      ? JSON.parse(savedPhotos)
      : ["/img/nature.jpg", "/img/nature-1.jpg", "/img/nature-2.jpg"];
  };

  const [photos, setPhotos] = useState(initialPhotos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;

  useEffect(() => {
    localStorage.setItem("galleryPhotos", JSON.stringify(photos));
  }, [photos]);

  const handleAddMorePhotos = (event) => {
    const newPhotos = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    const updatedPhotos = [...photos, ...newPhotos];
    setPhotos(updatedPhotos);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : photos.length - visibleItems
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < photos.length - visibleItems ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="p-4 sm:p-10">
      <div className="bg-slate-600 h-auto rounded-lg shadow-xl p-4 sm:p-6">
        {/* Header section */}
        <div className="flex justify-between items-start">
          {/* Icons */}
          <div className="flex flex-col justify-between h-[100px]">
            <FaRegCircleQuestion size={22} />
            <MdWindow size={24} />
          </div>

          {/* Title and Add More button */}
          <div className="flex justify-between w-full items-center lg:ml-6 ml-3">
            <div className="lg:text-xl text-sm font-semibold">
              <div className="text-white cursor-pointer bg-black px-4 py-2 rounded-lg shadow-md sm:px-5 sm:py-2">
                Gallery
              </div>
            </div>

            {/* Add More and Navigation */}
            <div className="flex items-center space-x-4 ">
              {/* Hidden input to select files */}
              <input
                type="file"
                accept="image/*"
                multiple
                id="fileInput"
                className="hidden"
                onChange={handleAddMorePhotos}
              />
              <label
                htmlFor="fileInput"
                className="flex items-center px-3 py-2 bg-slate-800  text-white text-sm rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out"
              >
                <IoAddOutline className="mr-2 text-center" />
                <div className="lg:block hidden">ADD MORE</div>
              </label>

              <div className="flex space-x-2">
                <div
                  onClick={handleLeftClick}
                  className="bg-black p-2 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out sm:p-3"
                >
                  <TiArrowLeft className="text-white" size={20} />
                </div>
                <div
                  onClick={handleRightClick}
                  className="bg-black p-2 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out sm:p-3"
                >
                  <TiArrowRight className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 ml-4 sm:ml-7">
          {photos
            .slice(currentIndex, currentIndex + visibleItems)
            .map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={photo}
                  alt={`Gallery ${index}`}
                  width={230}
                  height={120}
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
