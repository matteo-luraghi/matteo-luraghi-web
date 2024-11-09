import "./css/GlitchImage.css";
import { useEffect, useState } from "react";
import logo from "../logo.svg";

function importAll(r) {
  return r.keys().map(r);
}

function categorizeImages(images) {
  return {
    color: images.filter((img) => img.includes("color")),
    diff: images.filter((img) => img.includes("diff")),
    dodge: images.filter((img) => img.includes("dodge")),
  };
}

// Import all glitched images
const glitchImages = importAll(
  require.context("../../public/assets/glitch", false),
);

const categorizedImages = categorizeImages(glitchImages);

function getRandomImage(category) {
  const group = categorizedImages[category];
  return group[Math.floor(Math.random() * group.length)];
}

function nextType(type) {
  if (type === "color") {
    return "diff";
  }
  if (type === "diff") {
    return "dodge";
  }
  if (type === "dodge") {
    return "color";
  }
  return "color";
}

export default function GlitchImage() {
  const [bgImage, setBgImage] = useState(logo);
  const glitchesNum = 4;
  const glitchesDuration = 90; // in milliseconds

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      let imageType = "dodge";
      for (let i = 0; i < glitchesNum; i++) {
        setTimeout(
          () => {
            // update the type of image to show
            imageType = nextType(imageType);
            // choose the next image
            const nextImage = getRandomImage(imageType) || logo;
            // update the bg image
            setBgImage(nextImage);
          },
          // make each glitch happen as soon
          // as the previous finishes
          glitchesDuration * (i + 1),
        );
      }
      setTimeout(
        () => {
          setBgImage(logo);
        },
        // add a small gap after the last glitch image
        glitchesNum * glitchesDuration + 50,
      );
    }, 4500);

    return () => clearInterval(glitchInterval);
  }, [bgImage]);

  return (
    <div
      className="glitch"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
}
