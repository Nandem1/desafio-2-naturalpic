import { useContext, useState } from 'react'
import MyContext from '../MyContext'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaRegHeart } from "react-icons/fa";

function Home() {
    const { data, arrayFav, setArrayFav } = useContext(MyContext)

    const toggleFav = (cardId) => {
        const index = arrayFav.findIndex((favCard) => favCard.id == cardId);
        if (index >= 0) {
            const newFavoriteCards = [...arrayFav];
            newFavoriteCards.splice(index, 1);
            setArrayFav(newFavoriteCards);
        } else {
            const card = data.find((card) => card.id == cardId);
            setArrayFav([...arrayFav, card]);
        }
        console.log(arrayFav)
    }

return (
    <>
        <h1 className='text-center my-4'>Fotitos</h1>
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
                                        <button className='btn btn-outline-dark' onClick={() => toggleFav(item.id)}><FaRegHeart className='fs-4 heart-icon' /></button>
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