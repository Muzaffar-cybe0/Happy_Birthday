import React, { useEffect } from "react";
import '../Css/letter.css'
import Bell_icon from '../assets/bell.png'
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
export default function Letter() {
     const navigate = useNavigate();
     const token = sessionStorage.getItem("token");
     useEffect(() => {
       if (!token) {
         navigate("/login");
       } else {
         console.log("token found");
       }
     }, []);

     const RemoveToken = (e)=>{
          e.preventDefault();
          sessionStorage.removeItem("token");
          toast("Orqaga qytdik", { type: "success" });
         setTimeout(() => {
          navigate("/login")
         }, 700);
     }
  return (
    <div className="letter">

      <div className="letter_child-1">
        <p>Happy Birthday to My</p>
        <img src={Bell_icon} alt="logo" />
      </div>

      <div className="letter_child-2">
        <p>
          Моя прекрасная Белль, сегодня, в этот особенный день, я хочу
          признаться тебе в своей безграничной любви. Ты словно волшебство,
          проникшее в мою жизнь, превратив ее из обычной в сказочную. Твоя
          красота сияет ярче солнца, а сердце твое чистое, как горный кристалл.
          Как и в сказке о Красавице и Чудовище, ты сумела разглядеть во мне то,
          что скрыто от других. Твоя вера и поддержка стали для меня настоящим
          чудом. Ты – моя роза, расцветающая каждый день и наполняющая мой мир
          ароматом счастья. С днем рождения, моя любимая! Пусть твоя жизнь будет
          полна волшебства, любви и исполнения желаний. Я обещаю быть твоим
          верным спутником на этом прекрасном пути.
        </p>
        <button type="button" onClick={RemoveToken}>Orqaga</button>
      </div>

    </div>
  );
}
