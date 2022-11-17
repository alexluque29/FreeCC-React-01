import "../styles/Testimonio.css";

export const Testimonio = ({ name, img, country, role, text, enter }) => {
  return (
    <div className="container">
      <img
        className="test-image"
        src={require(`../images/image-${img}.jpg`)}
        alt="image01"
      />
      <div className="test-upper">
        <div className="test-name">
          <strong>{name}</strong> en {country}
        </div>
        <div className="test-role">
          {role} en <strong>{enter}</strong>
        </div>
        <div className="test-text"> "{text}"</div>
      </div>
    </div>
  );
};
