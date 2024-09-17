import React from 'react';
import { useGetProductsQuery } from '../Redux/serviec'; // Make sure the service file is correctly imported

const token = localStorage.getItem("auth");

const ShowProducts = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery({ token });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || 'Something went wrong!'}</div>;
  }

  // Ensure data is defined and is an array
  if (!data.data || data.data.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className='text-center mt-40'>
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">Product Name</th>
            <th className="py-2 border">Price</th>
            <th className="py-2 border">Product Code</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((product) => (
            <tr key={product._id}>
              <td className="py-2 border">{product.name}</td>
              <td className="py-2 border">{product.sellingPrice}</td>
              <td className="py-2 border">{product.productCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
