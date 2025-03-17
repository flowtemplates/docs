import siteConfig from "@generated/docusaurus.config";
import type * as PrismNamespace from "prismjs";
import Prism from "prismjs";

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism as { additionalLanguages: string[] };

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  for (const lang of additionalLanguages) {
    switch (lang) {
      case "ft":
        require("../code-lang/ft.ts");
        break;
      case "json":
        require("../code-lang/json.ts");
        break;
      default:
        require(`prismjs/components/prism-${lang}`);
    }
  }

  delete (globalThis as Optional<typeof globalThis, "Prism">).Prism;
  if (typeof PrismBefore !== "undefined") {
    globalThis.Prism = PrismObject;
  }
}
