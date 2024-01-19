import Link from "next/link";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link className="link" href="/">
          ADMIN.BIKE-BOOKING.COM
        </Link>
      </h1>
    </header>
  );
};
