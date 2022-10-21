import React, { useEffect, useState } from "react";
import { ReactComponent as Photosnap } from "../../images/photosnap.svg";
import { ReactComponent as Manage } from "../../images/manage.svg";
import { ReactComponent as Account } from "../../images/account.svg";
import { ReactComponent as MyHome } from "../../images/myhome.svg";
import { ReactComponent as LoopStudios } from "../../images/loop-studios.svg";
import FaceIt from "../../images/faceit.svg";
import { ReactComponent as Shortly } from "../../images/shortly.svg";
import { ReactComponent as Insure } from "../../images/insure.svg";
import EyecamCo from "../../images/eyecam-co.svg";
import { ReactComponent as AFC } from "../../images/the-air-filter-company.svg";

import "./Jobs.scss";
import { useDispatch } from "react-redux";
import { filterAction } from "../../store/filter-slice";
import useCurrentWidth from "../../hook/useCurrentWidth";

const Jobs = ({
  company,
  tag,
  job,
  post,
  type,
  location,
  role,
  level,
  language,
  tools,
}) => {
  const [compLogo, setCompLogo] = useState();
  const [tags, setTags] = useState([]);
  const [highlight, setHighlight] = useState();

  const width = useCurrentWidth();

  const dispatch = useDispatch();

  useEffect(() => {
    switch (company) {
      case "Photosnap":
        setCompLogo(<Photosnap />);
        break;
      case "Manage":
        setCompLogo(<Manage />);
        break;
      case "Account":
        setCompLogo(<Account />);
        break;
      case "MyHome":
        setCompLogo(<MyHome />);
        break;
      case "Loop Studios":
        setCompLogo(<LoopStudios />);
        break;
      case "FaceIt":
        setCompLogo(<img src={FaceIt} alt="Face It" />);
        break;
      case "Shortly":
        setCompLogo(<Shortly />);
        break;
      case "Insure":
        setCompLogo(<Insure />);
        break;
      case "Eyecam Co.":
        setCompLogo(<img src={EyecamCo} alt="Eyecam Co" />);
        break;
      case "The Air Filter Company":
        setCompLogo(<AFC />);
        break;
      default:
        break;
    }
  }, [company]);

  useEffect(() => {
    var tagsArr = [];
    tagsArr.push(role);
    tagsArr.push(level);

    if (language.length > 0) {
      for (var i = 0; i < language.length; i++) {
        tagsArr.push(language[i]);
      }
    }

    if (tools.length > 0) {
      for (var a = 0; a < tools.length; a++) {
        tagsArr.push(tools[a]);
      }
    }

    setTags(tagsArr);
  }, [role, level, language, tools]);

  useEffect(() => {
    if (tag.length > 1) {
      setHighlight("card card--highlight");
    } else {
      setHighlight("card");
    }
  }, [tag]);

  return (
    <div className={highlight}>
      <div className="card__inner">
        <div className="card__main">
          <div className="card__img">{compLogo}</div>
          <div className="card__detail">
            <div className="card__company-tag">
              <h3 className="card__company">{company}</h3>
              {tag.length > 0 ? (
                <div className="card__featured">
                  {tag.map((t) => {
                    if (t === "New!") {
                      return (
                        <div key={t} className="card__featured--primary">
                          {t}
                        </div>
                      );
                    } else if (t === "Featured") {
                      return (
                        <div key={t} className="card__featured--secondary">
                          {t}
                        </div>
                      );
                    }
                    return <div className="card__featured">{t}</div>;
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <h1 className="card__job">{job}</h1>
            <div className="card__description">
              <ul className="card__list">
                <li className="card__list--1">{post}</li>
                <li className="card__list--1">&#8226;</li>
                <li className="card__list--2">{type}</li>
                <li className="card__list--1">&#8226;</li>
                <li className="card__list--3">{location}</li>
              </ul>
            </div>
          </div>
        </div>
        {width < 1200 ? <hr className="card__divider" /> : ""}
        <div className="card__tags">
          {tags.map((t) => {
            return (
              <div
                className="card__tag"
                onClick={() => {
                  dispatch(filterAction.setFilter(t));
                }}
                key={t}
              >
                {t}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
