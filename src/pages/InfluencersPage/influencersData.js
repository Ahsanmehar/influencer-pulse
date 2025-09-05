import influencer_images from "@/assets/images/influencer";

export const influencersData = [
  {
    id: 1,
    name: "Irfan Junejo",
    location: "Karachi, Pakistan",
    rating: 4.8,
    profilePicture: influencer_images.irfan_junejo_1,
    instagram: 1100000,
    youtube: 1460000,
    facebook: 120000,
    description:
      "Irfan Junejo is one of Pakistan's most popular travel and lifestyle vloggers. Known for his high-quality cinematography and engaging storytelling, he has collaborated with major tourism boards and brands across Pakistan.",
    category: "Travel & Lifestyle",
    engagementRate: 9.2,
    languages: ["Urdu", "English", "Sindhi"],
    experience: "6 years",
    pricing: {
      instagram: {
        post: 180000,
        story: 60000,
        reel: 150000,
      },
      youtube: {
        video: 350000,
        short: 90000,
      },
      tiktok: {
        video: 80000,
        live: 40000,
      },
    },
    portfolio: [
      influencer_images.irfan_junejo_2,
      influencer_images.irfan_junejo_3,
      influencer_images.irfan_junejo_4,
    ],
    reviews: [
      {
        reviewer: "Tourism Pakistan",
        rating: 5,
        description:
          "Irfan's travel content has significantly boosted tourism in northern areas. His videos showcase Pakistan's beauty like never before.",
      },
      {
        reviewer: "Hassan Ali",
        rating: 4.5,
        description:
          "Professional content creator with excellent storytelling skills. Great for destination marketing campaigns.",
      },
    ],
  },
  {
    id: 2,
    name: "Mooroo",
    location: "Lahore, Pakistan",
    rating: 4.7,
    profilePicture: influencer_images.mooroo_1,
    instagram: 537000,
    youtube: 1170000,
    tiktok: 950000,
    facebook: 150000,
    description:
      "Mooro is a popular content creator known for his humorous takes on everyday life in Pakistan. His relatable comedy sketches and social commentary have earned him a massive following across platforms.",
    category: "Comedy & Entertainment",
    engagementRate: 11.5,
    languages: ["Urdu", "Punjabi", "English"],
    experience: "4 years",
    pricing: {
      instagram: {
        post: 120000,
        story: 45000,
        reel: 100000,
      },
      youtube: {
        video: 250000,
        short: 70000,
      },
      tiktok: {
        video: 75000,
        live: 35000,
      },
    },
    portfolio: [
      influencer_images.mooroo_4,
      influencer_images.mooroo_2,
      influencer_images.mooroo_3,
    ],
    reviews: [
      {
        reviewer: "Foodpanda Pakistan",
        rating: 5,
        description:
          "Mooro's comedic content resulted in our most successful campaign. Engagement rates were through the roof!",
      },
      {
        reviewer: "Zainab Ahmed",
        rating: 4.5,
        description:
          "Great for reaching youth audience. His humor resonates well with the 18-35 demographic.",
      },
    ],
  },
  {
    id: 3,
    name: "WildLens by Abrar",
    location: "Frankfurt, Germany",
    rating: 4.9,
    profilePicture: influencer_images.wildlens_by_abrar_1,
    instagram: 669000,
    youtube: 2070000,
    tiktok: 1100000,
    facebook: 280000,
    description:
      "WildLens by Abrar is Pakistan's premier wildlife and adventure content creator. His breathtaking footage of Pakistani wildlife and stunning landscapes has earned him international recognition and awards.",
    category: "Wildlife & Adventure",
    engagementRate: 13.8,
    languages: ["Urdu", "English", "Pashto"],
    experience: "8 years",
    pricing: {
      instagram: {
        post: 220000,
        story: 70000,
        reel: 180000,
      },
      youtube: {
        video: 450000,
        short: 110000,
      },
      tiktok: {
        video: 95000,
        live: 50000,
      },
    },
    portfolio: [
      influencer_images.wildlens_by_abrar_2,
      influencer_images.wildlens_by_abrar_3,
      influencer_images.wildlens_by_abrar_4,
    ],
    reviews: [
      {
        reviewer: "WWF Pakistan",
        rating: 5,
        description:
          "Abrar's work has been instrumental in wildlife conservation awareness. His footage is truly exceptional.",
      },
      {
        reviewer: "National Geographic",
        rating: 5,
        description:
          "Some of the best wildlife photography coming out of South Asia. Truly world-class content.",
      },
    ],
  },
  {
    id: 4,
    name: "Raza Samo",
    location: "Karachi, Pakistan",
    rating: 4.6,
    profilePicture: influencer_images.raza_samo_1,
    instagram: 563000,
    youtube: 817000,
    tiktok: 780000,
    facebook: 95000,
    description:
      "Raza Samo is a versatile content creator known for his food reviews, travel vlogs, and social experiments. His authentic approach and honest reviews have built a loyal following across platforms.",
    category: "Food & Travel",
    engagementRate: 8.9,
    languages: ["Urdu", "English", "Sindhi"],
    experience: "5 years",
    pricing: {
      instagram: {
        post: 110000,
        story: 40000,
        reel: 90000,
      },
      youtube: {
        video: 220000,
        short: 60000,
      },
      tiktok: {
        video: 70000,
        live: 30000,
      },
    },
    portfolio: [
      influencer_images.raza_samo_2,
      influencer_images.raza_samo_3,
      influencer_images.raza_samo_4,
    ],
    reviews: [
      {
        reviewer: "Food Street Karachi",
        rating: 4.5,
        description:
          "Raza's food reviews are honest and impactful. Our restaurant saw a 40% increase in customers after his visit.",
      },
      {
        reviewer: "Sarah Khan",
        rating: 4,
        description:
          "Good engagement rates and authentic content. Recommended for food and lifestyle brands.",
      },
    ],
  },
  {
    id: 5,
    name: "RHS",
    location: "Rawalpindi, Pakistan",
    rating: 4.7,
    profilePicture: influencer_images.rhs_1,
    instagram: 939000,
    youtube: 1540000,
    tiktok: 820000,
    facebook: 110000,
    description:
      "RHS is a popular content creator known for his reaction videos, comedy sketches, and social commentary. His engaging personality and relatable content have made him a favorite among Pakistani youth.",
    category: "Entertainment & Comedy",
    engagementRate: 10.2,
    languages: ["Urdu", "English"],
    experience: "4 years",
    pricing: {
      instagram: {
        post: 130000,
        story: 48000,
        reel: 110000,
      },
      youtube: {
        video: 270000,
        short: 75000,
      },
      tiktok: {
        video: 80000,
        live: 38000,
      },
    },
    portfolio: [
      influencer_images.rhs_2,
      influencer_images.rhs_3,
      influencer_images.rhs_4,
    ],
    reviews: [
      {
        reviewer: "UBL",
        rating: 4.5,
        description:
          "RHS's content resonated well with our target audience. Good engagement and professional approach.",
      },
      {
        reviewer: "TechGlobe",
        rating: 4,
        description:
          "Effective for reaching younger demographics. His reaction videos generate good discussion.",
      },
    ],
  },
  {
    id: 6,
    name: "Junaid Akram",
    location: "Karachi, Pakistan",
    rating: 4.3,
    profilePicture: influencer_images.junaid_akram_1,
    instagram: 799000,
    youtube: 1250000,
    tiktok: 724000,
    facebook: 1550000,
    description:
      "Junaid Akram is a Pakistani comedian, podcaster, and storyteller known for social commentary, travel ‘Walking Tales,’ and long-form podcasts. He blends humor with thoughtful takes on culture, career, and everyday life, engaging a broad South Asian audience.",
    category: "Comedy, Commentary & Podcasts",
    engagementRate: 5.1,
    languages: ["Urdu", "English"],
    experience: "10+ years",
    pricing: {
      instagram: {
        post: 150000,
        story: 60000,
        reel: 140000,
      },
      youtube: {
        video: 300000,
        short: 90000,
      },
      tiktok: {
        video: 110000,
        live: 50000,
      },
    },

    portfolio: [
      influencer_images.junaid_akram_2,
      influencer_images.junaid_akram_3,
      influencer_images.junaid_akram_4,
    ],
    reviews: [
      {
        reviewer: "Social Media Agency",
        rating: 4.5,
        description:
          "Great for thought-leadership campaigns. Strong recall and above-average watch time on long-form content.",
      },
      {
        reviewer: "Brand Manager",
        rating: 4.2,
        description:
          "Professional and timely. Performs best with storytelling briefs and podcast integrations.",
      },
    ],
  },
];
