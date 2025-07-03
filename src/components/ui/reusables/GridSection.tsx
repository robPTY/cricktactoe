import GhostCell from "./GhostCell";
import HeaderCell from "./HeaderCell";
import RealCell from "./RealCell";

export const GridSection = () => {
  const GRID_SIZE = 4;
  return (
    <div className="grid grid-cols-4 gap-[1px] w-full max-w-[90vmin] sm:max-w-[80vmin] md:max-w-[60vmin] lg:max-w-[80vmin] aspect-square ...">
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;

        if (row === 0 && col === 0) {
          return <GhostCell key={i} />;
        } else if (row === 0) {
          return <HeaderCell key={i} />;
        } else if (col === 0) {
          return <HeaderCell key={i} />;
        } else {
          return <RealCell key={i} i={i} />;
        }
      })}
    </div>
  );
};
export default GridSection;
