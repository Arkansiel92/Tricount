import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

export default function LogoutScreen() {
    const navigate = useNavigate();
    const {token, updateValue} = useContext(userContext);

    useEffect(() => {
        updateValue('');
        navigate('/');
    }, [navigate, updateValue]);

    return (
        <div>{token}</div>
    )
}