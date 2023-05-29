import {useState} from 'react'


const Components = () => {
        const [show,setShow] = useState(true);
        
        <>

        return (
            <button type='button' onClick={() => {
                setShow(!show);
            }}>

                Mostrar{show ? '' : '' }

            </button>
        )

    </>
}

export default Components