"use client";

import { usePathname } from "@/i18n/rounting";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const LocaleChangeButton = () => {
  const t = useTranslations("Language");
  const router = useRouter();
  const pathName = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selected = e.target.value;
    router.push(`/${selected}${pathName}`);
  };

  return (
    <select
      className="bg-transparent"
      defaultValue={currentLocale}
      onChange={handleLocaleChange}
    >
      <option className="text-black" value="ko">
        {t("Korean")}
      </option>
      <option className="text-black" value="en">
        {t("English")}
      </option>
    </select>
  );
};

export default LocaleChangeButton;
