import React from "react";
import Card from "./Card";
import face from "../../assets/icon-facebook.svg";
import twit from "../../assets/icon-twitter.svg";
import insta from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";

export default function Cards() {
  return (
    <div className="cards">
      <Card
        img={face}
        alt="face"
        nameUser="@nathanf"
        nbrFollowers="1987"
        txtFollowers="followers"
        dir="up"
        borderColor="fb"
      />
      <Card
        img={twit}
        alt="twit"
        nameUser="@nathanf"
        nbrFollowers="1044"
        txtFollowers="followers"
        dir="up"
        borderColor="twit"
      />
      <Card
        img={insta}
        alt="insta"
        nameUser="@realnathanf"
        nbrFollowers="11K"
        txtFollowers="followers"
        dir="up"
        borderColor="insta"
      />
      <Card
        img={youtube}
        alt="youtube"
        nameUser="Nathan F."
        nbrFollowers="8239"
        txtFollowers="subscribers"
        dir="down"
        borderColor="youtube"
      />
    </div>
  );
}
