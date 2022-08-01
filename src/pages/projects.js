// @ts-nocheck
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Project from "../components/Project";
import ProjectCodeList from "../components/ProjectCodeList";
import ProjectImage from "../components/ProjectImage";
import ExternalLink from "../components/ExternalLink";

// image size: 1060 x 840

const Projects = () => {
  return (
    <Layout pageTitle="meow" selectedPage="projects">
      <div className="">
        <Project title="Bonsai Notes">
          <ProjectImage>
            <StaticImage
              src={"../images/bonsai.png"}
              alt="Image of project"
              className="rounded"
              width={1200}
              height={600}
            />
          </ProjectImage>
          <ProjectCodeList
            techArr={["JavaScript", "TypeScript", "React", "Node"]}
          >
            <ExternalLink
              name="View Code"
              iconName="github"
              url="https://github.com/billybrown-iii/bonsai-notes"
            />
          </ProjectCodeList>
          <div className="w-full my-6 mx-4">
            <hr />
          </div>
        </Project>
      </div>
    </Layout>
  );
};

export default Projects;
