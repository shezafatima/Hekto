"use client";
import { useForm } from "react-hook-form";

interface Props {
  productId: string;
}

const AddReview = ({ productId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ name: string; review: string }>();

  const onSubmit = async (data: { name: string; review: string }) => {
    const { name,  review } = data;

    const res = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify({ name,  review, productId }),
    });
    if (!res.ok) {
      console.log("Failed to add review");
      return;
    }

    reset();
  };

  return (
    <div className="mt-14">
      <p>
        Leave a review<span role="img">💬</span>
      </p>
      <form
        className="flex flex-col border dark:border-purple-950 shadow-sm rounded px-8 pt-6 pb-6 mb-10"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <label>Name</label>
        <input
          {...register("name", { required: true })}
          className="mb-4 py-1 bg-amber-100 "
        />
        {errors.name && (
          <p className="text-red-600 text-xs">Name is required.</p>
        )}
        
        <label>Review</label>
        <textarea
          {...register("review", { required: true, minLength: 2 })}
          className="mb-4 py-1 bg-amber-100 "
        />
        {errors.review && (
          <p className="text-red-600 text-xs">Minimum 2 characters.</p>
        )}
        <input
          className={`cursor-pointer bg-[#FB2E86] text-white rounded py-2 hover:bg-[#c92b6f] ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
