// COMPonents
// WE CAN PASS PROPS/PLACEHOLDER
export const PizzaComponent = (
    {
    // VARIABLE
    title,
    description,
    img,
    price
  }) => {
  // JSX BASICALLY HTML; REACTS VERSION
    return (
      <div className= "card-container">
        <h1>{title}</h1>
        <p>{description}</p>
        
        {/* add image, style in app css, add description */}
        <img src={img}></img>
        <h2 className="price">${price}</h2>
      </div>
    )
  }