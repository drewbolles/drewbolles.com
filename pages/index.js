import React from "react";
import Head from "next/head";
import Text from "../components/Text";
import Page from "../components/Page";

import { frontMatter as posts } from "./blog/*.mdx";
import Link from "next/link";
import { Media, Image, Body } from "../components/MediaObject";
import Divider from "../components/Divider";
import { blue } from "material-ui-colors";
import { List, ListItem } from "../components/List";

function Home({ featuredProject }) {
  return (
    <Page name="home">
      <Text size="super" weight={500}>
        <Text as="strong">Greetings!</Text> I'm Drew Bolles and I'm a Senior UI
        Developer specializing in{" "}
        <Text as="strong" variant="underlined">
          responsive web development
        </Text>
        , and{" "}
        <Text as="strong" variant="underlined">
          JavaScript application development
        </Text>
        .
      </Text>
      <Text size="super">
        I have over a decade of professional experience, and have worked with
        all types of clients, from large Fortune 500 companies to small startups
        and local businesses. My focus has always been to create{" "}
        <Text as="strong">fast</Text>, <Text as="strong">resilent</Text>, and{" "}
        <Text as="strong">accessible</Text> sites and applications of the
        highest quality.
      </Text>
      <Text size="super">
        If you would like to contact me, please shoot me an email at{" "}
        <a href="mailto:drewbolles@gmail.com">drewbolles@gmail.com.</a>
      </Text>
      <Divider />
      <Text as="h2">Featured Project</Text>
      <Media style={{ marginBottom: 24 }}>
        <Image>
          <img
            src={featuredProject.image_url}
            alt={featuredProject.name}
            style={{ borderRadius: 8, border: `3px solid ${blue[700]}` }}
          />
        </Image>
        <Body>
          <Text as="h3">{featuredProject.name}</Text>
          <Text>{featuredProject.description}</Text>
          <Link href="/work">
            <a>See more work</a>
          </Link>
        </Body>
      </Media>
      <Divider />
      <Text as="h2">Blog Posts</Text>
      <List>
        {posts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(post => (
            <ListItem key={post.title}>
              <Text as="h3" spacing={0}>
                <Link href={post.__resourcePath.replace(".md", "")}>
                  <a>{post.title}</a>
                </Link>
              </Text>
            </ListItem>
          ))}
      </List>
    </Page>
  );
}

Home.getInitialProps = async function() {
  const { default: projects } = await import("../data/projects.json");
  return { featuredProject: projects.find(project => project.featured) };
};

export default Home;
