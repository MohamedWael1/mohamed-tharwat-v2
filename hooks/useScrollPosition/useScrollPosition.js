import React from "react";

function useScrollPosition(){
    const [state, setState] = React.useState({
        top: 0,
        direction: 1
    });

    React.useEffect(
        () => {
            const handler = () => {
                setState(prev => ({
                    top: window.pageYOffset,
                    direction: window.pageYOffset > prev.top ? 1 : -1
                }))
            };

            document.addEventListener("scroll", handler);
            return () => document.removeEventListener("scroll", handler);
        },
        []
    );

    return state;
}

export default useScrollPosition;