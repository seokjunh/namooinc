"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ReadingGlasses from "../../public/svg/ReadingGlasses";

export default function SearchNotice() {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit = (data: { searchTerm: string }) => {
    try {
      const query = data.searchTerm
        ? `?searchTerm=${encodeURIComponent(data.searchTerm)}`
        : "";

      router.push(`/support/notice${query}`);

      reset({ searchTerm: "" });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative flex items-center">
        <input
          {...register("searchTerm")}
          placeholder="검색어를 입력하세요."
          className="rounded-full border py-2 pl-4 pr-12 focus:outline-none"
        />
        <button type="submit" className="absolute right-4">
          <ReadingGlasses />
        </button>
      </div>
    </form>
  );
}
