import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

import Typography from './Typography';

import './ShareList.css';

const ShareList = ({ title, slug }) => {
  const handleClick = ev => {
    ev.preventDefault();
    window.open(ev.currentTarget.href, '', 'width=600,height=300');
  };

  return (
    <ul className="share-list">
      <li className="share-list-item">
        <Typography variant="caps" is="strong" style={{ margin: 0 }}>
          Share:
        </Typography>
      </li>
      <li className="share-list-item">
        <a
          href={`http://www.facebook.com/share.php?u=https://www.drewbolles.com${slug}&t=${title}`}
          aria-label="Share on Facebook"
          onClick={handleClick}
        >
          <FaFacebook size={24} />
        </a>
      </li>
      <li className="share-list-item">
        <a
          href={`https://twitter.com/intent/tweet?original_referer=www.drewbolles.com&source=tweetbutton&text=${title}&url=https://www.drewbolles.com${slug}&via=bollskis`}
          aria-label="Share on Twitter"
          onClick={handleClick}
        >
          <FaTwitter size={24} />
        </a>
      </li>
    </ul>
  );
};

export default ShareList;
