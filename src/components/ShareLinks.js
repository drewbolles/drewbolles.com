import React from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import Text from "./Text";

function handleClick(ev) {
  ev.preventDefault();
  window.open(ev.currentTarget.href, "", "width=600,height=300");
}

function ShareLinks({ title, slug }) {
  return (
    <ul className="share-links">
      <li className="share-links-item">
        <Text as="strong">Share:</Text>
      </li>
      <li className="share-links-item">
        <a
          href={`http://www.facebook.com/share.php?u=https://www.drewbolles.com/${slug}&t=${title}`}
          aria-label="Share on Facebook"
          onClick={handleClick}
        >
          <FaFacebook size={24} />
        </a>
      </li>
      <li className="share-links-item">
        <a
          href={`https://twitter.com/intent/tweet?original_referer=www.drewbolles.com&source=tweetbutton&text=${title}&url=https://www.drewbolles.com/${slug}&via=bollskis`}
          aria-label="Share on Twitter"
          onClick={handleClick}
        >
          <FaTwitter size={24} />
        </a>
      </li>
      <style jsx>{`
        .share-links {
          display: flex;
          list-style: none;
          padding: 0;
        }
        .share-links-item:not(:last-child) {
          margin-right: 12px;
        }
      `}</style>
    </ul>
  );
}

export default ShareLinks;
