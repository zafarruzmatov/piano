import { FC, MouseEvent } from "react";
import { NoteType } from "../../helpers/helpers";
import Note from "../Note";
import { Wrapper } from "./styles";

type Props = {
    notes: NoteType[];
    clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Octave: FC<Props> = ({ notes, clickHandler }) => (
    <div>
        <Wrapper>
            <div>
                {notes.map((elemnt: NoteType) => (
                    <Note
                        key={elemnt.note}
                        color={elemnt.color}
                        note={elemnt.note}
                        clickHandler={clickHandler}
                    />
                ))}
            </div>
        </Wrapper>
    </div>
);

export default Octave;
