import React from "react";
import me from "../../assets/me.png";

const Portfolio = () => {
  return (
    <section className="bg-accent p-10">
      <div class="card lg:card-side shadow-xl rounded-none bg-secondary">
        <figure>
          <img className="" src={me} alt="Album" />
        </figure>
        <div class="card-body text-white">
          <h2 class="text-2xl font-bold">Name: Md. Nizam Uddin</h2>
          <h3 className="text-xl">Email Address: mdnizam12109@gmail.com</h3>
          <h3 className="text-xl">
            Education: Diploma in computer engineering, 7th semester
          </h3>
          <h3 className="text-xl">
            Institute: BCI ENGINEERING INSTITUTE, Dhaka 1207
          </h3>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
