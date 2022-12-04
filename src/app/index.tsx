import { MouseEvent } from "react";
import { notes } from "../helpers/helpers";
import Octave from "../components/Octave";

function App() {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        const audio = new Audio(`sounds/piano_${value}.mp3`);
        audio.play();
    };
    return (
        <div className='App'>
            <Octave notes={notes} clickHandler={handleClick} />
        </div>
    );
}

export default App;
