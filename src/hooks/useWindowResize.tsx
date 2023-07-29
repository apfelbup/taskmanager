import { useLayoutEffect, useState } from "react";


// отслеживает ресайз окна, возвращает его ширину

export function useWindowResize() {
    const [size, setSize] = useState<number>(0);

    const updateSize = () => {
        setSize(window.innerWidth);
    } 

    useLayoutEffect( ()=> {
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, [])

    return size;
}