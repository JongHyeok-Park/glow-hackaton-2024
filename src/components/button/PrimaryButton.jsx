import React from 'react';
import './PrimaryButton.css';

function PrimaryButton(props) {
  const { text } = props;
  return (
    <button className="primary-btn" type="button">
      {text}
    </button>
  );
}

export default PrimaryButton;
