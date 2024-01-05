export function Todos({prop}) {
    return (
        <div>
            {prop.map(function(t){
                return (
                    <div>
                        <h1> {t.title} </h1>
                        <h2> {t.description}</h2>
                    </div>
                )
            })}
        </div>
    )
}

