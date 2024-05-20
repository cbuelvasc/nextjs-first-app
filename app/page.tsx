import { ProductCardComponent } from "./components/product-card/ProductCardComponent";

export default function HomePage() {
  const products = [
    {
      title: 'Orange',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-6.jpeg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-7.jpeg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: 'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-8.jpeg',
      price: '$12.20',
    },
  ];

  return (
    <div className='grid grid-cols-2 items-center gap-2 p-5 sm:grid-cols-4'>
      {products.map((item, index) => (
        <ProductCardComponent
          key={index}
          title={item.title}
          img={item.img}
          price={item.price}
        />
      ))}
    </div>
  );
}
