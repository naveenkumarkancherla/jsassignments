export function Employee(p){
    return (
        <div class={{border:'2px solid gray', width:300}}>
            <h3>Id:{p.id}</h3>
            <h3>Name:{p.name}</h3>
            <h3>Salary:{p.salary}</h3>
            <h3>Place:{p.place}</h3>
            <br></br>
        </div>
    )
}

