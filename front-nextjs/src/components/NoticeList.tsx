"use client";

import { post } from "@/lib/type";
import { useRouter } from "next/navigation";

interface NoticeListProps {
  posts: post[];
}

const NoticeList = ({ posts }: NoticeListProps) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/support/notice/${id}`);
  };
  return (
    <div className="overflow-hidden">
      {posts.map((post) => (
        <div key={post.id}>
          <div
            className="grid cursor-pointer grid-cols-10 gap-4 border-b p-4 text-sm text-gray-700 transition-all hover:bg-gray-50 hover:shadow-md"
            onClick={() => handleClick(post.id)}
          >
            {/* 게시물 ID */}
            <div className="text-center text-gray-500">{post.id}</div>

            {/* 제목 */}
            <div className="col-span-6 text-center">{post.title}</div>

            {/* 작성자 */}
            <div className="text-center">관리자</div>

            {/* 작성일 */}
            <div className="col-span-2 text-center text-gray-500">
              {post.createdAt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NoticeList;
