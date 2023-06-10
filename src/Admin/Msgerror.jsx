import React, { useState, useEffect } from 'react';

const Msgerror = ({ errorMessage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <div>
      {isVisible && (
        <div className="alert alert-warning">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorAlert;
