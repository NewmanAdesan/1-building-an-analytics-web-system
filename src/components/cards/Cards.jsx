
import './Cards.css'
import { CardsData } from '../../data'
import Card from '../card/Card'

const Cards = () => {
    
    return (
        <div className="Cards">
            {
                CardsData.map(
                    (card, id) => (
                        <div key={id} className="parentContainer">
                            <Card
                                title={card.title}
                                color={card.color}
                                barValue={card.barValue}
                                value={card.value}
                                png={card.png}
                                series={card.series}
                            />
                        </div>
                    )
                )
            }
        </div>
    )
    
}
export default Cards