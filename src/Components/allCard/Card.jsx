import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from '../../Config';
import './Card.css';

function Card() {

    const [url, setUrl] = useState([])

    useEffect(() => {
        Data()
    }, []);

    let Data = async () => {
        try {
            let output = await axios.get(`${API.URL}/Data/All`)
            setUrl(output.data)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(url);
    return (
        <>
            <section className="main-section">

                {
                    url.map((data, index) => {
                        return (
                            <div key={index} className="cards">
                                <div className="head">
                                    <h5>View Count = {data.count}</h5>
                                </div>
                                <div>
                                    <h5 className='head'>Long to Short URL</h5>
                                    <textarea rows="5" cols="29" className="Long text-center">
                                        {data.origUrl}
                                    </textarea>
                                </div>
                                <div className="bottom">
                                    <span><a href={`${data.short}`} target="_blank" rel="noopener noreferrer">Click Here</a></span>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Card