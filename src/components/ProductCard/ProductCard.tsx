import type { FC } from 'react';
import React from 'react';
import CommonImg from '../CommonImg/CommonImg';
import type { addressType } from '../../types/productType';
import formatDate from '../../utils/formatDate';

interface ProductCardProps {
  photos: Array<string>;
  name: string;
  price: number;
  address: addressType;
  publishDate: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { photos, name, price, address, publishDate } = props;

  return (
    <div className='results__item product'>
      <button
        className='product__favourite fav-add'
        type='button'
        aria-label='Добавить в избранное'
      />
      <div className='product__image'>
        <div className='product__image-more-photo hidden'>+2 фото</div>
        {/* TODO Запилить слайдер */}
        <CommonImg src={photos[0]} alt='Загородный дом с видом на озеро' />
        <div className='product__image-navigation'>
          <span className='product__navigation-item product__navigation-item--active' />
          <span className='product__navigation-item' />
          <span className='product__navigation-item' />
          <span className='product__navigation-item' />
          <span className='product__navigation-item' />
        </div>
      </div>
      <div className='product__content'>
        <h3 className='product__title'>
          <a href='#'>{name}</a>
        </h3>
        <div className='product__price'>{`${price} ₽`}</div>
        <div className='product__address'>{`${address.city}, ${address.street}`}</div>
        <div className='product__date'>{formatDate(publishDate)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
