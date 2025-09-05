import Empty from "./Empty";
import SingleGridItem from "./SingleGridItem";
import SingleListItem from "./SingleListItem";

export const AllInfluencers = ({ viewType,filteredInfluencers }) => {
  return (
    <div
      className={`${
        viewType === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9"
          : "flex flex-col gap-7.5"
      }`}
    >
      {filteredInfluencers.length ? (
        filteredInfluencers.map((item, key) =>
          viewType === "grid" ? (
            <SingleGridItem influencer={item} key={key} />
          ) : (
            <SingleListItem influencer={item} key={key} />
          )
        )
      ) : (
        <div className="col-span-12 flex items-center justify-center w-full">
          <Empty /> 
        </div>
      )}
    </div>
  );
};

