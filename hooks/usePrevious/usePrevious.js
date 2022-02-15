import React from "react";

function usePrevious(value){
    const ref = React.useRef(null);

    React.useEffect(
        () => {
            ref.current = value;
        },
        [value]
    );

    return ref.current;
}

export default usePrevious;