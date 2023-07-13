import React from "react";
interface Props {
  title: string;
}
const TaskHeading: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="px-[1rem] h-[5rem] w-[25rem] rounded-lg bg-[#242731] py-[1rem]  mt-[2rem] text-[1.6rem]">
      <p className="text-white ">{title}</p>
    </div>
  );
};

export default TaskHeading;
