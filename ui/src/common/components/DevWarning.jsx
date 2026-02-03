import React from "react";

const DevWarning = () => {
  return (
    <div className="alert alert-warning bg-warning/50 shadow-lg hover:scale-x-102 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
        />
      </svg>

      <div className="text-sm">
        <h3 className="font-bold">Aplicación en modo demostración</h3>
        <p>
          Esta aplicación es solo una demo.  
          <strong> No introduzcas datos personales ni sensibles.</strong>
        </p>
      </div>
    </div>
  );
};

export default DevWarning;