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
        className="flex flex-col gap-y-1 border-b py-3 transition-all hover:bg-[#eef5ff] xl:border-b-0 xl:px-3 xl:py-6"
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
