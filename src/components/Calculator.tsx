import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState<number>(0);
  const [dispResult, setDispResult] = useState<string | null>(null);

  const onClickInputNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.dataset.value;

    if (value !== undefined) {
      setDispResult((prev) => {
        if (prev === null) {
          return value;
        }
        return prev + value;
      });
    }
  };

  const onClickAdd = () => {
    setResult((prev) => {
      if (dispResult?.includes("+")) {
        const [first, second] = dispResult.split("+").map(Number);
        return first + second;
      }
      return prev + Number(dispResult);
    });

    setDispResult((prev) => {
      if (prev === null) {
        return null;
      }
      if (prev.includes("+")) {
        return result + "+";
      }
      return prev + "+";
    });
  };

  const onClickEqual = () => {};

  return (
    <div>
      <p>{dispResult}</p>
      <div>
        <button>AC</button>
        <button>±</button>
        <button>%</button>
        <button>÷</button>
        <button data-value={7} onClick={(e) => onClickInputNumber(e)}>
          7
        </button>
        <button data-value={8} onClick={(e) => onClickInputNumber(e)}>
          8
        </button>
        <button data-value={9} onClick={(e) => onClickInputNumber(e)}>
          9
        </button>
        <button>×</button>
        <button data-value={4} onClick={(e) => onClickInputNumber(e)}>
          4
        </button>
        <button data-value={5} onClick={(e) => onClickInputNumber(e)}>
          5
        </button>
        <button data-value={6} onClick={(e) => onClickInputNumber(e)}>
          6
        </button>
        <button>-</button>
        <button data-value={1} onClick={(e) => onClickInputNumber(e)}>
          1
        </button>
        <button data-value={2} onClick={(e) => onClickInputNumber(e)}>
          2
        </button>
        <button data-value={3} onClick={(e) => onClickInputNumber(e)}>
          3
        </button>
        <button onClick={onClickAdd}>+</button>
        <button data-value={0} onClick={(e) => onClickInputNumber(e)}>
          0
        </button>
        <button>.</button>
        <button>C</button>
        <button>=</button>
      </div>
    </div>
  );
};

export default Calculator;
