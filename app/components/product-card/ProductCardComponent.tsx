'use client';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

interface ProductCardProps {
  title: string;
  img: string;
  price: string;
}

export const ProductCardComponent = ({
  title,
  img,
  price,
}: ProductCardProps) => {
  return (
    <Card
      shadow='sm'
      isPressable
      onPress={() => console.log('item pressed')}
      className='mt-5'
    >
      <CardBody className='overflow-visible p-0'>
        <Image
          isBlurred
          isZoomed
          shadow='sm'
          radius='lg'
          width='100%'
          alt={title}
          className='h-[340px] w-full object-cover'
          src={img}
        />
      </CardBody>
      <CardFooter className='justify-between text-small'>
        <b>{title}</b>
        <p className='text-default-500'>{price}</p>
      </CardFooter>
    </Card>
  );
};
