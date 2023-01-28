import {useRouteError} from 'react-router-dom';
const Error =()=>{
    //object destr eg
    //const {status, statusText} = useRouteError();
    const err = useRouteError();
    return(
        <div>
        <h1>OOPS!!!</h1>
        <h2>Page Not found</h2>
        <h3>Status : {err.status}</h3>
        <h3>Error Msg : {err.statusText}</h3>
        </div>
    );
};

export default Error;