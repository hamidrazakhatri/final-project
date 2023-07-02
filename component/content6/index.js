import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";
const content6 = ({ projects }) => {
  const client = createClient({
    projectId: "ml7fiuky",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="cground py-5">
      <div className="container ">
        <div className="col-md-12 ">
          <div className="row">
            {projects?.map((e, i) => {
              console.log(e)
              return (
                <div key={i} className="col-md-4 widhon">
                  <Link href={e?.slug?.current} passHref>
                    <img
                      src={builder.image(e.mainImage).url()}
                      width="90%"
                      className="img"
                      alt=""
                    />
                  </Link>
                  <p className="text-white fs-5  fw-bold p-2 pb-0">
                    {e?.title}
                  </p>
                  <p className="text-white fs-6 p-2 pt-0">
                    {e.shortDescription ? e.shortDescription[0].children[0].text :""}...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default content6;
