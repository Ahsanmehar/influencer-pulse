import { useState, useEffect } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import { Button } from "../../components/ui/button";
import { Sort } from "./Sort";
import { Category } from "./Category";
import { Location } from "./Location";
import { Platform } from "./Plateform";
import { influencersData } from "./influencersData";
import {
  sortOptions,
  categoryOptions,
  locationOptions,
  platformOptions,
} from "./filterData";
import { filterAndSortInfluencers } from "@/utils/filterUtils";
import { ArrowExpandIcon, GridIcon, ListIcon } from "@/assets/images/influencer/Icons";
import { AllInfluencers } from "./AllInfluencers";

const InfluencerPage = () => {
  const initialFilters = {
    category: "all",
    location: "all",
    platform: "all",
    sort: "popularity",
  };
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [viewType, setViewType] = useState("grid");
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const filteredInfluencers = filterAndSortInfluencers(
    influencersData,
    selectedCategory,
    selectedLocation,
    selectedPlatform,
    selectedSort
  );

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    function handleClickOutside(event) {
      if (!event.target.closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productSidebar]);

  return (
    <>
      <Breadcrumb
        pageName="Influencers"
        description="Explore a curated list of top Pakistani influencers, complete with ratings, followers, and niche categories to help you find the right match."
      />
      <section className="overflow-hidden relative bg-bg pt-10">
        <div className="container">
          <div className="flex gap-6">
            {/* <!-- Sidebar Start --> */}
            <div
              className={`sidebar-content fixed left-0 max-xl:z-50 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
                productSidebar
                  ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
                  : "-translate-x-full"
              }`}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-6">
                  {/* <!-- filter box --> */}
                  <div className="bg-white shadow-one rounded-lg py-4 px-5">
                    <div className="flex items-center justify-between">
                      <p className="text-black">Filters:</p>
                      <button
                        type="button"
                        className="text-black cursor-pointer"
                        onClick={() => {
                          setSelectedCategory(initialFilters.category);
                          setSelectedLocation(initialFilters.location);
                          setSelectedPlatform(initialFilters.platform);
                          setSelectedSort(initialFilters.sort);
                        }}
                      >
                        Clear All
                      </button>
                    </div>
                  </div>

                  {/* <!-- category  --> */}
                  <Category
                    categoryOptions={categoryOptions}
                    value={selectedCategory}
                    onChange={(val) => setSelectedCategory(val)}
                  />

                  {/* // <!-- location --> */}
                  <Location
                    locationOptions={locationOptions}
                    value={selectedLocation}
                    onChange={(val) => setSelectedLocation(val)}
                  />

                  {/* // <!-- platform --> */}
                  <Platform
                    platformOptions={platformOptions}
                    value={selectedPlatform}
                    onChange={(val) => setSelectedPlatform(val)}
                  />
                </div>
              </form>
            </div>

            {/* // <!-- Content Start --> */}
            <div className="w-full">
              <div className="rounded-lg bg-white shadow-one pl-3 pr-2.5 py-2.5 mb-6 sticky">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
                  {/* <!-- top bar left --> */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      variant="secondary"
                      onClick={() => setProductSidebar(!productSidebar)}
                      aria-label="button for product sidebar toggle"
                      className={`xl:hidden flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
                        stickyMenu
                          ? "lg:top-20 sm:top-34.5 top-35"
                          : "lg:top-24 sm:top-39 top-37"
                      }`}
                    >
                      <ArrowExpandIcon />
                    </button>
                    <Sort
                      sortOptions={sortOptions}
                      value={selectedSort}
                      onChange={(val) => setSelectedSort(val)}
                    />

                    <p className="text-black">
                      Showing{" "}
                      <span className="text-text">
                        {filteredInfluencers.length}
                      </span>{" "}
                      Influencers
                    </p>
                  </div>

                  {/* <!-- top bar right --> */}
                  <div className="flex items-center gap-2.5 ml-auto">
                    <Button
                      variant="secondary"
                      onClick={() => setViewType("grid")}
                      aria-label="button for product grid tab"
                      className={`${
                        viewType === "grid"
                          ? "text-white bg-gradient-to-r from-pink-400 to-violet-500"
                          : "text-black border hover:border-primary bg-white"
                      } flex items-center justify-center w-10.5 h-9 rounded-sm border-gray/50`}
                    >
                      <GridIcon />
                    </Button>

                    <Button
                      variant="secondary"
                      onClick={() => setViewType("list")}
                      aria-label="button for product list tab"
                      className={`${
                        viewType === "list"
                          ? "text-white bg-gradient-to-r from-pink-400 to-violet-500"
                          : "text-black border hover:border-primary bg-white"
                      } flex items-center justify-center w-10.5 h-9 rounded-sm border-gray/50`}
                    >
                      <ListIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <AllInfluencers
                filteredInfluencers={filteredInfluencers}
                viewType={viewType}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfluencerPage;
