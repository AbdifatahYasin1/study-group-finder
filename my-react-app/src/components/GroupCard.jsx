import React from "react";

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
    />
  );
}

function GroupCard({ group, isMember, onJoin, onLeave, onDelete, onEdit }) {
  return (
    <div style={{ marginBottom: "1.5rem", padding: "1.5rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5em" }}>
        <span style={{ fontSize: "2rem", marginRight: "0.5em" }}>{group.subjectIcon}</span>
        <h3>{group.groupName}</h3>
      </div>
      <p><strong>Subject:</strong> {group.subject}</p>
      <p><strong>Color:</strong> <ColorBox hex={group.color} /> {group.color}</p>
      <p><strong>Schedule:</strong> {group.meetingSchedule.day}, {group.meetingSchedule.time} @ {group.meetingSchedule.location}</p>
      <p><strong>Description:</strong> {group.description}</p>

      <div>
        <strong>Members:</strong>
        <ul>
          {group.members.map((member, i) => (
            <li key={i}>{member.name} ({member.email})</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        {isMember ? (
          <button onClick={onLeave} style={{ backgroundColor: "#e74c3c", color: "#fff", padding: "0.5em", borderRadius: "5px" }}>Leave</button>
        ) : (
          <button onClick={onJoin} style={{ backgroundColor: "#2ecc71", color: "#fff", padding: "0.5em", borderRadius: "5px" }}>Join</button>
        )}
        <button onClick={onEdit} style={{ backgroundColor: "#3498db", color: "#fff", padding: "0.5em", borderRadius: "5px" }}>Edit</button>
        <button onClick={onDelete} style={{ backgroundColor: "#95a5a6", color: "#fff", padding: "0.5em", borderRadius: "5px" }}>Delete</button>
      </div>
    </div>
  );
}

export default GroupCard;
