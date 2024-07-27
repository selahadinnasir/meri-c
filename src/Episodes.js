import React from "react";
import "./Episodes.css";

const episodes = [
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg",
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ",
  },
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg",
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
  },
  // Add more episodes as needed
];

const episodes2 = [
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg", // Replace with actual image paths
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ",
  },
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg",
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
  },
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg", // Replace with actual image paths
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ",
  },
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg",
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
  },
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg", // Replace with actual image paths
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ",
  },
  {
    title: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
    imgSrc:
      "https://meri.et/backend/uploads/images/explore/1718689893-667120659e7f6.jpg",
    description: "የኢትዮልያ ካፒታል ገበያ የወደፊት እጣ ፈንታ",
  },
  // Add more episodes as needed
];

const Episodes = () => {
  return (
    <div className="episodes-container">
      <h2 className="episodes-header">Explore all episodes</h2>
      <div className="episodes">
        {episodes.map((episode, index) => (
          <div className="episode-item" key={index}>
            <img
              src={episode.imgSrc}
              alt={episode.title}
              className="episode-image"
            />
            <div className="episode-details">
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
            </div>
          </div>
        ))}
        {episodes2.map((episode, index) => (
          <div className="episode-item-s" key={index}>
            <img
              src={episode.imgSrc}
              alt={episode.title}
              className="episode-image-s"
            />
            <div className="episode-details-s">
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
