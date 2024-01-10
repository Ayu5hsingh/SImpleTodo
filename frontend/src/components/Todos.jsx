import './components.css'


export function Todos({ prop }) {
    return (
        <div>
            {prop.map(function (t) {
                return (
                    <div class="row">
                    <span class="data">{t.title}</span>
                    <span class="data">{t.description}</span>
                    <input type="checkbox" class="checkbox" />
                    </div>
                )
            })}
        </div>
    )
}


