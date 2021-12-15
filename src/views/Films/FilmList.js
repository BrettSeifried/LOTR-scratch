export async function filmList({ films }) {
  return (
    <section className="films">
      {films.map((b) => (
        <div className="film" key={b.title}>
          <ul>
            <li>{b.title}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
