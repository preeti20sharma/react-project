// const User = ({ name, age, email }) => {
const User = ({ user }) => {


    return (
        <div>
            <hr />
            <h2>Name:{user.name}</h2>
            {/* <h2>Name:{name}</h2>
            <h2>Age:{props.age}</h2>
            <h2>Email:{props.email}</h2> */}
        </div>
    )
}
export default User;