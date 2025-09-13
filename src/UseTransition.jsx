import React from 'react'
import { useTransition } from 'react'

const UseTransition = () => {
    const [pending, startTransition] = useTransition(false)

    const handleClick = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 5000))
        })
    }
    return (
        <div>
            <h1>useTransition Hook in React js</h1>
            <button disabled={pending} onClick={handleClick}>
                Click
            </button>
            {pending ? (
                <img width={200} height={300} src="https://assets-v2.lottiefiles.com/a/9c7a1586-116f-11ee-8e82-3f391b85dc37/ZJK8b1Wsly.gif" alt="loader" />
            ) : null}
        </div>
    )
}

export default UseTransition
