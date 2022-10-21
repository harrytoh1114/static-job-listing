import React, { useEffect, useState } from "react";
import "./Home.scss";
import { ReactComponent as BgHeaderDesktop } from "../images/bg-header-desktop.svg";
import { ReactComponent as BgHeaderMobile } from "../images/bg-header-mobile.svg";
import { ReactComponent as IconRemove } from "../images/icon-remove.svg";
import Jobs from "../components/Jobs/Jobs";
import data from "../util/data";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../store/filter-slice";
import useCurrentWidth from "../hook/useCurrentWidth";

const Home = () => {
  const [filterResult, setFilterResult] = useState([]);

  const width = useCurrentWidth();

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.params);

  useEffect(() => {
    var resultArr = [];
    for (var i = 0; i < data.length; i++) {
      const dataFilter = [];
      dataFilter.push(data[i].role, data[i].level, ...data[i].language, ...data[i].tools)

      if (filter.every((f) => dataFilter.indexOf(f) > -1)) {
        resultArr.push(data[i]);
      }
    }
    setFilterResult(resultArr);
  }, [filter]);

  return (
    <main className="job">
      {width > 1000 ? (
        <BgHeaderDesktop className="job__header" />
      ) : (
        <BgHeaderMobile className="job__header" />
      )}
      {filter.length > 0 ? (
        <div className="job__filter">
          <div className="job__filter-wrapper">
            {filter.map((f) => {
              return (
                <button
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
                </button>
              );
            })}
          </div>
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
                  key={d.id}
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
                  key={d.id}
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
