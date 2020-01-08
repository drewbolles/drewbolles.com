import React from "react";

function Logo({ width = 97, ...rest }) {
  const height = (111 / 97) * width;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="29.531539916992188 15.540791511535645 97.40945434570312 111.69419860839844"
      {...rest}
    >
      <switch>
        <g>
          <path
            fill="#231F20"
            d="M126.81 75.006c.091 1.059.131 2.27.131 3.52 0 26.859-21.851 48.709-48.71 48.709-20.801 0-39.25-13.16-46.03-32.779a.759.759 0 01-.28-.5c-.01-.09 0-.189.03-.279a48.36 48.36 0 01-2.191-19.8l-.01-57.34c0-.49.35-.9.83-.98a.989.989 0 011.11.641l10.54 29.529a48.624 48.624 0 0136-15.9 48.627 48.627 0 0136.069 15.971l10.57-29.6a.99.99 0 011.11-.641.99.99 0 01.829.98v58.469zm-1.87 3.519c0-1.201-.04-2.35-.131-3.439V22.305l-9.199 25.77c-.12.33-.41.58-.761.65a1.01 1.01 0 01-.939-.34 46.62 46.62 0 00-35.68-16.561 46.677 46.677 0 00-35.61 16.48c-.23.27-.59.41-.94.33a.997.997 0 01-.76-.641l-9.17-25.68v51.66a46.38 46.38 0 00-.22 4.551c0 4.949.779 9.811 2.29 14.449l44.26-5.18c.06-.01.12-.01.18 0l44.351 5.27a46.333 46.333 0 002.329-14.538zm-2.82 15.991l-43.95-5.221-43.85 5.141a46.665 46.665 0 0043.91 30.799c20.14-.001 37.34-12.809 43.89-30.719z"
          />
          <path
            fill="#404040"
            d="M124.81 75.086c.091 1.09.131 2.238.131 3.439 0 5.08-.82 9.959-2.33 14.539l-44.351-5.27a.544.544 0 00-.18 0l-44.26 5.18a46.585 46.585 0 01-2.29-14.449c0-1.52.069-3.02.22-4.551v-51.66l9.17 25.68c.12.33.41.58.76.641.351.08.71-.061.94-.33a46.674 46.674 0 0135.61-16.48 46.62 46.62 0 0135.68 16.561c.229.27.59.4.939.34.351-.07.641-.32.761-.65l9.199-25.77v52.78zm-24.45 3.439c0-1.721-1.4-3.121-3.13-3.121a3.125 3.125 0 103.13 3.121zm-38 0c0-1.721-1.4-3.121-3.13-3.121a3.125 3.125 0 103.13 3.121z"
          />
          <path
            fill="#FCEBD1"
            d="M78.17 89.295l43.95 5.221c-6.55 17.91-23.75 30.719-43.89 30.719a46.665 46.665 0 01-43.91-30.799l43.85-5.141z"
          />
          <path
            fill="#231F20"
            d="M97.23 75.404c1.729 0 3.13 1.4 3.13 3.121a3.124 3.124 0 11-6.25 0c0-1.72 1.4-3.121 3.12-3.121zm2.13 3.121a2.13 2.13 0 00-2.13-2.121c-1.171 0-2.12.951-2.12 2.121 0 1.18.949 2.129 2.12 2.129a2.13 2.13 0 002.13-2.129z"
          />
          <path
            fill="#62AA9F"
            d="M97.23 76.404c1.17 0 2.13.951 2.13 2.121a2.13 2.13 0 01-2.13 2.129 2.122 2.122 0 01-2.12-2.129c0-1.17.95-2.121 2.12-2.121z"
          />
          <path
            fill="#231F20"
            d="M59.23 75.404c1.729 0 3.13 1.4 3.13 3.121a3.124 3.124 0 11-6.25 0c0-1.72 1.4-3.121 3.12-3.121zm2.13 3.121a2.13 2.13 0 00-2.13-2.121c-1.171 0-2.12.951-2.12 2.121 0 1.18.949 2.129 2.12 2.129a2.13 2.13 0 002.13-2.129z"
          />
          <path
            fill="#62AA9F"
            d="M59.23 76.404c1.17 0 2.13.951 2.13 2.121a2.13 2.13 0 01-2.13 2.129 2.122 2.122 0 01-2.12-2.129c0-1.17.95-2.121 2.12-2.121z"
          />
        </g>
      </switch>
    </svg>
  );
}

export default Logo;
