// let guest = 0
const PureCompo = () => {
    return (
        <div>
            <h1>keeping Components Pure</h1>
            <Cup guest={1} />
            <Cup guest={2} />
        </div>
    )
}
const Cup = ({ guest }) => {
    // guest = guest + 1
    return (
        <>
            <h1>we have {guest} guest and we have to make {guest} cup of tea</h1>
        </>
    )
}

export default PureCompo
