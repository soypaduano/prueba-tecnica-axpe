import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.css";
import useScrollDirection from './useScrollDirection';

export default function MainNavigation({ setPage }) {

  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);

  return (
    <header className={`header ${ scrollDirection === "down" ? "hide" : "show"}`} data-test="navigation-header">
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className='badge'>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
