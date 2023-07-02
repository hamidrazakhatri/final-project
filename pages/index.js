import Head from "component/head";
import About from "component/about";
import Navbar from "component/navbar";
import Professional from "component/professional";
import Content1 from "component/content1";
import ProjectCard from "component/content6";
import Content7 from "component/content7";
import Content8 from "component/content8";
import Footer from "component/footer";
import { createClient } from "next-sanity";
// import { Component } from "react";
// import Head from "component/head"
export default function Home({ projects }) {
  return (
    <>
      <Head />
      <Navbar />
      <Content1 />
      {/* content 1 end */}
      {/* content 2 start */}
      <About />
      {/* content 2  */}
      {/* content 5 start  */}
      <Professional />
      {/* content 5 end  */}
      {/* content 6 start */}
      <ProjectCard projects={projects} />
      {/* content 6 end */}
      {/* content 7 start  */}
      <Content7 />
      {/* content 7 end */}
      {/* content 8 start */}
      <Content8 />

      <Footer />
    </>
  );
}

const client = createClient({
  projectId: "ml7fiuky",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});
export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`);

  return {
    props: {
      projects,
    },
  };
}
