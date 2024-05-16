import React, { FC } from "react";
import { Profile } from "./Profile";
import { Skill } from "./Skill";
import { ProfileType } from "../type/profile";

export const Home: FC = () => {
  const profiles: Array<ProfileType> = [
    { title: "三井琢矢", detail: "自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。" },
    { title: "趣味", detail: "こんなことが好きです。こんなことが好きです。こんなことが好きです。こんなことが好きです。こんなことが好きです。こんなことが好きです。こんなことが好きです。こんなことが好きです。こんなことが好きです。" },
  ];
  return (
    <article className="container mx-auto items-center">
      {profiles.map((profile, key) => (
        <Profile key={key} title={profile.title} detail={profile.detail} />
      ))}
      <Skill />
    </article>
  );
};
