import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css"
import useScrollDirection from '../../util-hooks/useScrollDirection';
import { BrowserRouter as Router, Link } from "react-router-dom"

export default function MainNavigation({ goToUrl }) {
  const scrollDirection = useScrollDirection();
  return (
    <header className={`${classes.header} ${scrollDirection === "down" ? classes.down : ""}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/add">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
