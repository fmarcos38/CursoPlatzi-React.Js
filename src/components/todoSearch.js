import './todoSearch.css';

function TodoSearch({ search, setSearch }) {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="TodoSearch"
        />
    );
};

export { TodoSearch };