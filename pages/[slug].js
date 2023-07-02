import React from 'react'
import Head from "component/head/index.js"
import Footer from "component/footer/index.js"
import Navbar from "component/navbar/index.js"
import Midcontent from '/component/midcontent/index.js'
import { useRouter } from 'next/router';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';



const client = createClient({
  projectId: 'ml7fiuky',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export async function getStaticPaths() {
  const projects = await client.fetch(`*[_type == "project"]`);

  const paths = projects.map((project) => ({
    params: { slug: project.slug.current },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );

  return {
    props: {
      project,
    },
  };
}


export const Content = ({project}) => {
  return (
    <>
      <Head />
      {/* navebare start */}
      <Navbar />
      {/* navebar end */}
      {/* mid content start */}
      <Midcontent content={project}/>
      {/* mid content end */}
      {/* content 9 end */}
      <Footer />
    </>
  )
}
export default Content;