import React from 'react'
import { useFormStatus } from 'react-dom';

const UseformStatuss = () => {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000))
        console.log("submit");
    }
    const CustomerForm = () => {
        const { pending } = useFormStatus();
        return (
            <div>
                <input type="text" placeholder='Enter Username' />
                <br /><br />
                <input type="password" placeholder='Enter password' />
                <br /><br />
                <button disabled={pending}>{pending ? "submitting..." : "submit"}</button>
            </div>
        )
    }
    return (
        <div>
            <h1>UseFormStatus Hook in react js</h1>
            <form action={handleSubmit}>
                <CustomerForm />
            </form>
        </div>
    )
}

export default UseformStatuss
