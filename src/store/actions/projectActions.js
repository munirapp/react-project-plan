export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Munir",
        authorLastName: "AP",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(error => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};
