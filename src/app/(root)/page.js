import Banner from "@/components/home/Banner";
import CustomerReview from "@/components/home/customerSay/CustomerReview";
import PopularCourse from "@/components/home/popularCourse/PopularCourse";
import WeProvide from "@/components/home/weProvide/WeProvide";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourse />
      <WeProvide />
      <CustomerReview />
    </div>
  );
}
