import { useState, useEffect } from 'react'
import Timer from './Timer'
import {StartedContext} from '../context'


let i = 0
let all_words = ["Игра", "Шляпа", "Кровать", "Калькулятор","Процессор","Телебашня","Дрон","Пододеяльник","Чемпион","Гейзер","Кондиционер","Либерал",
    "Магистратура","Омоним","Самостоятельность","Стража","Подвох","Халтура","Кульминация","Абориген","Юнга","Админ","Краситель","Молодость","Палуба","Ранчо",
    "Громила","Бергамот","Дерматолог","Самообразование","Клиника","Благотворительность","Оскорбление","Филолог","Мемуары","Астрология","Штаб","Капиталист",
    "Инструкция","Резистор","Металлолом","Памятник","Дворецкий","Репетиция","Резонанс","Эфир","Налогоплательщик","Потребность","Терминология","Тюфяк",
    "Капустница","Паникёр","Руины","Профессионал","Умник","Ботаника","Мегафон","Эпатаж","Юморист","Безысходность","Анестезия","Иерархия","Монарх"]

function Home() {

    //get words from DB:
    //all_words = get_words()

    const [word, setWorlds] = useState("")

    const [started, setStarted] = useState(false)

    useEffect(() => {
        const row_started = localStorage.getItem('started')
        setStarted(JSON.parse(row_started))
    }, [])

    function Next_word() {
        setWorlds(all_words[i + 1])
        i += 1
    }

    function set_end_time() {
        let end_time = Date.parse(new Date()) + 1000 * 30;
        localStorage.setItem('end_time', JSON.stringify(end_time))
    }

    function Start() {
        localStorage.setItem('started', JSON.stringify(true))
        set_end_time()
        setStarted(true)
        i = 0
        setWorlds(all_words[0])
    }

    return (
        <div>
            <div>
                <h1>Играть</h1>
            </div>
            <div>
                {started ? <div>Слов угадано:{i}</div> : null}
            </div>
                {started ? word : null}
            <div>
                {!started ? <button onClick={Start}> Начать</button> : null}
            </div>  
            <div>
                {started ? <button onClick={Next_word}> Следующее слово</button> : null}
            </div>

            <StartedContext.Provider value={{setStarted}}>
                {started ? <Timer/> : null}
            </StartedContext.Provider>
        </div>
    );
}

export default Home;
