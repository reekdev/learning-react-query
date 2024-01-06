import useProducts from "../hooks/useProducts";

export default function FetchData() {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <>
      <ul className="list-group">
        {products?.products.map((product) => {
          return <li className="list-group-item">{product.title}</li>;
        })}
      </ul>
    </>
  );
}
