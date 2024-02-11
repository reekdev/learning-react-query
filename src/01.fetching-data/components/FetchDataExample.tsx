import useProducts from "../hooks/useProducts";

export default function FetchDataExample() {
  const { data: products, error, isLoading, isSuccess } = useProducts();

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <>
      {isSuccess && (
        <ul className="list-group">
          {products.products.map((product) => {
            return <li className="list-group-item">{product.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}
