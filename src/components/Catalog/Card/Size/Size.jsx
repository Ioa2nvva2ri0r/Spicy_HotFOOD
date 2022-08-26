import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Size = ({ size, weight, funSize, className }) => {
  return size !== undefined ? (
    <div className={className.size__box}>
      <strong className={className.size__desc}>Размер:</strong>
      <div className={className.size__btn_container}>
        {[
          { size: 'littel', desc: '30 см.' },
          { size: 'middle', desc: '35 см.' },
          { size: 'big', desc: '40 см.' },
        ].map((btn) => (
          <button
            className={`${className.size__btn} ${
              size === btn.size ? className.size__btn_active : ''
            }`}
            key={nanoid()}
            onClick={() => funSize(btn.size)}
          >
            {btn.desc}
          </button>
        ))}
      </div>
    </div>
  ) : weight !== undefined ? (
    <div className={className.size__box}>
      <strong className={className.size__desc}>Вес: </strong>
      {weight} гр.
    </div>
  ) : null;
};

Size.propTypes = {
  size: PropTypes.string,
  weight: PropTypes.number,
  funSize: PropTypes.func,
  className: PropTypes.object,
};

export default Size;
