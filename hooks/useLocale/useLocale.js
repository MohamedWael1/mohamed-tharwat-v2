import React from "react";
import { useRouter } from "next/router";
import { ar } from "locales";

function useLocale(){
    const router = useRouter();

    const { pathname, asPath, query, locale } = router;

    const toggleLocale = React.useCallback(
        () => {
            const nextLocale = locale === "ar" ? "en" : "ar";

            router.push({ pathname, query }, asPath, { locale: nextLocale });
        },
        [locale]
    );

    const t = React.useCallback(
        txt => {
            const source = locale === "ar" ? ar : {};
            return source[txt] || txt;
        },
        [locale]
    );

    return {
        toggleLocale,
        locale,
        t
    }
}

export default useLocale