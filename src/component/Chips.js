import React from 'react'
import '../component/Chips.css'

function Chips({ data, state }) {

    return (
        <div className={state ? "name_container" : 'empty'}>
            {
                data.map((t) => (
                    <buttton className="hover_class">
                        {t.pokemon.name}
                    </buttton>

                ))
            }
        </div>
    )
}

export default Chips
