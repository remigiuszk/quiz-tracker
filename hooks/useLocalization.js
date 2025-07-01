import { useMemo } from "react";
import { i18nLocale } from "../localization/i18nLocale";
import { AppString } from "../localization/appString";

export const useLocalization = () => {
  return useMemo(() => {
    const localizedStrings = {};
    console.log("locale: ", i18nLocale);
    Object.keys(AppString).forEach((key) => {
      localizedStrings[key] = i18nLocale.t(AppString[key]);
    });

    console.log(i18nLocale.lng);

    return localizedStrings;
  }, []);
};
