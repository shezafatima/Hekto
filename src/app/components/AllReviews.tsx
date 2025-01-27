import React from "react";
import Link from "next/link";
import { Review } from "../../../types/products";

interface Props {
  review: Array<Review>;
  slug: string;
}

const AllReviews = ({ review}: Props) => {
  return (
    <div>
      <h3>All Reviews</h3>
      {review?.length === 0 && <p>No reviews yet.</p>}
      {review?.length > 0 && (
        <div className="mb-2">
          <Link
            scroll={false}
            href={""}
            className={`mr-4 text-sm `}
          >
            Oldest
          </Link>
          <Link
            scroll={false}
            href={""}
            className={`mr-4 text-sm `}
          >
            Newest
          </Link>
        </div>
      )}
      {review?.map((review) => (
        <div key={review?._id} className="border-b border-gray-200/50 py-2">
          <p>
            <strong>{review?.name}</strong>{" "}
            <span className="text-gray-500 text-sm">
              {new Date(review?._createdAt).toLocaleString()}
            </span>
          </p>
          <p>{review?.review}</p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;