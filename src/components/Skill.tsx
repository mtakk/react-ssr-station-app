import React, { FC, useState } from "react";
import { SkillDetail } from "./SkillDetail";
import { SkillTag } from "./SkillTag";
import { skills } from "../constant/skills";


export const Skill: FC = () => {
  const [sikillName, setSkillName] = useState<string>(skills[0]);
  return (
    <>
      <section className="text-wrap mx-auto w-4/5 text-center mt-10">
        <h1 className="text-xl">スキル</h1>
        <ul className="flex flex-wrap items-center justify-center my-3">
          {skills.map((skill, key)=> (
            <SkillTag key={key} skillName={skill} setSkillName={setSkillName}/>
          ))}
        </ul>
        <SkillDetail skillName={sikillName} />
      </section>
    </>
  );
};
