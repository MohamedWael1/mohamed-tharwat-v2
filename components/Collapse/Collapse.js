import useResizeObserver from "use-resize-observer";
import usePrevious from "hooks/usePrevious";

function Collapse({ isCollapsed = false, children, ...delegated }){
    const  { height, ref } = useResizeObserver();
    const prev = usePrevious(height);

    return (
        <Wrapper 
            style={{height}}
            ref={ref}
            {...delegated}
        >

        </Wrapper>
    )
}

const Wrapper = styled.div`
    transition: height 400ms;
`;

export default Collapse;