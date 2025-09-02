export function filterAndSortInfluencers(
  influencers,
  selectedCategory,
  selectedLocation,
  selectedPlatform,
  selectedSort
) {
  return influencers
    .filter((influencer) => {
      if (
        selectedCategory !== "all" &&
        influencer.category.toLowerCase() !== selectedCategory
      ) {
        return false;
      }

      if (
        selectedLocation !== "all" &&
        influencer.location.toLowerCase() !== selectedLocation
      ) {
        return false;
      }

      if (selectedPlatform !== "all") {
        if (selectedPlatform === "instagram") {
          return influencer.instagram > 0;
        }
        if (selectedPlatform === "youtube") {
          return influencer.youtube > 0;
        }
        if (selectedPlatform === "tiktok") {
          return influencer.tiktok > 0;
        }
        if (selectedPlatform === "facebook") {
          return influencer.facebookFollowers > 0;
        }
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "popularity":
          return (
            b.instagramFollowers +
            b.youtubeFollowers +
            b.tiktokFollowers +
            b.facebookFollowers -
            (a.instagramFollowers +
              a.youtubeFollowers +
              a.tiktokFollowers +
              a.facebookFollowers)
          );
        case "followers_high_low":
          return (
            b.instagramFollowers +
            b.youtubeFollowers +
            b.tiktokFollowers +
            b.facebookFollowers -
            (a.instagramFollowers +
              a.youtubeFollowers +
              a.tiktokFollowers +
              a.facebookFollowers)
          );
        case "followers_low_high":
          return (
            a.instagramFollowers +
            a.youtubeFollowers +
            a.tiktokFollowers +
            a.facebookFollowers -
            (b.instagramFollowers +
              b.youtubeFollowers +
              b.tiktokFollowers +
              b.facebookFollowers)
          );
        case "rating_high_low":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
}
