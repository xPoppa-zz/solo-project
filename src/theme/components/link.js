const Link = {
    // style object for base or default style
    baseStyle: {
        fontFamily: "Inter",
        fontWeight: "100"
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        "maps-link": {
            fontSize: "10px",
            color: "#918E9B",
            textDecoration: "underline"
        }
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: "",
        variant: "",
    },
}

export default Link