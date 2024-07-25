import React from "react";

function MainContent() {
  const articleList = [
    "Shipping Policy",
    "I Need To Check My Order Status",
    "I Need To Cancel My Order",
    "How Can I Exchange An Item From My Order?",
    "When Will My Order Ship?",
    "I Received An Error When Trying To Place My Order",
    "I Didn't Receive My Order",
    "I Didn't Receive A Confirmation Email",
    "What Are The Shipping Rates For International Orders",
    "In-Store Pickup FAQ",
    "How Do I Place An Order For In-Store Pickup?",
  ];
  return (
    <>
      <div className="faq-article">
        <h2>MY ORDER & DELIVERY</h2>

        {articleList.map((article, index) => (
          <div className="article-name" key={`article${index}`}>
            <span>{article}</span>
            <span>+</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainContent;
