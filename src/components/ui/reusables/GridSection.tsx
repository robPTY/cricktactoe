import GhostCell from "./GhostCell";
import HeaderCell from "./HeaderCell";
import RealCell from "./RealCell";
import { CATEGORIES } from "@/lib/categories/categories";

const selectedCategory = CATEGORIES.find((cat) => cat.key === "logos");

export const GridSection = () => {
  const GRID_SIZE = 4;

  if (!selectedCategory) {
    return <div>Error: Category not found</div>;
  }

  return (
    <div
      className="
        grid grid-cols-4 gap-[1px] w-full max-w-[90vmin] sm:max-w-[80vmin] 
        md:max-w-[60vmin] lg:max-w-[75vmin] aspect-square
      "
    >
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;

        if (row === 0 && col === 0) {
          return <GhostCell key={i} />;
        } else if (row === 0) {
          return (
            <HeaderCell
              key={i}
              label={selectedCategory.columnHeaders[col - 1]}
            />
          );
        } else if (col === 0) {
          return (
            <HeaderCell key={i} label={selectedCategory.rowHeaders[row - 1]} />
          );
        } else {
          return <RealCell key={i} i={i} />;
        }
      })}
    </div>
  );
};

export default GridSection;
