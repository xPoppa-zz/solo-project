import { extendTheme } from "@chakra-ui/react";
import Text from "./components/text";
import Link from "./components/link";
import Heading from "./components/heading";

const overrides = {
    // styles
    // borders

    components: {
        Text,
        Link,
        Heading
    }
}

export default extendTheme(overrides)