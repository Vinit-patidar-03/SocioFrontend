import React, { useContext, useEffect } from 'react'
import CreatedPostCard from '../components/CreatedPostCard';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context'

const Home = () => {
    const Navigate = useNavigate('');
    const { data} = useContext(Context);

    useEffect(() => {
        userCheck();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const userCheck = () => {
        if (localStorage.getItem('token1') === null) {
            Navigate('/login');
        }
    }

    return (
        <>{data &&
            <div className=' pt-24'>{
                data.map((elem, index) => {
                    return <CreatedPostCard post={elem} key={index} />
                })
            }
            </div>
        }
        </>
    )
}

export default Home