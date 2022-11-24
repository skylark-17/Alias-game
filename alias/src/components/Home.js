import { useState, useEffect } from 'react'
import Timer from './Timer'
import { Context } from '../context'


let all_words = ["Игра", "Шляпа", "Кровать", "Калькулятор", "Процессор", "Телебашня", "Дрон", "Пододеяльник", "Чемпион", "Гейзер", "Кондиционер", "Либерал",
    "Магистратура", "Омоним", "Самостоятельность", "Стража", "Подвох", "Халтура", "Кульминация", "Абориген", "Юнга", "Админ", "Краситель", "Молодость", "Палуба", "Ранчо",
    "Громила", "Бергамот", "Дерматолог", "Самообразование", "Клиника", "Благотворительность", "Оскорбление", "Филолог", "Мемуары", "Астрология", "Штаб", "Капиталист",
    "Инструкция", "Резистор", "Металлолом", "Памятник", "Дворецкий", "Репетиция", "Резонанс", "Эфир", "Налогоплательщик", "Потребность", "Терминология", "Тюфяк",
    "Капустница", "Паникёр", "Руины", "Профессионал", "Умник", "Ботаника", "Мегафон", "Эпатаж", "Юморист", "Безысходность", "Анестезия", "Иерархия", "Монарх"]

function Home() {

    //get words from DB:
    //all_words = get_words()

    const [word, setWorlds] = useState(all_words[0])

    const [started, setStarted] = useState(false)
    const [ended_round, setEndedRound] = useState(true)
    const [current_team, setCurrentTeam] = useState(2)
    const [end_time, setEndTime] = useState()
    const [current_word, setCurrentWord] = useState(0)
    const [scores, setScores] = useState([0, 0])

    function Next_word() {
        setCurrentWord(current_word + 1)
        setWorlds(all_words[current_word])
    }

    function get_end_time() {
        //let end_time = Date.parse(new Date()) + 1000 * 30;
        //localStorage.setItem('end_time', JSON.stringify(end_time))
        console.log(Date())
        return Date.parse(new Date()) + 1000 * 30
    }

    function NextRound() {
        setEndedRound(false)
        setEndTime(get_end_time())
        setCurrentTeam(current_team === 1 ? 2 : 1)
    }

    function Start() {
        setStarted(true)
        NextRound()
    }

    function Guessed() {
        let new_scores = scores
        new_scores[current_team - 1]++
        setScores(new_scores)
        Next_word()
    }

    return (
        <div>
            <article>
                <h1>Играть</h1>
            </article>
            <div>
                <h3>Текщий счет: {scores[0]} : {scores[1]}</h3>
            </div>
            <h2>
                {(started && !ended_round) ? word : null}
            </h2>
            <div>
                {!started ? <button onClick={Start}> Начать</button> : null}
            </div>
            <div>
                {(started && !ended_round) ? <button onClick={Guessed}> Угадано</button> : null}
            </div>
            <div>
                {(started && ended_round) ? <button onClick={NextRound}> Следующий раунд</button> : null}

            </div>
            <div> {
                (started && !ended_round) ?
                    <Context.Provider value={{ setEndedRound }}>
                        {started ? <Timer end_time={end_time} /> : null}
                    </Context.Provider>
                    : null
            }
            </div>
        </div>
    );
}

export default Home;