import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div className={styles.container}>
      <h1>Ninjas List</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`}>
          <div key={ninja.id} className={styles.container}>
            <a href>
              <h3>
                {ninja.id}:{ninja.name}
              </h3>
            </a>
          </div>
        </Link>
      ))}
      <h2></h2>
    </div>
  );
};

export default Ninjas;
