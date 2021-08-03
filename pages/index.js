import Link from "next/link";
import style from "../styles/Home.module.css";
function HomePage() {
  return (
    <div>
      <h1 className={style.title}>Home page </h1>
      <p className={style.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
        earum? Laborum praesentium facere illum quae maiores velit,
        reprehenderit neque cum rem. Nesciunt ratione quidem modi quod quibusdam
        doloribus id.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        voluptatibus!
      </p>
      <Link href="/ninjas">
        <button className={style.btn}>See Ninjas</button>
      </Link>
    </div>
  );
}

export default HomePage;
