import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/project";
import MainContentWrapper from "../components/main-content-wrapper";

const Projects = () => {
  return (
    <Layout pageTitle="meow">
      <MainContentWrapper>
        <div className="">
          <Project>project</Project>
        </div>
      </MainContentWrapper>
    </Layout>
  );
};

export default Projects;
