import articles from "../db"

export const LearningPage: React.FC = () => {

    return <ul className="mt-6">
        {
            articles?.map((item, index) => {
                return <li key={index} className="transition hover:translate-y-1 p-3 border rounded-lg mb-3">
                    <span className="inline-block p-2 bg-yellow-500 rounded-lg text-white mr-3">{item.type}</span>
                    <span className="inline-block p-2 bg-green-600 rounded-lg text-white">{item.level}</span>
                    <h2 className="mb-2 text-center">{item.title}</h2>
                    <p >{item.text}</p>
                </li>
            })
        }
    </ul>
}