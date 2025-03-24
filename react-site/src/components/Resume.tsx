import { Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";

const Resume = () => {
    const [loading, setIsLoading] = useState(true);

    return (
        <div id="main" style={{ padding: '0 !important' }}>
            {loading && <Center height="30rem"><Spinner size="xl" /></Center>}
            <iframe onLoad={() => setIsLoading(false)} style={{ width: '100%', height: '100dvh', padding: 0, minHeight: '93rem' }} src="https://docs.google.com/document/d/e/2PACX-1vTIkfyatOqQRMnongI1m0qVzNWPyZ4ZChR1eP6DrTfgduG8ZW9WcUHax1G6BN3oHQ/pub?embedded=true"></iframe>
        </div>
    )
};

export default Resume;