import PTag from "./PTag";

interface Props {
  Icon: React.ElementType;
  title: string;
  description: string;
}
const CardLink = ({ Icon, title, description }: Props) => {
  return (
    <>
      <a
        href={`#${title}`}
        className="flex min-h-[100px] flex-col gap-y-3 px-3 py-6 transition-all hover:bg-[#eef5ff]"
      >
        <div className="flex items-center justify-start gap-x-3">
          <Icon className="size-8 fill-[#7a869a]"></Icon>
          <h1 className="text-lg font-semibold text-[#172b4d]">{title}</h1>
        </div>
        <PTag>{description}</PTag>
      </a>
    </>
  );
};

export default CardLink;
