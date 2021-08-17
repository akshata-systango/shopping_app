// import { useRef } from "react";
const CheckOut = (props) => {
const confirmHandler = (event) => {
    event.preventDefault();
}

    return (
        <>
            <form onSubmit={confirmHandler}>
                <div className='userName'>
                    <label htmlFor='uname'>Name:-</label>
                    <input type='text' name='uname' placeholder='Enter name' />
                </div>
                <div className='address'>
                    <label htmlFor='address'>Address:-</label>
                    <input type='text' name='address' placeholder='Enter address' />
                </div>
                <div className='pinCode'>
                    <label htmlFor='pCode'>Pin-Code:-</label>
                    <input type='text' name='pcode' placeholder='Enter Pin-Code' />
                </div>
                <div className='PhoneNumber'>
                    <label htmlFor='pNumber'>Contact:-</label>
                    <input type='text' name='pNumber' placeholder='Enter contact number' />
                </div>
                <div className='city'>
                    <label htmlFor='city'>City:-</label>
                    <input type='text' name='city' placeholder='Enter city' />
                </div>
                <button type="button">Done</button>
                <button onClick={props.onCancel}>Cancel</button>
            </form>
        </>
    )
}

export default CheckOut;