import React from 'react';
import clsx from 'clsx';

import { Head } from 'seo/Head/Head';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { ShaderTile } from 'components/ShaderTile/ShaderTile';

import styles from './IndexPage.module.scss';
import sharedStyles from 'utils/sharedStyles.module.scss';
import img1 from 'assets/tileImages/1.jpg';
import img2 from 'assets/tileImages/2.jpg';
import img3 from 'assets/tileImages/3.jpg';

export default function IndexPage() {
  return (
    <>
      <Head />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Shaders Playground</h1>
            <div className={styles.bookInfoWrapper}>
              <p className={styles.text}>based on</p>
              <LinkHandler isExternal elHref="https://thebookofshaders.com/">
                <span
                  className={clsx(
                    sharedStyles.blobBtn,
                    sharedStyles.blobBtnSmall,
                    sharedStyles.blobBtnNoShadow
                  )}
                >
                  The Book Of Shaders
                </span>
              </LinkHandler>
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <LinkHandler isExternal elHref="https://www.linkedin.com/in/michal-zalobny-1a8257204/">
              <span className={styles.contactText}>Michal Zalobny</span>
            </LinkHandler>
            <span className={styles.spacer} />
            <LinkHandler isExternal elHref="https://github.com/javusScriptus">
              <span className={clsx(styles.contactText, styles.contactTextBold)}>
                javusScriptus
              </span>
            </LinkHandler>
          </div>
        </header>
        <div className={styles.tilesWrapper}>
          <ShaderTile elHref="/1" imageSrc={img1.src} number="1" />
          <ShaderTile elHref="/1" imageSrc={img2.src} number="2" />
          <ShaderTile elHref="/1" imageSrc={img3.src} number="3" />
          <ShaderTile elHref="/1" imageSrc={img2.src} number="4" />
          <ShaderTile elHref="/1" imageSrc={img1.src} number="5" />
          <ShaderTile elHref="/1" imageSrc={img3.src} number="6" />
          <ShaderTile elHref="/1" imageSrc={img1.src} number="7" />
          <ShaderTile elHref="/1" imageSrc={img2.src} number="8" />
          <ShaderTile elHref="/1" imageSrc={img2.src} number="9" />
          <ShaderTile elHref="/1" imageSrc={img1.src} number="10" />
          <ShaderTile elHref="/1" imageSrc={img3.src} number="11" />
          <ShaderTile elHref="/1" imageSrc={img1.src} number="12" />
          <ShaderTile elHref="/1" imageSrc={img3.src} number="9" />
          <ShaderTile elHref="/1" imageSrc={img3.src} number="10" />
          <ShaderTile elHref="/1" imageSrc={img1.src} number="11" />
          <ShaderTile elHref="/1" imageSrc={img2.src} number="12" />
        </div>
      </div>
    </>
  );
}
