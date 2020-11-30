import React, { useState, useEffect } from "react";

import Modal from "react-modal";
import StarRating from "../StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


Modal.setAppElement("#root");

const AddMovie = ({ handleAdd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    clearForm();
  }, [modalIsOpen]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    date: "",
    rating: 0,
  });
  function clearForm() {
    setForm({
      name: "",
      image: "",
      date: "",
      rating: 1,
    });
  }

  function openModal() {
    setIsOpen(true);
    // clearForm();
  }
  function closeModal() {
    setIsOpen(false);
    // clearForm();
  }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRate = (rate) => setForm({ ...form, rating: rate });

  return (
    <div>
      <button className="btn add-movie-btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let newMovie = {
              ...form,
              id: Math.random(),
            };
            handleAdd(newMovie);
            closeModal();
          }}
        >
          <h2>Add Movie</h2>
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            required
          />
          <label>Date Of Release</label>
          <input
            onChange={handleChange}
            type="date"
            value={form.date}
            name="date"
            required
          />
          <label>Rate </label>
          <StarRating rate={form.rating} handleRate={handleRate} />
          <label>Image Url </label>
          <input
            onChange={handleChange}
            type="url"
            name="image"
            value={form.image}
            required
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Add Movie
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              {" "}
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
