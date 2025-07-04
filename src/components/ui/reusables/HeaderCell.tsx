export const HeaderCell = ({ label }: { label: string }) => {
  return (
    <div
      className="w-full h-full flex items-center text-center 
        justify-center text-white text-xl font-semibold bg-transparent pr-2
        "
    >
      {label}
    </div>
  );
};

export default HeaderCell;
