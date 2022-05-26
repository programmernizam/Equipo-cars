import me from "../../assets/me.png";
import Website from "./Website";
const Portfolio = () => {
  const websites = [
    {
      id: 1,
      name: "EQUIPO CARS",
      img: "https://i.ibb.co/HrDZ8sb/website-1.png",
      text: "This website base on cars parts manufacture company. They sell there parts or product there and it's only for dealers not for regular customers. Dealers will buy any parts minimum in 100 of quantity and maximum of quantity 150 in one time. And they get a beautiful dashboard also. Where they setup profile , add review , my orders etc. And admin also get more feature like add product, all order, manage product or make admin etc.",
      technology:
        "React Js,React Router,React Stripe Js, ,NodeJs ,Express Js MongoDb, Tailwind,Heroku,Firebase, Daisyui, etc",
      link: "/",
    },
    {
      id: 2,
      name: "TECH WORLD",
      img: "https://i.ibb.co/YWhN26d/website-3.png",
      text: "This website mainly create for gadget lover users. They can add there items and manage it here also they got some exciting feature here. Google Login System and Email Login System New User can create there account and add items in there This website allow to add users item in there Manage User Items and also they can delete items if they don't like any item Simple navigate system and simple footer included 404 page include etc",
      technology:
        "React Js,React Router, NodeJs ,Express Js MongoDb, React Bootstrap,Heroku,Firebase, etc",
      link: "https://tech-world-6e55a.firebaseapp.com/",
    },
    {
      id: 3,
      name: "MARTIN DENTIST CARE",
      img: "https://i.ibb.co/ZKfRxJt/website-2.png",
      text: "It's a simple react base project. This website don't have many features. Just simple login system were can anyone login and book there services",
      technology:
        "React Js,React Router, React Bootstrap, Firebase, etc",
      link: "https://martin-3012c.web.app/home",
    },
  ];
  return (
    <section className="bg-accent p-10">
      <div className="card lg:card-compact shadow-xl rounded-none bg-secondary">
        <figure>
          <img className="" src={me} alt="Album" />
        </figure>
        <div className="card-body text-white text-center">
          <h2 className="text-2xl font-bold">Name: Md. Nizam Uddin</h2>
          <h3 className="text-xl">Email Address: mdnizam12109@gmail.com</h3>
          <h3 className="text-xl">
            Education: Diploma in computer engineering, 7th semester
          </h3>
          <h3 className="text-xl">
            Institute: BCI ENGINEERING INSTITUTE, Dhaka 1207
          </h3>
          <div>
            {websites.map((website) => (
              <Website key={website.id} website={website}></Website>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
