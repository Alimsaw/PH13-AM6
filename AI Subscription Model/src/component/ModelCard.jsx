import { useState } from "react";
import { toast } from "react-toastify";
import checkIcon from "../assets/Check.svg";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isCart, setIsCart] = useState(false);

  const handleCart = () => {
    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Already added!");
      return;
    }

    setCarts([...carts, model]);
    setIsCart(true);
    toast.success("Added to cart!");
  };

  return (
    <div className="shadow-lg rounded-lg border-2 border-[#f2f2f2] p-4 space-y-4">
      <div className="flex justify-end">
        <div className="bg-red-400 max-w-fit p-2 rounded-3xl">
          {model.status}
        </div>
      </div>

      <div>
        <img className="h-10 w-10" src={model.image} />
      </div>

      <div>
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">${model.price}/Mo</h2>
      </div>

      <div>
        <ul className="space-y-2">
          {model.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <img src={checkIcon} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={handleCart}
          className={`btn w-full rounded-4xl ${
            isCart ? "bg-[#3a9d4d] text-white" : "btn-primary"
          }`}
        >
          {isCart ? "Added To Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;