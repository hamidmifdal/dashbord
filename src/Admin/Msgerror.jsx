import React, { useState, useEffect } from 'react';

const MessageAlert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      {isVisible && (
        <div className="message-alert">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default MessageAlert;
