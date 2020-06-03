import Link from "next/link";
import "./Menu.scss";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/movies">
          <a>Peliculas</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contacto</a>
        </Link>
      </li>
    </ul>
  );
}
