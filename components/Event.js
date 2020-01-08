import React from "react";
import css from "styled-jsx/css";
import classNames from "classnames";
import { grey } from "material-ui-colors";
import { MdLink } from "react-icons/md";
import Text from "./Text";
import Box from "./Box";

const { className, styles } = css.resolve`
  .event {
    line-height: 1.2;
  }
  .event:not(:last-child) {
    margin-bottom: 24px;
  }
  .meta {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .place {
    font-weight: medium;
  }
  .date {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.65);
  }
  .talks {
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }
  .talks-item:not(:last-child) {
    margin-bottom: 4px;
  }
`;

function formatDate(date) {
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Event({ event, talks }) {
  return (
    <Box className={classNames("event", className)} key={event.date}>
      <Text as="h4" spacing={0.25} className={classNames("title", className)}>
        {event.name}
      </Text>

      <Text
        className={classNames("date", className)}
        spacing={0.25}
        size="small"
      >
        {formatDate(new Date(event.date))}
      </Text>
      <ul className={classNames("talks", className)}>
        {talks.map(talk => (
          <li className={classNames("talks-item", className)} key={talk.id}>
            {talk.slides ? (
              <a href={talk.slides} target="_blank">
                {talk.title}
              </a>
            ) : (
              talk.title
            )}
          </li>
        ))}
      </ul>

      {event.slides && (
        <Text
          spacing={0}
          size="small"
          className={classNames("slides", className)}
        >
          <a
            href={event.slides}
            className={classNames("slides-link", className)}
          >
            <MdLink style={{ marginRight: 4 }} />
            Slides
          </a>
        </Text>
      )}
      {styles}
    </Box>
  );
}

export default Event;
