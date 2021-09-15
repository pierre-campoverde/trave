import React, { useState } from "react";
import ButtonNav from "../../Atoms/Buttons/ButtonNav";
const ButtonsMenu = (props) => {
  return <div className="w-4/12 h-auto mt-10">
      <ButtonNav handleClickCallback={props.handleClickCallback} name={'Requisitos de admision'}/>
      <ButtonNav handleClickCallback={props.handleClickCallback} name={'Visado'}/>
      <ButtonNav handleClickCallback={props.handleClickCallback} name={'Costos educativos'}/>
      <ButtonNav handleClickCallback={props.handleClickCallback} name={'Costos de vida'}/>
      <ButtonNav handleClickCallback={props.handleClickCallback} name={'Estructura del programa'}/>
      <ButtonNav handleClickCallback={props.handleClickCallback} name={'Permisos de trabajo'}/>
   </div>;
};
const ProgramInfoContent = (props) => {
  return (
    <div className="w-7/12 h-auto divide-y-2 p-2">
      <h3 className="my-3 h3 ">{props.title}</h3>
      <div className="content body-base p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem
        quidem quasi, inventore illo, aliquam quos, adipisci in et at
        consectetur fugit praesentium cum ipsa! Et natus quod vitae sit ex quasi
        cumque nam iusto nemo accusamus similique esse assumenda debitis modi,
        consequuntur fugiat praesentium libero at reiciendis omnis. Suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem
        quidem quasi, inventore illo, aliquam quos, adipisci in et at
        consectetur fugit praesentium cum ipsa! <br /> Et natus quod vitae sit
        ex quasi cumque nam iusto nemo accusamus similique esse assumenda
        debitis modi, consequuntur fugiat praesentium libero at reiciendis
        omnis. Suscipit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nihil rem quidem quasi, inventore illo, aliquam quos, adipisci in
        et at consectetur fugit praesentium cum ipsa! Et natus quod vitae sit ex
        quasi cumque nam iusto nemo accusamus similique esse assumenda debitis
        modi, consequuntur fugiat praesentium libero at reiciendis omnis.
        Suscipit.
      </div>
    </div>
  );
};
const ProgramInfoMenu = () => {
  const [content, setContent] = useState("Requisitos de admision");
  const handleClick= (value) => {
    setContent(value);
    console.log(content);
  };
  return (
    <div className="justify-between hidden md:flex">
      <ProgramInfoContent title={content}/>
      <ButtonsMenu handleClickCallback={handleClick}/>
    </div>
  );
};

export default ProgramInfoMenu;
