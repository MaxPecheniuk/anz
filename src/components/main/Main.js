import React from 'react';
import facepalm from '../../oh-no-emoji.gif'
import cat from '../../cat.webp'

export const Main = () => {
    const [clickState, setClickState] = React.useState(0)
    // const [buttonTop, setButtonTop] = React.useState("")
    const [buttonTop, setButtonTop] = React.useState("48.5%")
    const [buttonLeft, setButtonLeft] = React.useState("")
    // const [buttonLeft, setButtonLeft] = React.useState("27.5%")
    const [buttonRight, setButtonRight] = React.useState("")
    const [buttonText, setButtonText] = React.useState("Нажми для запуска")
    const onClickHandler = () => {
        if (clickState === 0) {
            setButtonTop("20%")
            setButtonLeft("10%")
            setButtonText("Ну же, нажми на меня!")
        }
        if (clickState === 1) {
            setButtonTop("90%")
            setButtonLeft("")
            setButtonRight("10%")
            setButtonText("Мне долго еще ждать?!")
        }
        if (clickState === 2) {
            setButtonTop("90%")
            setButtonLeft("")
            setButtonRight("10%")
            setButtonText("Мне долго еще ждать?!")
        }

        setClickState(clickState + 1)

    }

    const text = "Поздравляю тебя с 8 Марта, весенним праздником цветов и тепла! Пусть твоя жизнь будет яркой и красочной, как витрина цветочного магазина в преддверии праздника, а удача прилипает к тебе так же непременно, как лепестки к влажным рукам после боя подушками.\nЖелаю тебе в этот день столько комплиментов, чтобы твои уши пылали краснее самого страстного тюльпана. Пусть каждый мужчина в твоей жизни будет столь внимателен и предан, как если бы он был последним экземпляром мужского пола на распродаже в Черную пятницу.\nИ помни: если вдруг забыли подарить цветы — это не повод для грусти. Это повод для того, чтобы самой выбрать себе подарок посерьезнее. Например, новую сумочку или поездку на Мальдивы.\nС 8 Марта!"

    return (
        <div className={'main'}>
            {
                clickState !== 3 ? (
                        <>
                            <span className="hello">Привет, Анжелика!</span>
                            <button onClick={onClickHandler} className="button"
                                    style={{top: buttonTop, left: buttonLeft, right: buttonRight}}>
                                {clickState >= 2 && (<img src={facepalm} style={{width: "20px"}}/>)}
                                {buttonText}
                            </button>
                        </>
                    ) :
                    (
                        <>
                            <h2 className="header">C 8 Марта!</h2>
                            <img src={cat} className="cat"/>
                            <div className="happy_text">
                                {text}
                            </div>
                        </>
                    )
            }

        </div>
    )
}
