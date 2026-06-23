import { useEffect, useState } from "react";
import { apiRequest } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });

  const loadTask = async () => {
    try {
      const data = await apiRequest("/tasks");

      const found = data.find((t) => t._id === id);

      if (found) setTask(found);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  const updateTask = async () => {
    await apiRequest(`/tasks/${id}`, "PUT", task);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>

      <input
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      <input
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      <select
        value={task.status}
        onChange={(e) =>
          setTask({ ...task, status: e.target.value })
        }
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button onClick={updateTask}>Update</button>
    </div>
  );
}
