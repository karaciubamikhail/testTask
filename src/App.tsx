import { ParamEditor } from './companents/ParamEditor';
import './App.css'

import { Param } from "./companents/Types";
import { Model } from "./companents/Types";
const params: Param[] = [
  { id: 1, name: "Назначение", type: "string" },
  { id: 2, name: "Длина", type: "string" },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
  colors: [],
};

function App() {

  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App
