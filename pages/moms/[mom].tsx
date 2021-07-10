import { useRouter } from 'next/router';

const Mom = () => {
    const router = useRouter();
    const { mom } = router.query;
    
    return <h1>Yomama name: {mom}</h1>;
};

export default Mom;