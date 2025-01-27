// Определение типов
export interface Param {
    id: number;
    name: string;
    type: "string"; // Позже можно расширить другими типами
  }
  
export interface ParamValue {
    paramId: number;
    value: string;
  }
  
export interface Color {} // Оставляем пустым, если не используется
  
export interface Model {
    paramValues: ParamValue[];
    colors: Color[];
  }
  
export interface Props {
    params: Param[];
    model: Model;
  }