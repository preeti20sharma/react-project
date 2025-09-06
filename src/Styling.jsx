import React from 'react'

const Styling = () => {
    const cardstyle = {
        margin: "10px",
        boxShadow: "1px 3px 2px 1px #ece6e6ff",
        width: "250px",
        height: "350px",
        textAlign: "center",
        objectFit: "cover"
    }
    return (
        <div>
            <h1 style={{ color: 'red' }}>Inline Style in react js </h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
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

export default Styling
