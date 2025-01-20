import Link from "next/link";

const navItems = [
  {
    label: "회사소개",
    href: "/company",
    submenus: [
      { label: "나무I&C 소개", href: "/company/intro" },
      { label: "CEO 인사말", href: "/company/ceo" },
      { label: "연혁", href: "/company/history" },
      { label: "비전", href: "/company/vision" },
    ],
  },
  {
    label: "솔루션",
    href: "/solution",
    submenus: [
      { label: "CORECODE", href: "/solution/corecode" },
      { label: "P2E", href: "/solution/p2e" },
      { label: "Q2E", href: "/solution/q2e" },
      { label: "S2E", href: "/solution/s2e" },
      { label: "U2E", href: "/solution/u2e" },
    ],
  },
  {
    label: "고객지원",
    href: "/support",
    submenus: [
      { label: "게시판", href: "/support/notice" },
      { label: "자료실", href: "/support/download" },
      { label: "오시는 길", href: "/support/visit" },
    ],
  },
  {
    label: "인재채용",
    href: "/support",
    submenus: [
      { label: "채용정보", href: "/careers/jobs" },
      { label: "채용문의", href: "/careers/inquiry" },
    ],
  },
];

const DetailMenu = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className="w-full bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-around border-t py-5 lg:px-[25rem]">
        {navItems.map(({ label, submenus }) => (
          <div key={label}>
            <div className="font-pretendard pb-2 text-lg font-bold">
              {label}
            </div>
            {submenus.map((submenu) => (
              <Link
                key={submenu.label}
                href={submenu.href}
                className="block py-1 hover:text-[#78b237]"
              >
                {submenu.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DetailMenu;
