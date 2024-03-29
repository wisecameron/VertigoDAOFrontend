import {useState, useEffect} from 'react';

export default function usePageVisibility()
{
    const [isVisible, setVisible] = useState(true);

    useEffect(() =>
    {
        const handleVisibilityChange = () =>
        {
            setVisible(!document.hidden);
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return() =>
        {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
    }, [])

    return isVisible;
}