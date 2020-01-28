import React from "react";
import Text from "./Text";
import { blue, grey } from "material-ui-colors";

import { mediaQueries } from "../utils/theme";
import useMode from "../utils/useMode";

function ProjectTeaser({ project }) {
  const { name, images, description, technologies } = project;
  const { mode } = useMode();

  return (
    <div className="project-teaser">
      <div className="image">
        <img src={images.sm.src} alt={name} />
      </div>
      <div className="content">
        <Text as="h2" spacing={0.5}>
          {name}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
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
          max-height: 350px;
          flex: 0 0 auto;
          overflow: hidden;
          border: 3px solid ${blue[500]};
          border-radius: 16px;
          margin-bottom: 12px;
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
          background-color: ${mode === "light" ? grey[100] : grey[600]};
          border-radius: 4px;
          margin-bottom: 4px;
          padding: 4px 8px;
          font-size: 14px;
          transition: 150ms ease-in-out background-color;
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
