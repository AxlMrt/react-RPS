function Header({score}) {
  return (
    <div className="h-2/5 flex items-center justify-center">
      <div className="w-2/5 flex justify-between border-3 border-slate-500 rounded-2xl xl:w-4/6 sm:w-5/6">
        <div className="flex items-center mx-7 my-5">
          <ul>
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissors</li>
            <li>Lizard</li>
            <li>Spoke</li>
          </ul>
        </div>
        <div className="w-2/6 text-center bg-white rounded-lg p-2 text-slate-600 mx-7 my-5 sm:mx-3 sm:my-3">
          <p className="text-lg tracking-widest sm:text-sm">score</p>
          <span className="text-6xl sm:text-4xl">{score}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;