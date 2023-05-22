import * as React from 'react';
import '../Banner/Banner.css';

const variants = ['360p', '720p', 'HD', 'FullHD', '2k'];

export const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__block">
        <p className="Banner__content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea
          enim explicabo libero minus officiis rem unde. Ad aliquam amet animi
          beatae cumque distinctio dolorem esse, ex modi obcaecati odio omnis
          sed tempora ut vitae. Beatae ea nihil vel voluptatem.
        </p>
        <div className="Banner__bottom">
          <ul className="Banner__specItems">
            {variants.map((variant, index) => {
              return <li key={index} className="Banner__specItem">{variant}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
