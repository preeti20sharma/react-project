import { forwardRef } from "react";
// const ForwardReff = (props) => {
//     return (
//         <div>
//             <h2>ForwardRef in react js:</h2>
//             <input type='text' ref={props.ref} />
//         </div>
//     )
// }
// export default ForwardReff;
// ----React 19 method of using forwardRef-------------


// ----React 18 method of using forwardRef-------------
const ForwardReff = (props, ref) => {
    return (
        <div>
            <h2>ForwardRef in react js:</h2>
            <input type='text' ref={ref} />
        </div>
    )
}
export default forwardRef(ForwardReff);

