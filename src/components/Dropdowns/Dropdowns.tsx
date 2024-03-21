import { AcademicCapIcon } from "@heroicons/react/16/solid";
import React from "react";
import CardLink from "../CardLink";
import TitleCard from "../TitleCard";
import PTag from "../PTag";

type Props = {};

const Features = (props: Props) => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="HELO TEST"
      className="grid max-w-5xl grid-cols-3 grid-rows-2"
    >
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
    </TitleCard>
  );
};
const Features2 = (props: Props) => {
  return (
    <TitleCard
      classList="w-[285px]"
      className="border-[#998dd9]"
      title="MEET FERATURES"
    >
      <PTag>
        Trello makes it easy for your team to get work done. No matter the
        project, workflow, or type of team, Trello can help keep things
        organized. It’s simple – sign-up, create a board, and you’re off!
        Productivity awaits.
      </PTag>
    </TitleCard>
  );
};
const Solutions = (props: Props) => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="HELO TEST"
      className="grid max-w-5xl grid-cols-3 grid-rows-2"
    >
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
    </TitleCard>
  );
};
const Solutions2 = (props: Props) => {
  return (
    <TitleCard
      classList="w-[285px]"
      className="border-[#998dd9]"
      title="MEET SOLUTOINS"
    >
      <PTag>
        Trello makes it easy for your team to get work done. No matter the
        project, workflow, or type of team, Trello can help keep things
        organized. It’s simple – sign-up, create a board, and you’re off!
        Productivity awaits.
      </PTag>
    </TitleCard>
  );
};
const Plans = (props: Props) => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="HELO TEST"
      className="grid max-w-5xl grid-cols-3 grid-rows-2"
    >
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
    </TitleCard>
  );
};

const Plans2 = (props: Props) => {
  return (
    <TitleCard
      classList="w-[285px]"
      className="border-[#998dd9]"
      title="MEET TRELLO"
    >
      <PTag>
        Trello makes it easy for your team to get work done. No matter the
        project, workflow, or type of team, Trello can help keep things
        organized. It’s simple – sign-up, create a board, and you’re off!
        Productivity awaits.
      </PTag>
    </TitleCard>
  );
};
const Resources = (props: Props) => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="HELO TEST"
      className="grid max-w-5xl grid-cols-3 grid-rows-2"
    >
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
      <CardLink
        Icon={AcademicCapIcon}
        title="TEst"
        description="Test"
      ></CardLink>
    </TitleCard>
  );
};

const Resources2 = (props: Props) => {
  return (
    <TitleCard
      classList="w-[285px]"
      className="border-[#998dd9]"
      title="RESIOURCES"
    >
      <PTag>
        TrADFellSDo makes it easy for your team to get work done. No matter the
        project,ASFrkflow, or type of team, Trello can help keep things ASDASD.
      </PTag>
    </TitleCard>
  );
};

export {
  Features,
  Features2,
  Solutions,
  Solutions2,
  Plans,
  Plans2,
  Resources,
  Resources2,
};
