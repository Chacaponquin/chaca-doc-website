import React from "react";
import { APP_IMAGES } from "@site/src/modules/app/constants/IMAGES";
import { LINKS } from "@site/src/modules/app/constants/LINKS";
import { ButtonPrimary } from "@site/src/modules/shared/modules/button/components";
import { ContentSection } from "../../shared/components";
import { useHeader } from "./hooks";

import "./header.css";

export default function Header() {
  const { COMMAND_TEXT, handleClickCopyCommand } = useHeader();

  return (
    <ContentSection>
      <header className="home_header_container">
        <img
          src={APP_IMAGES.HEADER_IMAGE.src}
          alt={APP_IMAGES.HEADER_IMAGE.alt}
        />

        <div className="header_text">
          <div className="logo_text">
            <h1 className="font-extra-bold">Welcome to CHACA</h1>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            minima?
          </p>

          <div className="header_text_buttons">
            <a href={LINKS.GITHUB} target="_blank">
              <ButtonPrimary text="Get started" />
            </a>

            <div className="command_div font-code">
              <p>{COMMAND_TEXT}</p>

              <button onClick={handleClickCopyCommand}>
                <img src="/img/copy.svg" alt="copy icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </ContentSection>
  );
}
