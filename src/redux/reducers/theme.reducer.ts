export const DARK_THEME = "DARK_THEME";
export const LIGHT_THEME = "LIGHT_THEME";

const initialState = {
    theme: false
};
export default (theme = initialState, { type }: any) => {
    switch (type) {
        case DARK_THEME:
            return { theme: true };
        case LIGHT_THEME:
            return { theme: false };
        default:
            return theme;
    }
};