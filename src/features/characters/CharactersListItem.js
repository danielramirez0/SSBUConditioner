import { useSelector } from "react-redux";
import { selectList } from "./CharactersSlice";

const CharactersListItem = () => {
  const characterListItem = useSelector(selectList);
  return characterListItem.map((character) => {
    console.log(character.Name);
    <option value={character.Name}>{character.Name}</option>;
  });
};

export default CharactersListItem;
