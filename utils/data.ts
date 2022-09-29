export interface Data {
  products: object[];
}

export interface Product {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

const data: Data = {
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Shirt',
    },
    {
      name: 'Golf Shirt',
      slug: 'golf-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Ramond',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Shirt',
    },
  ],
};

export default data;
