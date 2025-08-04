const mockGroups = [
  {
    id: 1,
    groupName: "Math Wizards",
    subject: "Mathematics",
    subjectIcon: "🧮",
    color: "#FFD700", // Gold for math
    description: "Focused on algebra, geometry, and calculus exam prep.",
    members: [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Smith", email: "bob@example.com" },
      { name: "Carlos Rivera", email: "carlos@example.com" },
    ],
    meetingSchedule: {
      day: "Wednesday",
      time: "4:00 PM - 5:00 PM",
      location: "Room 204",
    },
  },
  {
    id: 2,
    groupName: "History Buffs",
    subject: "World History",
    subjectIcon: "📚",
    color: "#87CEEB", // Sky blue for history
    description:
      "Discuss historical events and prepare for AP World History exams.",
    members: [
      { name: "Dana White", email: "dana@example.com" },
      { name: "Eli Brown", email: "eli@example.com" },
    ],
    meetingSchedule: {
      day: "Monday",
      time: "2:00 PM - 3:30 PM",
      location: "Room 101",
    },
  },
  {
    id: 3,
    groupName: "Science Explorers",
    subject: "Physics",
    subjectIcon: "🔬",
    color: "#90EE90", // Light green for science
    description:
      "Hands-on experiments and theory reviews for physics enthusiasts.",
    members: [
      { name: "Fiona Green", email: "fiona@example.com" },
      { name: "George Black", email: "george@example.com" },
    ],
    meetingSchedule: {
      day: "Friday",
      time: "10:00 AM - 11:00 AM",
      location: "Lab 3",
    },
  },
];
console.log(mockGroups);
export default mockGroups;
