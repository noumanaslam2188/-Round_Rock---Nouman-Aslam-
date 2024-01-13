import React from "react";
import Style from "./text.module.scss";

export const Text = ({title}) => {
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley";

  return (
    <div className={Style.myText}>
      <button className={Style.eclipse}>{title}</button>
      <p>{content}</p>
    </div>
  );
};
