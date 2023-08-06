import { APP_IMAGES } from "@site/src/modules/app/constants/IMAGES";

interface ExportExtension {
  color: string;
  image: { src: string; alt: string };
}

export function useExport() {
  const EXTENSIONS: Array<ExportExtension> = [
    { color: "#ffeaa7", image: APP_IMAGES.EXPORT_EXTENSIONS.JAVASCRIPT },
    { color: "#ff7675", image: APP_IMAGES.EXPORT_EXTENSIONS.JAVA },
    { color: "#fdcb6e", image: APP_IMAGES.EXPORT_EXTENSIONS.JSON },
    { color: "#74b9ff", image: APP_IMAGES.EXPORT_EXTENSIONS.TYPESCRIPT },
    { color: "#0984e3", image: APP_IMAGES.EXPORT_EXTENSIONS.POSTGRESQL },
    { color: "#55efc4", image: APP_IMAGES.EXPORT_EXTENSIONS.CSV },
    { color: "#ee5253", image: APP_IMAGES.EXPORT_EXTENSIONS.YAML },
  ];

  return { EXTENSIONS };
}
