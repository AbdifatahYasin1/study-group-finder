import React, { useEffect, useState } from "react";
import { fetchGroups } from "../api/fakeApi";

function StudyGroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups().then((data) => setGroups(data));
  }, []);

  // Helper to parse hex color and return a color box
  function ColorBox({ hex }) {
    return (
      <span
        style={{
          display: "inline-block",
          width: "1em",
          height: "1em",
          backgroundColor: hex,
          border: "1px solid #ccc",
          borderRadius: "3px",
          marginRight: "0.5em",
          verticalAlign: "middle",
        }}
        title={hex}
      ></span>
    );
  }

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
            <strong>Subject Icon:</strong> {group.subjectIcon}
          </p>
          <p>
            <strong>Color:</strong>{" "}
            <ColorBox hex={group.color} />
          </p>
          <p>
            <strong>Schedule:</strong> {group.meetingSchedule.day},{" "}
            {group.meetingSchedule.time} @ {group.meetingSchedule.location}
          </p>
           <p>
            <strong>description:</strong> {group.description}
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
