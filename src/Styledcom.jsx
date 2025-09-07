import styled from "styled-components"
const Styledcom = () => {
    // const Heading = styled.h1`
    // color:red;
    // border:1px solid green;
    // border-radius:8px;
    // padding:10px;
    // margin:10px;
    // width:400px`

    // we can use both method above and Below

    const Heading = styled.h1({
        color: 'red',
        border: '1px solid green',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        width: '400px'
    });

    const MyButton = styled.button`
    color:red;
    margin:20px;
    padding:5px;
    width:130px;
    height:40px
    `

    return (
        <div>
            <h1>styled components with React js</h1>
            <Heading>Hello styled component</Heading>
            <Heading>Hello styled component</Heading>
            <Heading>Hello styled component</Heading>
            <MyButton>Login</MyButton>
            <MyButton>SignUp</MyButton>
            <MyButton>Submit</MyButton>
            <MyButton>Upload</MyButton>
        </div>
    )
}

export default Styledcom
