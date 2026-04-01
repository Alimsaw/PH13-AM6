import { useEffect, useState } from "react";
import ModelCard from "./ModelCard";

const Models = ({ getModels, carts, setCarts }) => {

  const [models, setModels] = useState([]);

  useEffect(() => {
    getModels().then(data => setModels(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-[48px] font-extrabold text-[#101727] text-center">Premium Digital Tools</h2>
        <p className="text-[16px] text-[#627382] text-center mb-6">
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1400px] mx-auto">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;