import { ChangeEvent, useState } from 'react';
import './Bar.css';

function Bar(props: { index: number, length: number, color: any } ) {
  
  const { index, length, color } = props;

  const [len, setLen] = useState(length);
  
  const colors: string[][]  = [
    ['rgba(61, 90, 241, 0.5)', 'rgba(61, 90, 241, 0.2)'],
    ['rgba(255, 48, 79, 1)', 'rgba(255, 48, 79, 0.2)'],
    ['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'],
  ]

  const inputStyle: {
    width: string;
    border: string;
    background: string;
  } = {
    width: '22px',
    border: 'none',
    background: 'none',
  }

  const bottom: {
      transform: string;
      backgroundColor: string;
      boxShadow: string;
      transition: string;
  } = {
    transform: `translateY(${200 - length}px) rotateX(-90deg)`,
    backgroundColor: `${colors[color][0]}`,
    boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
    transition: '0.3s',
  }

  const front_back_left_right: {
    height: string;
    transform: string;
    backgroundColor: string;
    boxShadow: string;
    transition: string;
  } = {
    height: `${length}px`,
    transform: `translateY(${200 - length}px)`,
    backgroundColor: `${colors[color][0]}`,
    boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
    transition: '0.3s',
  };

  const quantity = {
    top: 225,
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const nValue: number = parseInt(e.target.value);
    nValue === 0 ? setLen(0) : (
      nValue > 200 ? setLen(200) : setLen(nValue) 
      );
  }

  return (
      <div className='bar' key={ index }>
        <div className='side top'></div>
        <div className='side bottom' style={ bottom }>
        </div>
        <div className='side right'>
          <div className='color-bar right-color-bar' style={ front_back_left_right }>
          </div>
        </div>
        <div className='side left'>
          <div className="color-bar left-color" style={ front_back_left_right }>
          </div>
        </div>
        <div className='side front'>
          <div className="color-bar front-color-bar" style={ front_back_left_right }>
            <input
              type='number'
              className='input'
              maxLength={ length }
              style={ inputStyle }
              onChange={handleChange}
              value={ len }
            />
          </div>
        </div>
        <div className="side back">
          <div className="color-bar back-color-bar" style={ front_back_left_right }></div>
        </div>
        <div className="quantity-nav">
          <div className="quantity-button qunatity-up" style={ quantity }>
            {''} + {''}
          </div>
          <div className="quantity-button qunatity-down" style={ quantity }>
            {''} - {''}
          </div>
        </div>
      </div>
    )
}

export default Bar;