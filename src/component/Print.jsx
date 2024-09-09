import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export const AnotherExample = () => {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  return (
    <>
      <div ref={contentToPrint}>Hello Again</div>
      <button onClick={() => {
        handlePrint(null, () => contentToPrint.current);
      }}>
        PRINT
      </button>
    </>
  )
}