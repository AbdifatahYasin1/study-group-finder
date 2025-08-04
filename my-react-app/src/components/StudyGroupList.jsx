import React, { useEffect, useState } from "react";
import { fetchGroups } from "../api/fakeApi";

function StudyGroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups().then((data) => setGroups(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Study Groups</h2>
      {groups.map((group) => (
        <div
          key={group.id}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>{group.groupName}</h3>
          <p>
            <strong>Subject:</strong> {group.subject}
          </p>
          <p>
            <strong>Schedule:</strong> {group.meetingSchedule.day},{" "}
            {group.meetingSchedule.time} @ {group.meetingSchedule.location}
          </p>
          <p>
            <strong>Members:</strong>
          </p>
          <ul>
            {group.members.map((member, index) => (
              <li key={index}>
                {member.name} ({member.email})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StudyGroupList;
