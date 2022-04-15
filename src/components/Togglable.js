import React from "react";
import { useState } from "react";

const Togglable = ({ children, buttonLabel }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {!visible ? (
        <div>
          <button onClick={() => setVisible(true)}>{buttonLabel}</button>
        </div>
      ) : (
        <div>
          {children}
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
};

export default Togglable;
