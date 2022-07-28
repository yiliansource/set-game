import update from "immutability-helper";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BsClockFill, BsCircleFill, BsDice5Fill, BsLightbulbFill } from "react-icons/bs";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { getRandomCard, getRandomCards } from "./lib/setFactory";
import { findSets } from "./lib/setSolver";
import { validateSet } from "./lib/setValidator";
import { SetCard, SetCardData } from "./SetCard";

export function SetApp() {
    const [cards, setCards] = useState<SetCardData[]>(getRandomCards(12));
    const [selection, setSelection] = useState<number[]>([]);

    const [time, setTime] = useState<number>(0);
    const [score, setScore] = useState<number>(0);

    const allSets = useMemo<number[][]>(() => [...findSets(cards)], [cards]);

    const toggleSelection = useCallback(
        (index: number) => {
            if (selection.includes(index)) {
                setSelection((s) => update(s, { $splice: [[selection.indexOf(index), 1]] }));
            } else {
                setSelection((s) => update(s, { $push: [index] }));
            }
        },
        [selection]
    );
    const giveHint = useCallback(() => {
        if (allSets.length > 0) {
            const setIndices = allSets[0];
            setSelection((s) => {
                s = s.filter((i) => setIndices.includes(i));
                return s.concat(setIndices.find((i) => !s.includes(i))!);
            });
        }
    }, [allSets]);
    const randomizeBoard = useCallback(() => {
        setCards(getRandomCards(12));
    }, []);

    useEffect(() => {
        if (selection.length === 3) {
            if (validateSet(selection.map((i) => cards[i]))) {
                setScore((s) => s + 1);
                setCards((s) =>
                    update(s, {
                        $splice: selection.map((i) => [i, 1, getRandomCard()]),
                    })
                );
            }

            setSelection([]);
        }
    }, [cards, selection]);

    useEffect(() => {
        const interval = setInterval(() => setTime((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="set-app">
            <div className="statistics">
                <div className="total-sets">
                    <span>Remaining Sets: {allSets.length}</span>
                </div>
                <div className="time">
                    <BsClockFill className="icon" />
                    <span>
                        {Math.floor(time / 60) +
                            ":" +
                            Math.floor(time % 60)
                                .toString()
                                .padStart(2, "0")}
                    </span>
                </div>
                <div className="score">
                    <BsCircleFill className="icon" />
                    <span>{score.toString()}</span>
                </div>
            </div>
            <div className="board">
                {cards.map((c, i) => (
                    <SwitchTransition key={i}>
                        <CSSTransition
                            key={c.id}
                            timeout={500}
                            classNames="animate-move"
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        >
                            <div className="set-card-wrapper" key={c.id}>
                                <SetCard card={c} selected={selection.includes(i)} onClick={() => toggleSelection(i)} />
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                ))}
            </div>
            <div className="controls">
                <button onClick={giveHint} disabled={allSets.length === 0}>
                    <BsLightbulbFill />
                </button>
                <button onClick={randomizeBoard}>
                    <BsDice5Fill />
                </button>
            </div>
        </div>
    );
}
