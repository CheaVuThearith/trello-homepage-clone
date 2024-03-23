import { AcademicCapIcon } from "@heroicons/react/16/solid";
import CardLink from "../CardLink";
import TitleCard from "../TitleCard";
import PTag from "../PTag";
import DropDownLeft from "./DropDownLeft";
import DropDownRight from "./DropDownRight";
const Features = () => {
  return (
    <DropDownLeft
      title="odit necessitatibus"
      className="border-b xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:border-b-0"
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
    <DropDownRight title="qui repellendus distinctio">
      <PTag>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat
        nulla facere totam id modi eaque, obcaecati laborum voluptates! At porro
        rerum eaque voluptatem veritatis provident, nostrum qui repellendus
        distinctio, odit necessitatibus iusto voluptas quisquam aliquam odio
        dolorum.
      </PTag>
    </DropDownRight>
  );
};
const Solutions = () => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="amet consectetur adipisicing elit"
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
      title="necessitatibus eos voluptatibus"
    >
      <PTag>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsum
        veritatis ut, labore odit sunt ea a, consectetur quia laboriosam
        quibusdam excepturi aspernatur et sed, illum fuga. Labore necessitatibus
        eos voluptatibus ipsa provident voluptatum aperiam debitis ab. Fugit
        laudantium, odit quae ratione accusantium facere labore asperiores hic.
        Delectus, aliquid!
      </PTag>
    </TitleCard>
  );
};
const Plans = () => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="Lorem ipsum dolor sit amet consectetur"
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
      title="saepe magni"
    >
      <PTag>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        dicta molestiae? Libero inventore laboriosam esse vero, eligendi
        corporis laborum cumque, quam praesentium molestias enim fuga in! Ea sit
        quisquam magnam, inventore illum quam labore eum non, ratione quis
        molestias atque reprehenderit ducimus debitis similique deserunt, sint
        saepe magni fugit esse?
      </PTag>
    </TitleCard>
  );
};
const Resources = () => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title="Lorem ipsum dolor sit amet consectetur"
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
      title="voluptatem laudantium placeat"
    >
      <PTag>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat earum,
        explicabo esse rem quaerat quae magnam totam non quo reprehenderit magni
        vero libero enim. Esse tenetur culpa doloremque asperiores dolorem sequi
        accusantium ratione maiores, repudiandae distinctio vero optio fugiat
        deleniti ex iste atque at necessitatibus! Officia autem voluptatem
        laudantium placeat!
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
