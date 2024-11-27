"use client";
import React from "react";

import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
  const [todos, setTodos] = React.useState([]);

  // get data from backend
  React.useEffect(() => {
    async function getData() {
      const url = "https://iccepbackend-production.up.railway.app/";
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const storedTodos = await response.json();
        setTodos(storedTodos.task)
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  },[]);

  const todos_completed = todos.filter(
    (todo) => todo.completed == true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
      <h1>Made By: Muhammad Faizan Soomro</h1>
      <h2>Roll No: CS-21090</h2>
    </div>
  );
}

export default Home;
