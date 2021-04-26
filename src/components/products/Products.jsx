import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image: "https://image.peltzshoes.com/images/products/1_661952_ZM_1.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Laptop",
    price: "$5000",
    image:
      "https://cnet2.cbsistatic.com/img/3Rua6ymxji3QJf0QUGkPQtxAI5c=/2017/06/21/cd7d93a0-24b8-431c-8f5e-cfed4ff277f0/apple-macbook-12-inch-2017-03.jpg",
  },
  {
    id: 3,
    name: "Asus",
    description: "Display",
    price: "$500",
    image: "https://www.techpowerup.com/img/17-03-28/8c9a4b62ca1c.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
