import React, { FC } from "react";
import { skills } from "../constant/skills";

type Props = {
  skillName: string;
};

export const SkillDetail: FC<Props> = ({ skillName }: Props) => {
  return (
    <>
      {skillName === skills[0] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[0]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[1] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[1]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[2] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[2]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[3] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[3]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[4] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[4]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[5] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[5]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[6] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[6]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
      {skillName === skills[7] ? (
        <div className="text-wrap mx-auto w-4/5 text-center">
          <h1>{skills[7]}のスキル</h1>
          <p>ちょっと使えるようになりました。</p>
          <p>こうこうこうです。</p>
          <p>こんなものを作りました。</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
