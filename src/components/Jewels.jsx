import { Jewells } from "../constants";
import JewelsItem from "./JewelsItem";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
            Our Jewelaries
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {Jewells.map((project, index)=>(
                <JewelsItem key={index} project={project}/>
            ))}
        </div>
    </section>
  );
}

export default Dishes;
