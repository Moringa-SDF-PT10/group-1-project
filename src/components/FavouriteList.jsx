function Favourite({ isFavourite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        background: "none",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
        color: isFavourite ? "red" : "gray",
      }}
      aria-label="Toggle Favourite"
    >
      {isFavourite ? "❤️" : "🤍"}
    </button>
  );
}

export default Favourite;


