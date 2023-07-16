// import getVideoId from "get-video-id";
// import YouTube from "react-youtube";
// import Vimeo from "react-vimeo";

// function Preview({ value }) {
//   const { id, service } = getVideoId(`${value.url}`);

//   if (!id) return null;

//   if (service === "youtube") {
//     return <YouTube videoId={id} />;
//   }

//   if (service === "vimeo") {
//     return <Vimeo videoId={id} />;
//   }

//   return null;
// }

export default {
  name: "videoUrl",
  type: "object",
  title: "Video Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: `Video Url`,
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    // component: () => Preview,
  },
};
