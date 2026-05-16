import Link from "next/link";
import { Logo } from "./logo";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/">
          <Logo />
        </Link>
        <div className="nav-links">
          <a href="#">
            Product{" "}
            <svg
              className="chev"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#">Solutions</a>
          <a href="#">Integrations</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
        </div>
        <div className="nav-right">
          <Link className="signin" href="/login">
            Sign In
          </Link>
          <Link className="cta-primary" href="/signup">
            Start Building Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
