import { AcademicCapIcon } from "@heroicons/react/16/solid";
import CardLink from "../CardLink";
import TitleCard from "../TitleCard";
import PTag from "../PTag";
import DropDownLeft from "./DropDownLeft";
import DropDownRight from "./DropDownRight";
const Features = () => {
  return (
    <DropDownLeft title="helowTest"
    className="grid grid-rows-2 grid-cols-3"
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
    </DropDownLeft>
  );
};
const Features2 = () => {
  return (
    <DropDownRight
      title="MEET FERATURES"
    >
      <PTag>
        Trello makes it easy for your team to get work done. No matter the
        project, workflow, or type of team, Trello can help keep things
        organized. It’s simple – sign-up, create a board, and you’re off!
        Productivity awaits.
      </PTag>
    </DropDownRight>
  );
};
const Solutions = () => {
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
const Solutions2 = () => {
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
const Plans = () => {
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

const Plans2 = () => {
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
const Resources = () => {
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

const Resources2 = () => {
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
const PlaceHolder = () => {
  return (
    <TitleCard
      opacity={0}
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

const PlaceHolder2 = () => {
  return (
    <TitleCard
      opacity={0}
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
  PlaceHolder,
  PlaceHolder2,
};
