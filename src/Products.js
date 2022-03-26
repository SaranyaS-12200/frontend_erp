export function Products({ product }) {
  return (
    <div className="product_container">
      <img classname="product_pic" src={product.img} alt={product.model} />
      <h2 classname="product_model">{product.model}</h2>
      <p classname="product_description">{product.description}</p>
      <h2>{product.price}</h2>
    </div>
  );
}
