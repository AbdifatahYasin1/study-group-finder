const mockGroups = [
  {
    id: 1,
    groupName: "Algebra Masters",
    subject: "Mathematics",
    subjectIcon: "➗",
    color: "#ff6347",
    meetingSchedule: {
      day: "Monday",
      time: "5:00 PM",
      location: "Room 101",
    },
    description: "Group focused on mastering algebra concepts.",
    members: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
    ],
  },
  {
    id: 2,
    groupName: "Physics Enthusiasts",
    subject: "Physics",
    subjectIcon: "🔬",
    color: "#4682b4",
    meetingSchedule: {
      day: "Wednesday",
      time: "3:00 PM",
      location: "Room 202",
    },
    description: "Discuss and solve physics problems together.",
    members: [
      { name: "Carol", email: "carol@example.com" },
      { name: "Dave", email: "dave@example.com" },
    ],
  },
];

export default mockGroups;
