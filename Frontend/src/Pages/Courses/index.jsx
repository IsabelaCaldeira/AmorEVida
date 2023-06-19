import { useState } from "react";
import { posts } from "../../constants/db.jsx";
import Banner from "../../layouts/Banner";
import banner from "/assets/img/banner-courses.png";
import foto from "/assets/img/courses-picture.png";

export default function Courses() {
  const [item] = useState(posts[3]);

  return (
    <article className="mx-8">
      <Banner img={banner} titulo="CURSOS E PALESTRAS" />
      <div className="img-nos max-w-4xl mx-auto">
        <img className="mt-20" src={foto} alt="foto em de uma ação para doação" />
        <p className="my-8 mt-12 mb-20">{item.texto}</p>
      </div>
    </article>
  );
}
