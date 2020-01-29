export default {
  title: "Section With Image on Left",
  name: "imageLeftSection",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "featureText"
        }
      ]
    }
  ]
};
