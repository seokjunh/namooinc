import Image from "next/image";
import KakaoMap from "./KakakoMap";

const RouteGuide = () => {
  return (
    <div className="py-[6.25rem]">
      <div className="mx-auto max-w-6xl py-16">
        <div className="mb-b mb-[5rem] text-center text-4xl font-bold underline underline-offset-[1rem]">
          오시는 길
        </div>
        <div>
          <KakaoMap />
          <div className="flex justify-between border-b py-[1.875rem]">
            <div className="flex items-center gap-4">
              <Image
                src={"/image/map_ic.png"}
                alt={"map_ic"}
                width={24}
                height={32}
              />
              <div className="text-xl font-medium">
                서울특별시 강남구 도산대로30길 33-8 (대경빌딩 3층)
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={"/image/tel_ic1.png"}
                  alt={"tel_ic"}
                  width={70}
                  height={70}
                />
                <div>
                  <div className="text-xl font-medium">TEL</div>
                  <div>02-3018-5114</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={"/image/tel_ic2.png"}
                  alt={"tel_ic1"}
                  width={70}
                  height={70}
                />
                <div>
                  <div className="text-xl font-medium">FAX</div>
                  <div>02-3018-3026</div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[1.25rem] text-2xl font-normal">교통편</div>
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={"/image/tel_ic3.png"}
                alt={"tel_ic3"}
                width={90}
                height={90}
              />
              <div>
                <div className="text-xl font-medium">버스</div>
                <div className="text-xl">학동역, 강남을지병원 하차</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/image/tel_ic4.png"}
                alt={"tel_ic4"}
                width={90}
                height={90}
              />
              <div>
                <div className="text-xl font-medium">지하철</div>
                <div className="text-xl">
                  학동역 7번 출구 도보로 5분, 신사역 1번 출구 도보로 14분
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteGuide;
