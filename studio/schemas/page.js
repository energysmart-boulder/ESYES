export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      type: "string"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "pageHero" },
        { type: "homePageText" },
        { type: "circleCTAList" }
      ]
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
