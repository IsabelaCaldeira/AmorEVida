import { useState } from "react";
import { posts } from "../../constants/db.js";
import Banner from "../../layouts/Banner";
import banner from "/assets/img/banner-donations.png";
import foto from "/assets/img/donations-picture.png";

export default function Donations() {
  const [item] = useState(posts[3]);

  return (
    <article>
      <Banner img={banner} titulo="Doações" />
      <div className="img-nos max-w-4xl mx-auto">
        <img className="mt-20" src={foto} alt="foto em de uma ação para doação" />
        <p className="my-8 mt-12 mb-20">{item.texto}</p>
      </div>
    </article>
  );
}
