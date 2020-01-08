import React from "react";
import Text from "./Text";
import { blue, grey } from "material-ui-colors";
import { mediaQueries } from "../utils/theme";

function ProjectTeaser({ project }) {
  const { name, image_url, description, technologies } = project;
  return (
    <div className="project-teaser">
      <div className="image">
        <img src={image_url} alt={name} />
      </div>
      <div className="content">
        <Text as="h2" spacing={0.5}>
          {name}
        </Text>
        <Text>{description}</Text>
        <Text as="strong" size="small">
          My Role:
        </Text>
        <Text>{project.role}</Text>
        <Text
          as="strong"
          size="small"
          style={{ display: "inline-block", marginBottom: 4 }}
        >
          Technology Used:
        </Text>
        <ul className="tech">
          {technologies.map(tech => (
            <li className="tech-item" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .project-teaser:not(:last-child) {
          margin-bottom: 48px;
        }

        .image {
          width: 100%;
          flex: 0 0 auto;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .image img {
          border: 3px solid ${blue[500]};
          border-radius: 16px;
        }

        .content {
          flex-grow: 1;
        }

        .tech {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -4px;
          padding: 0;
          list-style: none;
        }
        .tech-item {
          background: ${grey[100]};
          border-radius: 4px;
          margin-bottom: 4px;
          padding: 4px 8px;
          font-size: 14px;
        }
        .tech-item:not(:last-child) {
          margin-right: 4px;
        }

        @media (min-width: 768px) {
          .project-teaser {
            display: flex;
          }
          .project-teaser:nth-child(even) {
            flex-direction: row-reverse;
          }
          .image {
            width: calc(50% - 24px);
            margin-bottom: 0;
            margin-right: 24px;
          }
          .project-teaser:nth-child(even) .image {
            margin-right: 0;
            margin-left: 24px;
          }
        }

        @media (min-width: ${mediaQueries.m}px) {
          .image {
            width: 350px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectTeaser;