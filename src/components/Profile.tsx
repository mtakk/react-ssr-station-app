import React, { FC } from "react";
import { ProfileType } from "../type/profile";

export const Profile: FC<ProfileType> = (props) => {
  const { title, detail } = props;
  return (
    <>
      <section className="text-wrap mx-auto w-4/5 text-center mt-10">
        <h1 className=" text-xl">{title}</h1>
        <p className=" mt-3">{detail}</p>
      </section>
    </>
  );
};
