import React from 'react'
import '../component/Pok_card.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

function PokCard({ data, state }) {
    return (
        <div className={state ? "pokemon__card" : 'empty'}>
            <div className="head__info">
                <div className="title">
                    <h3>{data.name}</h3>
                    <div className="heart_emoji">
                        <div className="hp_image">
                            <FavoriteIcon className='heart'></FavoriteIcon>
                        </div>
                        <div className="hp_info">
                            <h4>
                                {data.stats[0].base_stat} HP
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={data.sprites.other.dream_world.front_default} alt="" srcset="" width='200px' height='150px' />
                </div>
            </div>
            <div className="body_info">
                <small>Height: {data.height}m</small> <br /> <small>Weight: {data.weight}Kg</small>
            </div>

            <div className="type_info">
                <div className="type">
                    <h4>Type</h4>
                    {/* <br /> */}
                    <small>{data.types[0].type.name}</small>
                </div>
                <div className="exper">
                    <h4>Experience</h4>
                    {/* <br /> */}
                    <small>{data.base_experience}</small>
                </div>
                <div className="candy">
                    <h4>Candy</h4>
                    {/* <br /> */}
                    <small>{data.name}</small>
                </div>
            </div>
        </div>
    )
}

export default PokCard
