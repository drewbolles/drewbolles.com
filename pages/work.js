import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import ProjectTeaser from "../components/ProjectTeaser";
import Divider from "../components/Divider";

function Work({ projects }) {
  return (
    <Page name="work" title="Work">
      <Text as="h1">My Work</Text>
      <Divider />
      {projects.map(project => (
        <ProjectTeaser project={project} key={project.name} />
      ))}
    </Page>
  );
}

Work.getInitialProps = async () => {
  const { default: projects } = await import("../data/projects.json");
  return { projects };
};

export default Work;