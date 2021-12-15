export async function fetchBooks({ books }) {
  return (
    <section className="books">
      {books.map((b) => (
        <div className="book" key={b.title}>
          <ul>
            <li>{b.title}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
