function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className="todohero_section">
      {todos_completed == total_todos ? (
        <div>
          <p className="text_large">All Task Done</p>
          <p className="text_small">Well Done!</p>
        </div>
      ) : (
        <div>
          <p className="text_large">Task Done</p>
          <p className="text_small">Keep it up</p>
        </div>
      )}
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TODOHero;
