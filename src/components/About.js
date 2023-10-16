import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Asritha.
            <br className="hidden lg:inline-block" />I love to learn something new.
            Still there is a lot of way to go.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm good at learning stuff,fast learner ig. Will like explore alot of things and work with newer stuff.
            <br></br>
            Excellent communication and interpersonal skills
          </p>
         
          <h3>Education</h3>
          <p><b>School:</b></p>
          <p>Sri chaitanya,Knl</p>
          <p>Scored gpa in 10th:9.5</p>

          <p><b>Inter College:</b></p>
          <p>Narayana,Hyd</p>
          <p>Scored marks: 920</p>

          <p><b>UG</b></p>
          <p>VIT-AP</p>
          <p>Present cgpa:8.5</p>
        </div>
      </div>
    </section>
  );
}