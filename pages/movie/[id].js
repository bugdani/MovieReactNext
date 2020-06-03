import Menu from "../../components/Menu";
import Router, { useRouter } from "next/router";

export default function movie() {
  const router = useRouter();
  const { id } = router.query;

  const goToHome = () => {
    Router.push("/");
  };
  return (
    <div>
      <Menu />
      <h2>Estas viendo</h2>
      <h2>{id}</h2>
      <div>
        <button onClick={goToHome}>Ir a home</button>
      </div>
    </div>
  );
}
movie.getInitialProps = async () => {
  return {};
};
