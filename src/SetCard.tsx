import clsx from "clsx";

export enum SetCardSymbol {
    Oval = "oval",
    Diamond = "diamond",
    Squiggle = "squiggle",
}

export enum SetCardColor {
    Red = "#e73d40",
    Green = "#05b45d",
    Purple = "#482c90",
}

export enum SetCardFill {
    Blank = "blank",
    Semi = "semi",
    Full = "full",
}

export interface SetCardData {
    id: string;
    symbol: SetCardSymbol;
    color: SetCardColor;
    fill: SetCardFill;
    count: number;
}

export interface SetCardProps {
    card: SetCardData;
    selected: boolean;

    onClick?(): void;
}

export function SetCard({ card, selected, onClick }: SetCardProps) {
    return (
        <div className={clsx("set-card", selected && "selected")} onClick={onClick}>
            <div className="content symbols">
                {Array.from(Array(card.count).keys()).map((i) => (
                    <div key={i} className="symbol">
                        <svg viewBox="0 0 1 2" height="100" width="50" strokeWidth="0.06" fill={card.color} stroke={card.color}>
                            <defs>
                                <pattern id="pattern-semi" width="1" height="0.08">
                                    <rect width="1" height="0.08" fill="white" stroke="none"></rect>
                                </pattern>
                                <mask id="mask-semi">
                                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-semi)" />
                                </mask>

                                <mask id="mask-blank">
                                    <rect x="0" y="0" width="100%" height="100%" fill="black" />
                                </mask>

                                <mask id="mask-full">
                                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                </mask>
                            </defs>

                            {renderCardSymbol(card)}
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderCardSymbol({ symbol, fill }: SetCardData) {
    switch (symbol) {
        case SetCardSymbol.Oval:
            return (
                <g>
                    <rect className="fill" mask={`url(#mask-${fill})`} width="1" height="2" rx="0.5" ry="1"></rect>
                    <rect className="outline" width="1" height="2" rx="0.5" ry="1"></rect>
                </g>
            );
        case SetCardSymbol.Squiggle:
            return (
                <g>
                    <path
                        className="fill"
                        mask={`url(#mask-${fill})`}
                        d="M 0.62448372,1.9996716 C 0.49058336,2.0026986 0.32047913,1.9387035 0.21695655,1.8488508 0.11343397,1.7589981 0.05075214,1.6888193 0.04642387,1.5275412 0.04209599,1.3662629 0.07218351,1.2460029 0.13952044,1.0714854 0.20685727,0.89696775 0.26177131,0.7522501 0.2128621,0.60947426 0.16395287,0.46669842 -0.0055879,0.29158052 -0.00490188,0.18919583 -0.0042162,0.08681151 0.09183023,0.00393495 0.25761388,3.9788625e-4 0.42339752,-0.00314853 0.50449137,0.04506831 0.63957437,0.14127975 0.7746575,0.23749232 0.87589088,0.37635802 0.90586662,0.51602948 0.93584188,0.6557007 0.93539696,0.77060626 0.860544,0.93158027 0.78569128,1.0925543 0.75637103,1.311258 0.81917462,1.4551328 c 0.0628036,0.1438744 0.14944087,0.2289215 0.17984269,0.33424 0.030401,0.1053183 -0.0576155,0.1561825 -0.13331865,0.1779009 -0.075704,0.02172 -0.1073139,0.029365 -0.24121494,0.032398 z"
                    ></path>
                    <path
                        className="outline"
                        d="M 0.62448372,1.9996716 C 0.49058336,2.0026986 0.32047913,1.9387035 0.21695655,1.8488508 0.11343397,1.7589981 0.05075214,1.6888193 0.04642387,1.5275412 0.04209599,1.3662629 0.07218351,1.2460029 0.13952044,1.0714854 0.20685727,0.89696775 0.26177131,0.7522501 0.2128621,0.60947426 0.16395287,0.46669842 -0.0055879,0.29158052 -0.00490188,0.18919583 -0.0042162,0.08681151 0.09183023,0.00393495 0.25761388,3.9788625e-4 0.42339752,-0.00314853 0.50449137,0.04506831 0.63957437,0.14127975 0.7746575,0.23749232 0.87589088,0.37635802 0.90586662,0.51602948 0.93584188,0.6557007 0.93539696,0.77060626 0.860544,0.93158027 0.78569128,1.0925543 0.75637103,1.311258 0.81917462,1.4551328 c 0.0628036,0.1438744 0.14944087,0.2289215 0.17984269,0.33424 0.030401,0.1053183 -0.0576155,0.1561825 -0.13331865,0.1779009 -0.075704,0.02172 -0.1073139,0.029365 -0.24121494,0.032398 z"
                    ></path>
                </g>
            );
        case SetCardSymbol.Diamond:
            return (
                <g>
                    <path className="fill" mask={`url(#mask-${fill})`} d="M 0.5 0 L 1 1 L 0.5 2 L 0 1 Z"></path>
                    <path className="outline" d="M 0.5 0 L 1 1 L 0.5 2 L 0 1 Z"></path>
                </g>
            );
    }
}
