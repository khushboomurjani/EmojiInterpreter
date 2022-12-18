import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      description:
        "This book contains roughly three parts. The first 12 chapters discuss the JavaScript language. "
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      description:
        "This is a series of books diving deep into the core mechanisms of the JavaScript language."
    },
    {
      name: " A Smarter Way to Learn JavaScript",
      rating: "5/5",
      description:
        " This book teaches you every little thing in layman syntax. It covers short chapters that are easy to digest."
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      description:
        "This is the first book in a trilogy on Shiva, the simple man whose karma re-cast him as our Mahadev, the God of Gods."
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    {
      name: "The Maid by Nita Prose",
      rating: "4/5",
      description:
        "A grand hotel. A motley cast of personality-rich characters. And, of course, a murder. The story’s protagonist is a hotel maid named Molly Gray who quickly becomes a suspect in the case. Molly sees things a little differently."
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      description:
        "Never Split the difference is an outstanding book on how to negotiate, written by Mr. Chriss Voss an ex-FBI agent. having read a few books on negotiation"
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description:
        " How to Nurture the Crazy Ideas That Win Wars, Cure Diseases, and Transform Industries Hardcover"
    },
    {
      name: "Profit First",
      rating: "1/5",
      description:
        " A Simple System to Transform Any Business from a Cash-Eating Monster to a Money-Making Machine (2014) by Mike Michalowicz"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <br></br>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
