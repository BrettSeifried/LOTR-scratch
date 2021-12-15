import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);
}
