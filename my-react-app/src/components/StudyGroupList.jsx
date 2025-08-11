import React, { useState, useEffect } from "react";
import mockGroups from "../data/mockGroups";
import GroupCard from "./GroupCard";
import SearchBar from "./SearchBar";
import EditGroupModal from "./EditGroupModal";


const loggedInUser = { name: "John Doe", email: "john@example.com" };

function StudyGroupList() {
  const [groups, setGroups] = useState([]);
  const [query, setQuery] = useState("");
  const [editingGroup, setEditingGroup] = useState(null);

  useEffect(() => {
    // Load groups from localStorage or default mockGroups
    const stored = JSON.parse(localStorage.getItem("studyGroups")) || [];
    // Merge stored groups with mockGroups avoiding duplicates by id
    const merged = [...mockGroups, ...stored.filter(s => !mockGroups.find(m => m.id === s.id))];
    setGroups(merged);
  }, []);

  const filteredGroups = groups.filter((group) => {
    const q = query.toLowerCase();
    return (
      group.groupName.toLowerCase().includes(q) ||
      group.subject.toLowerCase().includes(q)
    );
  });

  const joinGroup = (id) => {
    const updated = groups.map((group) => {
      if (group.id === id) {
        if (!group.members.find((m) => m.email === loggedInUser.email)) {
          group.members.push(loggedInUser);
        }
      }
      return group;
    });
    setGroups(updated);
  };

  const leaveGroup = (id) => {
    const updated = groups.map((group) => {
      if (group.id === id) {
        group.members = group.members.filter((m) => m.email !== loggedInUser.email);
      }
      return group;
    });
    setGroups(updated);
  };

  const handleDeleteGroup = (id) => {
    if (window.confirm("Delete this group?")) {
      const updated = groups.filter((g) => g.id !== id);
      setGroups(updated);
      localStorage.setItem("studyGroups", JSON.stringify(updated));
    }
  };

  const handleSaveEdit = (updatedGroup) => {
    const updated = groups.map((g) => (g.id === updatedGroup.id ? updatedGroup : g));
    setGroups(updated);
    localStorage.setItem("studyGroups", JSON.stringify(updated));
    setEditingGroup(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Study Groups</h2>
      <SearchBar query={query} setQuery={setQuery} />
      {filteredGroups.map((group) => {
        const isMember = group.members.some((m) => m.email === loggedInUser.email);
        return (
          <GroupCard
            key={group.id}
            group={group}
            isMember={isMember}
            onJoin={() => joinGroup(group.id)}
            onLeave={() => leaveGroup(group.id)}
            onDelete={() => handleDeleteGroup(group.id)}
            onEdit={() => setEditingGroup(group)}
          />
        );
      })}
      {editingGroup && (
        <EditGroupModal
          group={editingGroup}
          onSave={handleSaveEdit}
          onClose={() => setEditingGroup(null)}
        />
      )}
    </div>
  );
}

export default StudyGroupList;
