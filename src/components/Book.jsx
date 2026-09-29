import React from "react";


// Book.jsx
export default function Book({ title, author, image }) {

  const [isLiked, setIsLiked] =  React.useState(false)
  return (
    <div className="w-full max-w-sm bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between">
      <BookImage image={image} title={title} />
      <BookDetails title={title} author={author} />
      
     <button onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <ToggleBasicPreview/>


    </div>
  );
}

function ToggleBasicPreview() {
  const [unread, setUnread] = React.useState(false);

  return (
    <div className="flex items-center gap-4 m-3">
      <button
        onClick={() => setUnread(!unread)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          unread
            ? "bg-indigo-500 text-white"
            : "bg-slate-600 text-slate-200"
        }`}
      >
        {unread ? "Unread" : "Read"}
      </button>
    </div>
  );
}

function BookImage({ image, title }) {
  return (
    <div className="w-full h-72 bg-slate-900 p-4 flex items-center justify-center">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-auto object-contain rounded shadow-md"
      />
    </div>
  );
}

function BookDetails({ title, author }) {
  return (
    <div className="p-6 flex-1 flex flex-col justify-between text-center">
      <div>
        <h3 className="text-xl font-bold mb-2 text-indigo-300">{title}</h3>
        <p className="text-blue-300 text-md leading-relaxed font-montserrat">{author}</p>
      </div>
    </div>
  );
}