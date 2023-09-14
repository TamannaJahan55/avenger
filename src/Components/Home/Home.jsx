import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [remaining, setRemaining] = useState([]);
    const [totalCost, setTotalCost] = useState([]);


    useEffect(() =>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data));
    }, [])

    const handleSelectActor  = (actor) =>{
        const isExist = selectedActors.find((item) => item.id == actor.id);

        let cost = actor.salary;

        if(isExist){
            return alert('Already booked');
        }else{
            selectedActors.forEach(item => {
            cost = cost + item.salary;
            });
            const remaining = 20000 - cost;

            if(cost > 20000){
                alert('taka shes')
            }else{
                setRemaining(remaining);
                setTotalCost(cost);
                setSelectedActors([...selectedActors, actor]);
            }
            }
        };
    
    return (
        <div className="container">
             <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map((actor)=>(
                            <div key={actor.id} className="card">
                    <div className='card-img'>
                    <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptas!</small></p>
                    <div className="info">
                        <p>salary: ${actor.salary}</p>
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                    </div>
                        ))
                    }
                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors}
                    remaining={remaining}
                    totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;