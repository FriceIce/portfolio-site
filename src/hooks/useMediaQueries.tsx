import { useEffect, useState } from "react";

function useMediaQueries(screenWidth: 640 | 768 | 1024 | 1280 | 1536) {
    const [screen, setScreen] = useState<boolean>(false); 
    
    useEffect(() => {
        const media = matchMedia(`(min-width: ${screenWidth}px)`); 

        function handleChange () {
            setScreen(media.matches)
            console.log(media.matches)
        }

        // Call the function to update the state
        handleChange()

        media.addEventListener('change', handleChange)
        return () => media.removeEventListener('change', handleChange)
    }, [screenWidth])

    return screen; 
}

export default useMediaQueries
