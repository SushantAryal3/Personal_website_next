"use client";
import sadDog from "./photos/sad.jpg";
import sad3 from "./photos/sad3.jpg";
import happydog from "./photos/happy.jpg";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update } from "firebase/database";

const ApologyModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: "0%", left: "0%" });
  const [showImage, setShowImage] = useState(false);
  const [showImageYes, setShowImageYes] = useState(false);
  const modalRef = useRef(null);
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL:
      "https://garimasorry-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "garimasorry",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "616600577384",
    appId: "YOUR_APP_ID",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const docRef = ref(db, "apologyData/clickCounts");

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await get(docRef);
      const data = snapshot.val();

      if (!snapshot.exists()) {
        await set(docRef, { yes: 0, no: 0 });
      }

      if (data?.yes >= 1) {
        setShowImageYes(true);
      } else {
        setIsModalVisible(true);
      }
    };
    fetchData();
  }, []);

  const updateCount = async (field) => {
    const snapshot = await get(docRef);

    if (!snapshot.exists()) {
      await set(docRef, { yes: 0, no: 0 });
    }

    const data = snapshot.val();
    await update(docRef, { [field]: (data[field] || 0) + 1 });
  };

  const handleYesClick = async () => {
    await updateCount("yes");
    setShowImage(false);
    setShowImageYes(true);
    setIsModalVisible(false);
  };

  const handleNoClick = async () => {
    await updateCount("no");
    setShowImage(true);
    setModalPosition(getRandomPosition());
  };

  const getRandomPosition = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const modalWidth = modalRef.current ? modalRef.current.offsetWidth : 0;
    const modalHeight = modalRef.current ? modalRef.current.offsetHeight : 0;

    const randomTop = Math.random() * (windowHeight - modalHeight);
    const randomLeft = Math.random() * (windowWidth - modalWidth);
    return { top: `${randomTop}px`, left: `${randomLeft}px` };
  };

  const ImageToShow = () => {
    if (showImage === true && showImageYes === false) {
      return sadDog;
    } else if (showImage === false && showImageYes === true) {
      return happydog;
    } else {
      return sad3;
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src={ImageToShow()}
        alt="Profile"
        className="w-[100vw] h-[100vh] object-cover"
      />
      {isModalVisible && (
        <div
          ref={modalRef}
          className="absolute bg-white p-4 rounded-lg shadow-lg w-[100%] md:w-[60%] xl:w-[50%] bg-opacity-50"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <div className={`grid grid-cols-1`}>
            <p className="z-20">
              Since last few days I’ve been thinking a lot about you, and I
              can’t begin to express how deeply sorry I am. I know that during a
              time when you were already struggling, I added to your pain with
              my words. Calling you those words was cruel, and I regret it. You
              did not deserve that.
              <br /> Looking back, I realize that instead of offering the
              support and kindness, I make you feel belittle. You were already
              fighting battles I couldn’t fully understand, and I failed to be
              trustful. It pains me to know that I contributed to your hurt, and
              I’m so truly sorry for that.
              <br />
              <br />I hope, in time, you can forgive me, and know that I’m
              thinking of you everyday.
              <br />
              <br /> I hope you’ll consider accepting my apology. If you’re
              ready, I would really appreciate the chance to talk again when you
              feel it’s right. Will you ?
            </p>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleYesClick}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              No
            </button>
          </div>
        </div>
      )}
      {showImageYes && (
        <div className="absolute bottom-12 left-[50%] w-[10px] md:w-[20px] md:left-[70%] md:bottom-[40%] md:text-6xl lg:top-[45%] lg:left-[70%] text-5xl font-bold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-red-400">
            Thank You, Garima
          </span>
        </div>
      )}
    </div>
  );
};

export default ApologyModal;
