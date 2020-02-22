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
      break;

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      break;

    default:
      return state;
      break;
  }
};
export default projectReducer;
