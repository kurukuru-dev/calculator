import { useState } from "react";

const Calculator = () => {
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
    setDispResult((prev) => {
      if (prev === null) {
        return null;
      }
      return prev + "+";
    });
  };

  // q: 計算結果を出す関数を作成してください
  const onClickEqual = () => {
    setDispResult(() => {
      if (dispResult === null) {
        return null;
      }
      const numArr = dispResult.split("+").map(Number);
      return numArr.reduce((acc, cur) => acc + cur, 0).toString();
    });
  };

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
        <button onClick={onClickEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
