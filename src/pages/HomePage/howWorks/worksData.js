import { User, Search, Send, MessageCircle, CheckCircle } from "lucide-react";

const works = [
  {
    id: 1,
    step: 1,
    title: "Create Your Account",
    description:
      "Sign up as a business or influencer and complete your profile with all the necessary details.",
    icon: User,
  },
  {
    id: 2,
    step: 2,
    title: "Find the Perfect Match",
    description:
      "Businesses can search for influencers based on niche, location, followers, and more. Influencers can browse campaign opportunities.",
    icon: Search,
  },
  {
    id: 3,
    step: 3,
    title: "Send Booking Request",
    description:
      "Businesses can send booking requests to influencers with campaign details, requirements, and proposed compensation.",
    icon: Send,
  },
  {
    id: 4,
    step: 4,
    title: "Collaborate & Create",
    description:
      "Once the booking is accepted, communicate through our platform to plan and execute the campaign.",
    icon: MessageCircle,
  },
  {
    id: 5,
    step: 5,
    title: "Complete & Review",
    description:
      "Mark the campaign as complete, process payments, and leave reviews to build your reputation on the platform.",
    icon: CheckCircle,
  },
];

export default works;
