import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <div id="hero">
      <p>Hi, my name is</p>
      <h1>Foti Ceci</h1>
      <h3>I like to code all web things.</h3>
      <p>
        I'm a software developer specializing in developing web applications.
        With over 2 years of hands-on experience in full-stack development, I
        have honed my skills in both front-end and back-end technologies.
        Currently, I am focused on building accessible and scalable solutions
        for <a href="https://www.ibm.com/training">IBM</a>.
      </p>

      <Button href="#experience">Find out more</Button>
    </div>
  );
}
