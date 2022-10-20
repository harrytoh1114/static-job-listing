import React, { useEffect, useState } from "react";
import "./Home.scss";
import { ReactComponent as BgHeaderDesktop } from "../images/bg-header-desktop.svg";
import { ReactComponent as BgHeaderMobile } from "../images/bg-header-mobile.svg";
import { ReactComponent as IconRemove } from "../images/icon-remove.svg";
import Jobs from "../components/Jobs/Jobs";
import data from "../util/data";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../store/filter-slice";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [header, setHeader] = useState(
    <BgHeaderDesktop className="job__header" />
  );
  const [filterResult, setFilterResult] = useState([]);

  const detectWidth = () => {
    setWidth(window.innerWidth);
  };

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.params);

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    if (width < 376) {
      setHeader(<BgHeaderMobile className="job__header" />);
    } else {
      setHeader(<BgHeaderDesktop className="job__header" />);
    }

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [width]);

  useEffect(() => {
    var resultArr = [];
    for (var i = 0; i < data.length; i++) {
      if (filter.every((f) => data[i].filters.indexOf(f) > -1)) {
        resultArr.push(data[i]);
      }
    }
    setFilterResult(resultArr);
  }, [filter]);

  return (
    <main className="job">
      {header}
      {filter.length > 0 ? (
        <div className="job__filter">
          {filter.map((f) => {
            return (
              <div
                key={f}
                onClick={() => {
                  dispatch(filterAction.removeFilter(f));
                }}
                className="job__filter-item"
              >
                <div className="job__filter-item--text">{f}</div>
                <div className="job__filter-item--remove">
                  <IconRemove />
                </div>
              </div>
            );
          })}
          <button
            className="job__filter-clear"
            onClick={() => {
              dispatch(filterAction.removeAllFilter());
            }}
          >
            Clear
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="job__inner">
        {filter.length > 0
          ? filterResult.map((d) => {
              return (
                <Jobs
                  key={d.company}
                  company={d.company}
                  tag={d.tag}
                  job={d.job}
                  post={d.post}
                  type={d.type}
                  location={d.location}
                  role={d.role}
                  level={d.level}
                  language={d.language}
                  tools={d.tools}
                ></Jobs>
              );
            })
          : data.map((d) => {
              return (
                <Jobs
                  key={d.company}
                  company={d.company}
                  tag={d.tag}
                  job={d.job}
                  post={d.post}
                  type={d.type}
                  location={d.location}
                  role={d.role}
                  level={d.level}
                  language={d.language}
                  tools={d.tools}
                ></Jobs>
              );
            })}
      </div>
      <div></div>
    </main>
  );
};

export default Home;
