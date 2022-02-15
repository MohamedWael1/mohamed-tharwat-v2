const COLORS = {
    default: "var(--text-color)",
    gray100: "var(--color-gray-100)",
    gray200: "var(--color-gray-200)",
    gray300: "var(--color-gray-300)",
    gray400: "var(--color-gray-400)",
    gray500: "var(--color-gray-500)",
    gray600: "var(--color-gray-600)",
    gray700: "var(--color-gray-700)",
    gray800: "var(--color-gray-800)",
    gray900: "var(--color-gray-900)",
    gray1000: "var(--color-gray-1000)"
};

const FONT_SIZES = {
    xxs: "var(--fz-xxs)",
    xs: "var(--fz-xs)",
    sm: "var(--fz-sm)",
    md: "var(--fz-md)",
    lg: "var(--fz-ld)",
    xl: "var(--fz-xl)",
    xxl: "var(--fz-xxl)"
}

export function getTextStyles({
    size = "md",
    color = "default",
}){
    return {
        fontSize: getTextSize(size),
        color: getTextColor(color)
    }
}

function getTextColor(color){
    const c = COLORS[color];

    if(!c){
        throw new Error(`unrecognized text color: ${color}`)
    }

    return c;
}

function getTextSize(size){
    const s = FONT_SIZES[size];
    
    if(!s){
        throw new Error(`unrecognized font size: ${size}`);
    }

    return s;
}
