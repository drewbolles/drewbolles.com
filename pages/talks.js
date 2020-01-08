import React from "react";

import Page from "../components/Page";
import Text from "../components/Text";
import Box from "../components/Box";
import Divider from "../components/Divider";
import { MdLink } from "react-icons/md";
import { List, ListItem } from "../components/List";

function formatDate(date) {
  return new Date(date).toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Talks({ talks }) {
  return (
    <Page name="talks" title="Talks">
      <Text as="h1">My Talks</Text>
      <Divider />
      {talks.map(talk => (
        <React.Fragment key={talk.title}>
          <article className="talk">
            <Text as="h2" spacing={0.5}>
              {talk.title}
            </Text>
            <Text spacing={0.5}>
              <a className="link" href={talk.slides} target="_blank">
                <MdLink />
                Slides
              </a>
            </Text>
            <Text as="h4" spacing={0.25}>
              Presented at:
            </Text>
            <List>
              {talk.events
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((event, i) => (
                  <ListItem key={i}>
                    <Text spacing={0} style={{ fontWeight: 500 }}>
                      {event.name}
                    </Text>
                    <Text spacing={0} size="small">
                      {formatDate(event.date)}
                    </Text>
                  </ListItem>
                ))}
            </List>
          </article>
          <Divider />
        </React.Fragment>
      ))}
      <style jsx>{`
        .talk {
          margin-bottom: 24px;
        }
        .link {
          display: flex;
        }
      `}</style>
    </Page>
  );
}

Talks.getInitialProps = async function() {
  const eventsJson = import("../data/events.json");
  const talksJson = import("../data/talks.json");
  const [{ default: events }, { default: talks }] = await Promise.all([
    eventsJson,
    talksJson,
  ]);
  talks.forEach(talk => {
    let talkEvents = events.filter(event => event.talk.includes(talk.id));
    talk.events = talkEvents;
  });

  return { talks };
};

export default Talks;
