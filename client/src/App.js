const knows = [
  "Front End", "Back End", "Design", "3D"
]

const randomNumber = () => {
  const rand = Math.floor(Math.random() * 10);
  return rand;
}

function App() {
  return (
    <div className="bg-[#090116] h-screen">

      {/* Main title after topNav */}
      <div className="grid grid-rows-3 grid-flow-col text-center gap-0 ">
        <p className="text-white text-2xl font-bold font-grotesk self-end"> KNOWS...</p>
        <h1 className="text-[#5bcefa] font-grotesk font-bold text-[92px]">{knows[0]}</h1>
        <p className="text-white text-2xl font-bold font-grotesk self-start"> DEVELOPER, DESIGNER, </p>
      </div>


    </div>
  );
}

export default App;
