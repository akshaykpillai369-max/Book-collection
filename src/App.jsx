// App.jsx
import Book from "./components/Book";
import Button from "./components/Button";
import Main from "./components/Counter";
import Changer from "./components/OnchangeDemo";

const Books = [
  {
      title:"Courage To Be Disliked",
      author:"Fumitake Koga and Ichiro Kishimi",
      image:"https://m.media-amazon.com/images/I/710cYy40DUL._SL1500_.jpg",
  },

  {
        title:"The Psychology of Money",
        author:"Morgan Housel",
        image:"https://m.media-amazon.com/images/I/71XEsXS5RlL._SL1500_.jpg",
  },

  {
        title:"Atomic Habits",
        author:"James Clear",
        image:"https://m.media-amazon.com/images/I/817HaeblezL._SL1500_.jpg",
  },
]
 function AddBook(){

 }

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 sm:p-12">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-indigo-400">
        My Book Collection
      </h1>
      {/* <input type="text" placeholder="Enter Book name" className="bg-white text-black mb-4" />
      <br />
      <button onClick={AddBook} className="bg-white text-black mb-4 border-slate-700 rounded-sm p-1">Create</button> */}
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      
      {Books.map((book) => {

          return <Book {...book} key={book.title} 
          
          />
        })}

        <Button/>
        <Main/>
        <Changer/>


      </div>
    </div>
  );
}