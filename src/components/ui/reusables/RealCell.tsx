export const RealCell = ({ i }: { i: any }) => {
  return (
    <div
      key={i}
      className="bg-neutral-800 border border-neutral-700 rounded-md justify-center items-center flex text-white text-2xl font-bold hover:bg-neutral-700 hover:cursor-pointer transition-colors duration-200"
    >
      {i}
    </div>
  );
};

export default RealCell;
