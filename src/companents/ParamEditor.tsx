import { Param } from "./Types";
import { Props } from "./Types";
import { ParamValue } from "./Types";
import { Color } from "./Types";
import { Model } from "./Types";

import React, { useState, useRef } from "react";

export const ParamEditor: React.FC<Props> = ({ params, model }) => {
  // Инициализируем state значениями параметров из model
  const [paramValues, setParamValues] = useState<Record<number, string>>(() => {
    const initialValues: Record<number, string> = {};
    model.paramValues.forEach((p) => {
      initialValues[p.paramId] = p.value;
    });
    return initialValues;
  });

  // Обработчик изменения input
  const handleChange = (paramId: number, value: string) => {
    setParamValues((prev) => ({ ...prev, [paramId]: value }));
  };

  // Метод для получения полной модели
  const getModel = (): Model => ({
    paramValues: Object.entries(paramValues).map(([paramId, value]) => ({
      paramId: Number(paramId),
      value,
    })),
    colors: model.colors, // Передаем как есть
  });

  return (
    <div>
      <h3>Редактирование параметров</h3>
      {params.map((param) => (
        <div key={param.id} style={{ marginBottom: "10px" }}>
          <label>
            {param.name}:{" "}
            <input
              type="text"
              value={paramValues[param.id] || ""}
              onChange={(e) => handleChange(param.id, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => console.log(getModel())}>Получить модель</button>
    </div>
  );
};