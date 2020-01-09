import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import Divider from "../components/Divider";
import Event from "../components/Event";
import { Row, Col } from "../components/Grid";
import Drew from "../components/Drew";
import Box from "../components/Box";

function About({ events, talks }) {
  return (
    <Page name="about" title="About Me">
      <Text as="h1">About Me</Text>
      <Divider />
      <Row>
        <Col m={8}>
          <Text size="xlarge">
            Hi, I'm Drew! I'm a <strong>Senior User Interface Developer</strong>
            . I began my voyage into web development when I was about 10,
            building sites with GeoCities before moving into coding layouts in
            tables. Fast forward a few years, and I'm still plodding about in
            HTML &amp; CSS, reading{" "}
            <a href="http://alistapart.com">A List Part</a>, and developing fan
            sites for my favorite shows. I pride myself on being a{" "}
            <Text as="strong">responsible web developer</Text>, and striving to
            solve problems by putting people first.
          </Text>

          <Text size="xlarge">
            My primary areas of interest lie in{" "}
            <Text as="strong">front-end development</Text>,{" "}
            <Text as="strong">performance</Text>, and{" "}
            <Text as="strong">JavaScript applications</Text>. All sites and
            applications should be fast, beautiful, and accessible, and I truly
            believe in providing all of my users the best experience possible.
          </Text>
        </Col>
        <Col m={4}>
          <Drew />
        </Col>
      </Row>
      <Divider />
      <Text size="large">
        If you'd like to contact me, please send me an{" "}
        <a href="mailto:drewbolles@gmail.com">email</a>.
      </Text>
    </Page>
  );
}

export default About;
