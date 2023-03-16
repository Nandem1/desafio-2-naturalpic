import { useContext, useState } from 'react'
import MyContext from '../MyContext'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaHeart } from "react-icons/fa";

function Home() {
    const { data, arrayFav, setArrayFav } = useContext(MyContext)

    const toggleFav = (cardId) => {
        console.log(cardId)
        const index = arrayFav.findIndex((favCard) => favCard.id === cardId);
        console.log('index', index);
        if (index == -1) {
            const card = data.find((card) => card.id === cardId);
            card.liked = true
            setArrayFav([...arrayFav, card]);
        } else {
            const newFavoriteCards = [...arrayFav];
            newFavoriteCards.splice(index, 1);
            const card = data.find((card) => card.id === cardId);
            card.liked = false
            setArrayFav(newFavoriteCards);
        }
        console.log(arrayFav)
    }

    return (
        <>
            <h1 className='text-center my-4'>Photos</h1>
            <Row md={4} xs={1} sm={1} className='w-100 m-auto'>
                {
                    data.map((item) => {
                        return (
                            <Col className='mb-3' key={item.id}>
                                <Card className='shadow'>
                                    <Card.Img className='img-size' variant="top" src={item.src.large} />
                                    <Card.Body>
                                        <Card.Text className='d-flex justify-content-between align-items-center'>
                                            <p className='text-break w-75'>{item.alt}</p>
                                            <button className={item.liked ? 'liked' : 'not-liked'} onClick={() => toggleFav(item.id)}><FaHeart className='fs-4 heart-icon' /></button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default Home