import TopButton from "@/src/components/commons/top-button";
import ProductDetailContents from "@/src/components/units/product/detail/detail-contents/ProductDetailContents.container";
import ProductDetailReview from "@/src/components/units/product/detail/review-list/ProductDetailReview.container";
import { gql, useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import ProductDetailHead from "../../../src/components/units/product/detail/head-section/ProductDetailHead.container";

const FETCH_COURSE = gql`
  query fetchCourse($courseId: ID!) {
    fetchCourse(courseId: $courseId) {
      _id
      name
      maxPrice
      minPrice
      difficulty
      materials
      contents
      subCategory
      courseAddress {
        address
        addressDetail
        zipcode
        lat
        lng
      }
    }
  }
`;

export default function ProductDetailPage() {
  const router: NextRouter = useRouter();

  const { data, loading } = useQuery(FETCH_COURSE, {
    variables: {
      courseId: router.query.courseId,
    },
  });

  return loading ? (
    <></>
  ) : (
    <>
      <ProductDetailHead data={data?.fetchCourse} />
      <ProductDetailReview />
      <ProductDetailContents data={data?.fetchCourse} />
      <TopButton />
    </>
  );
}
