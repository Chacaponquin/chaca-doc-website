import React from "react";
import styles from "./header.module.css";
import { APP_IMAGES } from "@site/src/modules/app/constants/IMAGES";
import Link from "@docusaurus/Link";
import { LINKS } from "@site/src/modules/app/constants/LINKS";
import { ButtonPrimary } from "@site/src/modules/shared/modules/button/components";

export default function Header() {
  const commandText = "$ npm install chaca";

  return (
    <div className={styles.home_header_container}>
      <img
        src={APP_IMAGES.HEADER_IMAGE.src}
        alt={APP_IMAGES.HEADER_IMAGE.alt}
      />

      <div className={styles.header_text}>
        <div className={styles.logo_text}>
          <h1 className="font-extra-bold">Welcome to CHACA</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
          minima?
        </p>

        <div className={styles.header_text_buttons}>
          <a href={LINKS.GITHUB} target="_blank">
            <ButtonPrimary text="Get started" />
          </a>

          <div className={styles.command_div}>{commandText}</div>
        </div>
      </div>
    </div>
  );
}
