import React from "react";

interface isFavoriteProps {
  isFavorite: boolean;
}

const FavoriteBtnIcon: React.FC<isFavoriteProps> = ({ isFavorite }) => {
  const circleColor = isFavorite ? "white" : "#F3F3F5";
  const circleStroke = isFavorite ? "#32C0C6" : "none";
  const heartColor = isFavorite ? "#32C0C6" : "#8C8C8C";

  return (
    <svg
      role="img"
      aria-labelledby="favoriteBtnIconTitle"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="favoriteBtnIconTitle">
        Ícone representando um coração dentro de um círculo
      </title>
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill={circleColor}
        stroke={circleStroke}
      />
      <g clipPath="url(#clip0)">
        <path
          d="M20.2168 28C20.0385 28 19.8877 27.9375 19.7642 27.8125L13.3459 21.5417C13.2774 21.4861 13.1831 21.3958 13.0631 21.2708C12.9431 21.1458 12.7528 20.9184 12.4922 20.5885C12.2317 20.2587 11.9985 19.9201 11.7928 19.5729C11.5871 19.2257 11.4037 18.8056 11.2425 18.3125C11.0814 17.8194 11.0008 17.3403 11.0008 16.875C11.0008 15.3472 11.4362 14.1528 12.3071 13.2917C13.1779 12.4306 14.3814 12 15.9174 12C16.3425 12 16.7762 12.0747 17.2185 12.224C17.6608 12.3733 18.0722 12.5747 18.4528 12.8281C18.8334 13.0816 19.1608 13.3194 19.4351 13.5417C19.7094 13.7639 19.9699 14 20.2168 14.25C20.4637 14 20.7242 13.7639 20.9985 13.5417C21.2728 13.3194 21.6002 13.0816 21.9808 12.8281C22.3614 12.5747 22.7728 12.3733 23.2151 12.224C23.6574 12.0747 24.0911 12 24.5162 12C26.0522 12 27.2557 12.4306 28.1265 13.2917C28.9974 14.1528 29.4328 15.3472 29.4328 16.875C29.4328 18.4097 28.6477 19.9722 27.0774 21.5625L20.6694 27.8125C20.5459 27.9375 20.3951 28 20.2168 28Z"
          fill={heartColor}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="18.4333"
            height="16"
            fill="white"
            transform="translate(11 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FavoriteBtnIcon;
