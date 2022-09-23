import React from 'react';
import Button from 'shared/Button';
import Image from 'next/image';
import styles from './WhoWeServe.module.scss';

const WhatWeDo = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2>WHO WE SERVE</h2>
        <div className={styles.sectionHeadingUnderline}></div>
      </div>
      <div className={styles.sectionContent}>
        {
          data?.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <div className={styles.iconContainer}>
                <Image src={client.icon} width={78} height={61} alt="icon"/></div>
              <h3>{client.name}</h3>
              <hr />
              <p>{client.description}</p>
            </div>
          ))
        }
      </div>
      <div className={styles.sectionFooter}>
        <p>Be notified when this exciting product launches.</p>
        <Button white variant="animated" text="Be the first to know"/>
      </div>
    </div>
  )
}

export default WhatWeDo;

const data = [
  {
    icon: "/tenant.png",
    name: "Tenants",
    description: "With a powerful search tool, consumers can discover properties according to the metrics they describe on the search bar."
  },
  {
    icon: "/investor.png",
    name: "Developers",
    description: "Developers can procure properties such as buildings for re-leasing and/or renovation."
  },
  {
    icon: "/developer.png",
    name: "Investors",
    description: "Bricks and Acres provides investors make informed decisions by making It easy to discover the best deals."
  },
]