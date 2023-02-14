import React from "react";
import { useState } from "react";

import GalleryImages from "../Components/GalleryImages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetData } from "../Actions/Getdataaction";
import Loading from "../Components/Loading";
import GalleryImgRender from "../Components/GalleryImgComp";

function Gallery(props) {
  const ToTop = () => {
    window.scrollTo({
      top: 5500,
      behavior: "smooth",
    });
  };

  const [load, setload] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Gallery.length === 0) {
      dispatch(GetData("gallery"));
    }
    setTimeout(() => {
      setload(false);
    }, 2000);
  }, []);
  const [filterask, setfilterask] = useState(true);
  const [GalleryContent, setGalleryContent] = useState([]);
  const Data = useSelector((state) => state.Data);
  const { loading, Gallery, error } = Data;
  const category = [
    ...new Set(
      GalleryImages.map((img) => {
        return img.category;
      })
    ),
    "All",
  ];
  useEffect(() => {
    Gallery.map((e) => {
      var obj = {
        category: e.content.split("&&")[3],
        title: e.content.split("&&")[0],
        brief: e.content.split("&&")[1],
        imgsrc: e.image,
      };

      if (!GalleryContent.find((e) => e.content == obj.brief)) {
        setGalleryContent((prev) => [...prev, obj]);
      }
    });
  }, [loading, filterask]);
  const ALLitems = category;
  const [items, setitems] = useState(GalleryImages);
  const [catitems, setcatitems] = useState(category);

  const filterGallery = (catgory) => {
    if (filterask) {
      setfilterask(false);
    } else {
      setfilterask(true);
    }
    if (catgory === "All") {
      setitems(GalleryImages);
      setGalleryContent(GalleryContent);
      return;
    }

    const updatedItems = GalleryImages.filter((ele) => {
      return ele.category === catgory;
    });

    setitems(updatedItems);
    ToTop();
  };

  return loading ? (
    <Loading />
  ) : load ? (
    <Loading />
  ) : Gallery.length!==0? (
    <>
      <section className="my-4 ">
        <div className="text-center">
          <h1 className="" data-aos="fade-down">
            My Project Gallery
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
        {/* Filtering purpose */}
        {/* <div className="my-4 mx-1 row flexer">
          <FilterMenu catitems={catitems} FilterGallery={filterGallery} />
        </div> */}
        <GalleryImgRender
          GalleryImages={GalleryContent}
          limit={GalleryContent.length > 47 ? 48 : GalleryContent.length}
          home={props.home}
        />
        {/* <GalleryImgRender GalleryImages={items} limit={items.length} /> */}
      </section>
    </>
  ):"no";
}
export default Gallery;
