import { GenreResponseProps } from "../App"
import { Button } from "./Button";

interface ISideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId }: ISideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}