import React, { ChangeEvent, FC } from "react";

type Props = {
  skillName: string;
  setSkillName: React.Dispatch<React.SetStateAction<string>>;
};

export const SkillTag: FC<Props> = (props) => {
  const { skillName, setSkillName } = props;
  const onClickSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setSkillName(e.target.value);
  };

  return (
    <li className=" mr-1">
      <input
        id={skillName}
        type="radio"
        name="skill"
        value={skillName}
        className="hidden peer"
        onChange={onClickSkill}
      />
      <label
        htmlFor={skillName}
        className="inline-flex items-center justify-between w-full p-2
              text-gray-500
              bg-white border
              border-gray-200 rounded-lg cursor-pointer
              dark:border-gray-700
              dark:peer-checked:text-blue-500
              peer-checked:border-blue-600
              peer-checked:text-blue-600
              hover:text-blue-500
              dark:text-gray-400"
      >
        #{skillName}
      </label>
    </li>
  );
};
