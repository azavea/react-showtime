/** @jsx jsx */
import { jsx } from "theme-ui";
import { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Example from "./Example";
import {
    HOOK_EXAMPLES,
    COMPONENT_EXAMPLES,
    PRESET_EXAMPLES,
} from "../examples";

const sx = {
    examples: {
        bg: "tint",
        pt: 2,
    },
    section: {
        width: "88rem",
        maxWidth: "100%",
        mx: "auto",
        pb: 4,
        ":not(:last-of-type)": {
            mb: 8,
            borderBottom: "8px solid #fff",
            // borderBottom: "1px solid #00000011",
        },
    },
    name: {
        my: 4,
        fontFamily: "Pompiere, cursive",
        fontSize: "4.8rem",
        textAlign: "center",
    },
    example: {
        mb: 8,
    },
};

const INTERSECTION_THRESHOLD = [
    0,
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1,
];

const Section = forwardRef(({ name, id, children, ...props }, ref) => {
    return (
        <section id={id} ref={ref} sx={sx.section} {...props}>
            <h2 sx={sx.name}>{name}</h2>
            {children}
        </section>
    );
});

function Examples({ onActiveSectionChange, ...props }) {
    const [hookRef, , hookEntry] = useInView({
        threshold: INTERSECTION_THRESHOLD,
    });

    const [componentRef, , componentEntry] = useInView({
        threshold: INTERSECTION_THRESHOLD,
    });

    const [presetsRef, , presetsEntry] = useInView({
        threshold: INTERSECTION_THRESHOLD,
    });

    useEffect(() => {
        if (
            !hookEntry?.intersectionRatio &&
            !componentEntry?.intersectionRatio &&
            !presetsEntry?.intersectionRatio
        ) {
            return;
        }

        const sections = [
            {
                name: "hook",
                ratio: hookEntry?.intersectionRatio || 0,
            },
            {
                name: "component",
                ratio: componentEntry?.intersectionRatio || 0,
            },
            {
                name: "presets",
                ratio: presetsEntry?.intersectionRatio || 0,
            },
        ];

        onActiveSectionChange(
            sections.reduce((a, b) => (a.ratio > b.ratio ? a : b)).name
        );
    }, [hookEntry, componentEntry, presetsEntry, onActiveSectionChange]);

    return (
        <article sx={sx.examples} {...props}>
            <Section id="hook" ref={hookRef} name="useShowtime() Hook">
                {HOOK_EXAMPLES.map(({ name, desc, code }) => (
                    <Example
                        sx={sx.example}
                        key={name}
                        name={name}
                        desc={desc}
                        code={code}
                    />
                ))}
            </Section>
            <Section
                id="component"
                ref={componentRef}
                name="&lt;Showtime /&gt; Component"
            >
                {COMPONENT_EXAMPLES.map(({ name, desc, code }) => (
                    <Example
                        sx={sx.example}
                        key={name}
                        name={name}
                        desc={desc}
                        code={code}
                    />
                ))}
            </Section>
            <Section id="presets" ref={presetsRef} name="Preset Transitions">
                {PRESET_EXAMPLES.map(({ name, desc, code }) => (
                    <Example
                        sx={sx.example}
                        key={name}
                        name={name}
                        desc={desc}
                        code={code}
                    />
                ))}
            </Section>
        </article>
    );
}

export default Examples;