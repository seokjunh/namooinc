const Footer = () => {
  return (
    <div className="bg-gray-100 py-16 lg:pb-10 lg:pt-[6.25rem]">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="text-4xl font-black">NAMOO I&C</div>
        <div>
          <div className="text-lg">
            서울특별시 강남구 도산대로30길 33-8 대경빌딩 3층
          </div>
          <div className="text-lg">
            대표이사 김경식 | 사업자등록번호 211-87-61350
          </div>
        </div>
        <div className="text-lg">
          © {new Date().getFullYear()} NAMOOI&C. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
