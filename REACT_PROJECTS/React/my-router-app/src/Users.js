export function User(p){
    return (
        <div class={{border:'2px solid gray', width:300}}>
            <h4>Id:{p.id}</h4>
            <h4>Name:{p.name}</h4>
            <h4>Age:{p.age}</h4>
            <h4>Place:{p.place}</h4>
            <br></br>
        </div>
    )
}

