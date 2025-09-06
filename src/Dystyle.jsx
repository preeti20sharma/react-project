import React, { useState } from 'react'

const Dystyle = () => {
    const [cardstyle, setcardstyle] = useState({
        margin: "10px",
        boxShadow: "1px 3px 2px 1px #ece6e6ff",
        width: "250px",
        height: "350px",
        textAlign: "center",
        objectFit: "cover"
    }
    );
    const [grid, setgrid] = useState(true);
    const handletheme = (bgcolor, textcolor) => {
        setcardstyle({ ...cardstyle, backgroundColor: bgcolor, color: textcolor })
    }
    return (
        <div>
            <h1 style={{ color: 'red' }}>Dynamic Style and conditional styling in react js </h1>
            <button onClick={() => handletheme('yellow', 'red')}>light Theme</button>
            <button onClick={() => handletheme('black', 'white ')}>Dark Theme</button>
            <button onClick={() => setgrid(!grid)}>Toggle grid</button>
            <div style={{ display: grid ? 'flex' : 'block', flexWrap: grid ? 'wrap' : "" }}>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
                <div style={cardstyle}>
                    <img style={{
                        width: '250px',
                        height: '250px',
                    }} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                    <h3>Preeti sharma</h3>
                    <h3>Software Developer</h3>
                </div>
            </div>
        </div>
    )
}
export default Dystyle
