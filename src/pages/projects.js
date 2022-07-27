import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/project";

const Projects = () => {
  return (
    <Layout pageTitle="meow" selectedPage="projects">
        <div className="">
          <Project>project</Project>
        </div>
    </Layout>
  );
};

export default Projects;
