import breakpoints from "../themes/breackpoints";

const mobileBreakPoints = parseInt(breakpoints.mobile.width);
export const isMobile = window.innerWidth <= mobileBreakPoints;
