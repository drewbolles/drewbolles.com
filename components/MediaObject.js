import React, { useContext } from "react";
import classNames from "classnames";

const MediaContext = React.createContext();

export function Media({
  align = "top",
  children,
  contextValue = {},
  reverse,
  spacing = 24,
  ...rest
}) {
  return (
    <MediaContext.Provider value={{ ...contextValue, spacing, reverse }}>
      <div
        className={classNames("media", {
          "media--reverse": reverse,
          [`media--align-${align}`]: align,
        })}
        {...rest}
      >
        {children}
        <style jsx>{`
          .media {
            display: flex;
          }
          .media--reverse {
            flex-direction: row-reverse;
          }
          .media--align-top {
            align-items: flex-start;
          }
          .media--align-center {
            align-items: center;
          }
          .media--align-bottom {
            align-items: flex-end;
          }
        `}</style>
      </div>
    </MediaContext.Provider>
  );
}

export function Image({ children, ...rest }) {
  const { reverse, spacing } = useContext(MediaContext);
  return (
    <div
      className={classNames("image", { "image--reverse": reverse })}
      {...rest}
    >
      {children}
      <style jsx>{`
        .image {
          flex: 0 0 auto;
          margin-right: ${spacing}px;
        }
        .image--reverse {
          margin-right: 0;
          margin-left: ${spacing}px;
        }
      `}</style>
    </div>
  );
}

export function Body({ children, ...rest }) {
  return (
    <div className="body" {...rest}>
      {children}
      <style jsx>{`
        .body {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}
