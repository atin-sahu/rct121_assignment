

export const Error = ({error})=>{
    return (
        <div style={{border:"1px solid black", margin:"auto", }}>
            <h1>
                {error.message}
            </h1>
        </div>
    )
}