import mockGroups from "../data/mockGroups";

export const fetchGroups = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockGroups);
    }, 500);
  });
};
