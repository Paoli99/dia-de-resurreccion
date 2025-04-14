import Cielo from "./components/Cielo";
import Tumba from "./components/Tumba";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-none flex flex-col items-center justify-center text-center px-6 pt-10">
      <div className="mb-100">
      <h1 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'StarJedi' }}>
        Feliz domingo de resurrección
      </h1>
      <p className="mt-0 text-lg text-gray-700">
      Si Jesús resucitó,
      ¿por qué no tú y yo en Fortnite otra vez, bro?<br />
      </p>
      </div>
      <Cielo />
      
      <Tumba />
      
    </div>
  )
}
