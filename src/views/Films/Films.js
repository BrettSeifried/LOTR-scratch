import React, { useEffect, useState } from 'react';
import FilmList from '../../components/Films/FilmList';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>FILMS</h1>
      <FilmList films={data} />
    </div>
  );
}

// export async function filmList({ films }) {
//   return (
//     <section className="films">
//       {films.map((b) => (
//         <div className="film" key={b.title}>
//           <ul>
//             <li>{b.title}</li>
//           </ul>
//         </div>
//       ))}
//     </section>
//   );
// }
