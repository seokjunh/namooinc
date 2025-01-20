import NoticeWriteForm from "./NoticeWriteForm";

const NoticeWrite = () => {
  return (
    <div className="py-[6.25rem]">
      <div className="py-16">
        <div className="mb-b mb-[5rem] text-center text-4xl font-bold underline underline-offset-[1rem]">
          글쓰기
        </div>
        <NoticeWriteForm />
      </div>
    </div>
  );
};
export default NoticeWrite;
