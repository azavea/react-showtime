/** @jsx jsx */
import { jsx, Link, Image } from "theme-ui";

import Ticket from "./Ticket";
import react from "../img/react.svg";
import github from "../img/github.svg";

const sx = {
    header: {
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "9.2rem",
        py: 2,
        px: 3,
        bg: "white",
    },
    title: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        my: 0,
        mr: 2,
        transition: "transform 100ms",
    },
    showtime: {
        flex: "none",
        zIndex: 1,
    },
    repo: {
        flex: "none",
    },
};

const scrollTo = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function Header({ compact = false, ...props }) {
    return (
        <header sx={sx.header} {...props}>
            <h1
                sx={{
                    ...sx.title,
                    ...(compact ? { transform: "translateX(-2rem)" } : {}),
                }}
            >
                <Ticket
                    href="#"
                    active={!compact}
                    sx={sx.showtime}
                    iconSrc={react}
                    iconSize={32}
                    label="Showtime"
                    activeFontSize="2.4rem"
                    onClick={scrollTo}
                />
            </h1>
            <Link
                sx={sx.repo}
                title="Go to repo"
                href="https://github.com/azavea/react-showtime"
            >
                <Image src={github} width="40" height="40" />
            </Link>
        </header>
    );
}

export default Header;