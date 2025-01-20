"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import { post } from "@/lib/type";
import NoticeEditButton from "./NoticeEditButton";

interface NoticeDetailProps {
  post: post;
}

const NoticeDetail = ({ post }: NoticeDetailProps) => {
  const router = useRouter();

  const ToNoticeHandler = () => {
    router.push("/support/notice");
  };

  return (
    <div className="py-[6.25rem]">
      <div className="py-16">
        <div className="mb-b mb-[5rem] text-center text-4xl font-bold underline underline-offset-[1rem]">
          게시물 상세
        </div>
        <div className="mx-auto max-w-6xl space-y-5">
          <div className="flex justify-end">
            <NoticeEditButton />
          </div>
          <div className="rounded-lg border-2 p-8 shadow-sm">
            <div className="mb-6">
              <div className="break-all text-3xl font-semibold text-gray-900">
                {post.title}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>

            <div className="prose max-w-none whitespace-pre-wrap break-all text-gray-700">
              {post.content}
            </div>

            {/* 이미지가 있을 경우 표시 */}
            {/* {post.image && (
            <div className="mt-8">
              <Image
                src={post.image}
                alt="게시물 이미지"
                width={600}
                height={400}
                className="h-auto w-full rounded-lg shadow-xl"
              />
            </div>
          )} */}

            {/* 파일이 있을 경우 다운로드 링크 표시 */}
            {/* {post.file && (
            <div className="mt-6">
              <a
                href={post.file}
                download
                className="text-blue-600 hover:underline"
              >
                첨부파일 다운로드
              </a>
            </div>
          )} */}
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={ToNoticeHandler}
              className="rounded-lg bg-[#78b237] px-6 py-3 text-white transition hover:bg-[#78b237]/90"
            >
              목록
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
