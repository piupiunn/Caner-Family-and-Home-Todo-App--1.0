import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

// styles
import "./Create.css";

const categories = [
  { value: "cook", label: "Cook" },
  { value: "cleaning", label: "Cleaning" },
  { value: "kids", label: "Kids" },
  { value: "shopping", label: "Shopping" },
  { value: "bill", label: "Bill" },
  { value: "rent", label: "Rent" },
  { value: "bank", label: "Bank" },
  { value: "mortgage", label: "Mortgage" },
];

export default function Create() {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("todos");
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  // form field values
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category.");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign the project to at least 1 user");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const todo = {
      title,
      details,
      category: category.value,
      date: timestamp.fromDate(new Date(date)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    await addDocument(todo);
    if (!response.eror) {
      navigate("/");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Project Details:</span>
          <textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>

        <label>
          <span>Set due date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>

        <label>
          <span>Project category:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>

        <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>

        <button className="btn">Add Project</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
