import PropTypes from 'prop-types';

export const Button =({text ,hanldeClick})=>{
    return(<button data-testid='button' onClick={hanldeClick} type="button">{text}</button>)
}


Button.propTypes = {
    text: PropTypes.string,
    hanldeClick: ()=> null
  };