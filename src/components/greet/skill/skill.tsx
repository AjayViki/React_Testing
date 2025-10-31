import React, { useEffect, useState } from "react";
import { SkillsProps } from "./skill.types";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 1000);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {loggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
