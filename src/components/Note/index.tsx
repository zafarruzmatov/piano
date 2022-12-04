import { FC, MouseEvent } from "react";
import { Black, White } from "./styles";

type Props = {
    color: string;
    note: string;
    clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Note: FC<Props> = ({ color, note, clickHandler }) =>
    color === "white" ? (
        <White value={note} onClick={clickHandler} />
    ) : (
        <Black value={note} onClick={clickHandler} />
    );

export default Note;
