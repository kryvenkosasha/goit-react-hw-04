import toast, { Toaster } from "react-hot-toast";
import './SearchBar.css'

const notify = () => toast("Please enter search term!");

const SearchBar = ({ onSearchBar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    if (name.length === 0) {
      notify();
    } else {
      onSearchBar(name);
      form.reset();
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h2 className="search-title">Find picture on request</h2>
      <input className="search-input" type="text" name="name" placeholder="Search name..." />
      <button className="search-button" type="submit">Search</button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
