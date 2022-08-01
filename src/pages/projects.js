// @ts-nocheck
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Project from "../components/Project";
import MiniCodeList from "../components/MiniCodeList";
import ProjectImage from "../components/ProjectImage";

// image size: 1060 x 840
// import bonsaiImg from "../images/bonasi.png";

const Projects = () => {
  return (
    <Layout pageTitle="meow" selectedPage="projects">
      <div className="">
        <Project title="Bonsai Notes">
          <MiniCodeList
            techArr={["JavaScript", "TypeScript", "React", "Node"]}
          />
          <ProjectImage>
            <StaticImage
              src={"../images/bonsai.png"}
              alt="Image of project"
              className="rounded"
              width={400}
            />
          </ProjectImage>
          markdown goes here
        </Project>
      </div>
    </Layout>
  );
};

export default Projects;
