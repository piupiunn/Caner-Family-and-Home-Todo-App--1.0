import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import instance from "../../axios";

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
  const [movie, setMovie] = useState([{ title: "The Matrix Resurrections" }]);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const [search, setSearch] = useState("The Matrix Resurrections");

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

  //request

  const base_URL = "https://image.tmdb.org/t/p/w500";

  const API_KEY = "d1197aff061a698a1967ae1effed211a";

  const requests = {
    fetchSearch: `/search/movie?api_key=${API_KEY}&query=${search}`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a todo category.");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign the todo to at least 1 user");
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
      movie,
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

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + requests.fetchSearch
      );
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [requests.fetchSearch]);
  console.log(movie);

  //d1197aff061a698a1967ae1effed211a

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
          <span>Search Film:</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <div>
          {movie[0] ? (
            <>
              <h4>{movie[0].title}</h4>
              <img
                src={`${base_URL}${movie[0].poster_path}`}
                alt={movie[0].title}
              />
            </>
          ) : (
            <>
              <h4>Sorry, movie not found</h4>
            </>
          )}
        </div>
        <span>Project category:</span>
        <Select
          onChange={(option) => setCategory(option)}
          options={categories}
        />

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
