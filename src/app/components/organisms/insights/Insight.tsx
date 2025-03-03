import React from "react";
import Text from "../../atoms/texts/Text";
import Card from "../../molecules/Card";
import insight1 from "../../../../../public/images/insightimg1.svg";
import insight2 from "../../../../../public/images/insightimg2.svg";
import insight3 from "../../../../../public/images/insightimg3.svg";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import Link from "next/link";
const Insight = () => {
  return (
    <div className="lg:mt-64 my-20 space-y-10">
      <Text
        child="Inspirations & Insights Of The Digital Art"
        className="text-center lg:text-4xl text-2xl font-extrabold"
      />
      <div className="flex justify-center gap-7 flex-col lg:flex-row ">
        <Link href="">
          <Card
            className="border border-gray-200 shadow-lg border-t px-4"
            imgclassName="w-full rounded-none"
            imageSource={insight1}
            category="Inspiration"
            duration="4 min read"
            title="Paige Deasley`s Photos Capture the Joy of Outdoor Adventures"
            categoryClass="text-xs font-bold mt-4 mb-6"
            titleClass="font-bold mb-2"
            durationClass="text-xs text-gray-500 mb-4"
          />
        </Link>
        <Link href="">
          <Card
            className="border border-gray-200 shadow-lg border-t px-4"
            imgclassName="w-full"
            imageSource={insight2}
            category="Trends"
            duration="4 min read"
            title="Paige Deasley`s Photos Capture the Joy of Outdoor Adventures"
            categoryClass="text-xs font-bold mt-4 mb-6"
            titleClass="font-bold mb-2"
            durationClass="text-xs text-gray-500 mb-4"
          />
        </Link>
        <Link href="">
          <Card
            className="border border-gray-200 shadow-lg border-t px-4"
            imgclassName="w-full"
            imageSource={insight3}
            category="Tips & tricks"
            duration="4 min read"
            title="Paige Deasley`s Photos Capture the Joy of Outdoor Adventures"
            categoryClass="text-xs font-bold mt-4 mb-6"
            titleClass="font-bold mb-2"
            durationClass="text-xs text-gray-500 mb-4"
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <AllPurposeButton
          child="Read more blog"
          className="text-sm   border-black border py-2 px-8 rounded font-semibold"
        />
      </div>
    </div>
  );
};

export default Insight;
