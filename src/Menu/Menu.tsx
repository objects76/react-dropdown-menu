import React, { useCallback } from "react";
import "./Menu.css";

export default function Menu() {
  const onMenu = useCallback((e: any) => {
    alert(e.currentTarget.textContent);
  }, []);
  return (
    <>
      <nav>
        <label className="logo">Menu test</label>
        <ul>
          <li>
            <a href="#" onClick={onMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              Features
              <i className="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#" onClick={onMenu}>
                  Python
                </a>
              </li>
              <li>
                <a href="#" onClick={onMenu}>
                  JQuery
                </a>
              </li>
              <li>
                <a href="#" onClick={onMenu}>
                  Javascript
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Web Design
              <i className="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#" onClick={onMenu}>
                  Front End
                </a>
              </li>
              <li>
                <a href="#" onClick={onMenu}>
                  Back End
                </a>
              </li>
              <li>
                <a href="#">
                  Others
                  <i className="fas fa-caret-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#" onClick={onMenu}>
                      Links
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={onMenu}>
                      Works
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={onMenu}>
                      Status
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={onMenu}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" onClick={onMenu}>
              Feedback
            </a>
          </li>
        </ul>
      </nav>
      <section></section>
    </>
  );
}
