import { use } from "react";

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models);


    return (
        <div>
            <div>
            <h2>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
            </div>

            <div>
                {models.map(model=> 
                    <div className="">
                        <div>
                            <img className="h-20 w-20" src={model.image} />
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
                                <span className="text-green-500">✔</span>
                                {feature}
                                </li>
                            ))}
                            </ul>
                        </div>

                        <button>Buy Now</button>
                    </div>)}
            </div>
        </div>
    );
};

export default Models;