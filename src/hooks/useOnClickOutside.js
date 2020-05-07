import { useEffect } from 'react';

/**
 * @param elementRef
 * @param {Function} handleClickOutside
 */
export default function useOnClickOutside(elementRef, handleClickOutside) {
    useEffect(() => {
        const listener = (e) => {
            if (!handleClickOutside || !elementRef.current || elementRef.current.contains(e.target)) {
                return;
            }

            handleClickOutside();
        };

        window.addEventListener('mousedown', listener);
        window.addEventListener('touchstart', listener);

        return () => {
            window.removeEventListener('mousedown', listener);
            window.removeEventListener('touchstart', listener);
        };
    }, [elementRef, handleClickOutside]);
}
