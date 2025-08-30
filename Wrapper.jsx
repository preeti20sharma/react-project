const Wrapper = ({ children, color = "blue" }) => {
    return (
        <div style={{ color: color, border: "2px solid green", width: "300px", margin: "10px", padding: "5px" }}>
            {children}
        </div>
    )
}
export default Wrapper;