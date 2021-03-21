import React from "react";
import "./About.css";
import AboutEmployee from "./AboutEmployee";

const employees = [
  {
    id:1,
    name: "Marta",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementumlorem in, varius pellentesque",
    img:
      "https://images.unsplash.com/photo-1543096222-72de739f7917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id:2,
    name: "Zofia",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementumlorem in, varius pellentesque",
    img:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
  },

];

function About() {
  return (
    <section id="about" className="about">
      <div className="container container-flex-column">
        <h1 className="text-blue">Nasi specjaliści</h1>
        {employees.map((employee) => {
          return (
            <AboutEmployee
              key={employee.id}
              name={employee.name}
              desc={employee.desc}
              img={employee.img}
            />
          );
        })}
      </div>
    </section>
  );
}

export default About;
