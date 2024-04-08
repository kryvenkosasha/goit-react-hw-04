import toast, { Toaster } from "react-hot-toast";

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
      <h2>Add new pictures</h2>
      <input type="text" name="name" placeholder="Search name..." />
      <button type="submit">▶ Serch new pictures</button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
