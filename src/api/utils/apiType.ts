type PageType = "ssr" | "csr" | "ssg" | "isr";

export const apiType = (pageType: PageType, revalidate?: string) => {
  switch (pageType) {
    case "ssr":
      return {
        headers: {
          "cache": "no-store",
        },
      };
    case "ssg":
      return {
        headers: {
          "Cache-Control": "force-cache",
        },
      };
    case "isr":
      return {
        next: { revalidate: revalidate ?? 60 },
      };
    default:
      return {};
  }
};
