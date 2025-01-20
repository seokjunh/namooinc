import Image from "next/image";

const SolutionImg = () => {
  return (
    <div className="relative w-full">
      <Image
        src={"/image/corecode_img.png"}
        alt="img2"
        width={1000}
        height={1000}
        className="h-[30.25rem] w-full object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-2xl lg:text-4xl">
        제조 현장의 시스템과 장비 연계의 표준화
      </div>
    </div>
  );
};
export default SolutionImg;
