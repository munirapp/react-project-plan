const initState = {
  projects: [
    { id: 1, title: "Lorem ipsum dolor amet 1", content: "blah blah" },
    { id: 2, title: "Lorem ipsum dolor amet 2", content: "blah blah" },
    { id: 3, title: "Lorem ipsum dolor ametm 3", content: "blah blah" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;

    default:
      return state;
  }
};
export default projectReducer;
