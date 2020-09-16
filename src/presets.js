export default Object.freeze({
    scaleTop: {
        hidden: {
            height: 0,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
            transform: "scaleY(0.5)",
            opacity: 0,
            transformOrigin: {
                value: "top",
                delay: 0,
                duration: 0,
            },
        },
    },
    scale: {
        hidden: {
            transform: "scale(0)",
        },
    },
    slide: {
        hidden: {
            height: 0,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
            overflow: {
                value: "hidden",
                duration: 0,
                delay: 0,
            },
        },
    },
    fade: {
        hidden: {
            opacity: 0,
        },
    },
    slideFade: {
        hidden: {
            height: 0,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
            overflow: {
                value: "hidden",
                duration: 0,
                delay: 0,
            },
        },
        beforeShow: {
            opacity: {
                value: 0,
                delay: 150,
            },
        },
        afterShow: {
            delay: 100,
            easing: "ease-in",
            opacity: {
                value: 0,
                delay: 0,
            },
        },
    },
    rise: {
        hidden: {
            transform: "translateY(50%)",
            zIndex: {
                value: 1,
                delay: 0,
                duration: 0,
            },
        },
        beforeShow: {
            easing: "ease-out",
            opacity: {
                value: 0,
                duration: 200,
            },
        },
        afterShow: {
            easing: "ease",
            opacity: {
                value: 0,
                duration: 200,
                delay: 50,
            },
        },
    },
});
