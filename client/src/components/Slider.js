import styled from 'styled-components';

const Slider = styled.div`
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    margin: 4.2px 0;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: rgba(0, 120, 190, 0.85);
    border-radius: 2.5px;
    border: 0px solid #010101;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0.9px 0.9px 2.1px #000000, 0px 0px 0.9px #0d0d0d;
    border: 0px solid #00beff;
    height: 15px;
    width: 15px;
    border-radius: 25px;
    background: #00beff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4.2px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: rgba(0, 146, 231, 0.85);
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: rgba(0, 120, 190, 0.85);
    border-radius: 2.5px;
    border: 0px solid #010101;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 0.9px 0.9px 2.1px #000000, 0px 0px 0.9px #0d0d0d;
    border: 0px solid #00beff;
    height: 15px;
    width: 15px;
    border-radius: 25px;
    background: #00beff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: rgba(0, 94, 149, 0.85);
    border: 0px solid #010101;
    border-radius: 5px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  input[type='range']::-ms-fill-upper {
    background: rgba(0, 120, 190, 0.85);
    border: 0px solid #010101;
    border-radius: 5px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  input[type='range']::-ms-thumb {
    box-shadow: 0.9px 0.9px 2.1px #000000, 0px 0px 0.9px #0d0d0d;
    border: 0px solid #00beff;
    height: 15px;
    width: 15px;
    border-radius: 25px;
    background: #00beff;
    cursor: pointer;
    height: 6px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: rgba(0, 120, 190, 0.85);
  }
  input[type='range']:focus::-ms-fill-upper {
    background: rgba(0, 146, 231, 0.85);
  }
`;

export default Slider;
