import "./search-box.styles.css";

const SearchBox = ({className,placeholder,onChangeHandler}) => {
  return (
  <input
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  ></input>
  )
};
export default SearchBox;
