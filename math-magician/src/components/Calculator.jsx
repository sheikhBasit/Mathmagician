import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleEquals = () => {
    try {
      const evalResult = eval(expression);
      setExpression(evalResult.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;

    if (/[0-9+\-*/.]/.test(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleEquals();
    } else if (key === 'c' || key === 'C') {
      handleClear();
    } else if (key === 'Backspace') {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    } else if (key === 'Delete') {
      setExpression((prevExpression) => prevExpression.slice(1));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="calculator">
            <div className="expression-screen">
              <input
                type="text"
                className="form-control"
                value={expression}
                readOnly
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
            </div>
            <div className="calculator-buttons">
              <div className="button-row">
                {[7, 8, 9, '/'].map((num) => (
                  <button
                    key={num}
                    className="btn mt-5 w-25 btn-outline-primary"
                    onClick={() => handleButtonClick(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="button-row">
                {[4, 5, 6, '*'].map((num) => (
                  <button
                    key={num}
                    className="btn w-25 mt-4 btn-outline-primary"
                    onClick={() => handleButtonClick(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="button-row">
                {[1, 2, 3, '-'].map((num) => (
                  <button
                    key={num}
                    className="btn w-25 mt-4 btn-outline-primary"
                    onClick={() => handleButtonClick(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="button-row">
                {[0, '.', '+'].map((num) => (
                  <button
                    key={num}
                    className="btn mt-4 w-25 btn-outline-primary"
                    onClick={() => handleButtonClick(num)}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="btn mt-4 w-25 btn-outline-danger"
                  onClick={handleClear}
                >
                  C
                </button>
                <button
                  className="btn m-5 w-75 border-3 btn-outline-success"
                  onClick={handleEquals}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
