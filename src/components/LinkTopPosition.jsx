import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkTopPosition = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant', // 'smooth' apabila ingin tetap ada animasi scroll
        });
    }, [pathname]);
    return null;
};

export default LinkTopPosition;