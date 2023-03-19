import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Png: require("@site/static/img/easyToUse.png").default,
    description: (
      <>
        Embed generator was designed from the ground up to be easily installed
        and used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Fast",
    Png: require("@site/static/img/fastDelivrery.png").default,
    description: <>Embed generator is fast.</>,
  },
  {
    title: "Typescript",
    Png: require("@site/static/img/promiseSupport.png").default,
    description: <>Written in typescript for type checking and avoid bugs.</>,
  },
];

function Feature({ Svg, Png, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={Png} className={styles.featureSvg} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
