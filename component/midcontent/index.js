import React, { useEffect, useMemo } from "react";
import { createClient } from "next-sanity";

const midcontent = ({ content, project }) => {
  const client = createClient({
    projectId: "ml7fiuky",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  return (
    <div className="dark pt-5">
      <h2 className="text-light text-center w-100 mt-5 pt-5">{content?.title}</h2>
      <div className="mind">
        <div className="container my-5 d-flex">
          <div className="row">
            <div className="col-md-4">
              <p className=" re ">- PRIMARY ROLE</p>
              <p className="text-white  fw-bold">{content?.primaryRole}</p>
              {/* <p className=" re">- FOR</p>
              <p className="text-white fw-bold">Alchemy Interactive </p> */}
              <p className=" re ">- DATE</p>
              <p className="text-white fw- bold">
                {new Date(content?._createdAt).getFullYear()}
              </p>
              <p className=" re ">- PROJECT TYPE</p>
              <p className="text-white fw-bold">{content?.projectType}</p>
              <p className=" re">- SOFTWARE</p>
              <p className="text-white fw-bold">{content?.software}</p>
              <p className=" re">- LANGUAGES</p>
              <p className="text-white fw-bold">{content?.languages}</p>
            </div>
            <div className="col-md-8">
              <p className="text-white fw-bold">
                {content?.description[0].children[0].text}
              </p>

              <p className="text-white fw-bold">Playable Link:</p>
              <a className="l" href={content?.playableLink}>
                {content?.playableLink}
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <iframe
            width="60%"
            className="video"
            height={574}
            src={content?.videoUrl}
            title="SAK'D - Coming Soon to Kickstarter!"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default midcontent;
