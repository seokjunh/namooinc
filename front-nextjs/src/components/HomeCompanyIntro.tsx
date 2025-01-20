const HomeCompanyIntro = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 text-3xl font-black md:mb-16 md:text-5xl lg:text-6xl">
        About
        <br />
        NAMOO I&C
      </div>
      <div className="mb-8 flex flex-col gap-y-2 text-xl md:mb-14 md:gap-y-3 md:text-2xl lg:text-4xl">
        <div>나무아이앤씨는</div>
        <div className="break-keep">
          고객의 가치를 서로 연계하여 더 큰 가치를 만드는
        </div>
        <div className="flex flex-wrap">
          <div className="text-[#78b237]">스마트팩토리 솔루션 전문기업</div>
          <div>입니다.</div>
        </div>
      </div>
      <div className="mb-8 flex flex-col gap-y-2 text-xl md:mb-14 md:gap-y-3 md:text-2xl lg:text-4xl">
        <div className="break-keep">
          점점 복잡해지고 다양해지는 데이터를 표준화된
        </div>
        <div className="break-keep">
          방식으로 연결하여 더욱 지능적이고 편리한 세상을 만들어가는
        </div>
        <div>혁신적인 솔루션을 개발하고 있습니다.</div>
      </div>
      <div className="flex flex-col gap-y-2 text-xl md:gap-y-3 md:text-2xl lg:text-4xl">
        <div>자체 개발 특허 솔루션을 보유한</div>
        <div className="break-keep">
          스마트 팩토리 선도 기업으로 4차 산업혁명 시대 제조 산업의
        </div>
        <div>혁신을 이끌고 미래 경쟁력을 강화하며,</div>
        <div>고객의 비즈니스 성장을 위해 최선을 다하겠습니다.</div>
      </div>
    </div>
  );
};
export default HomeCompanyIntro;
