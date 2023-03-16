import React, { useEffect } from 'react'
import { useContext } from 'react'
import MyContext from '../MyContext'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';

function Favorites() {
  const { arrayFav } = useContext(MyContext)

  useEffect(() => {
    console.log(arrayFav)
  }, [arrayFav])

  return (
    <>
      <h1 className='text-center my-4'>Favorite Photos</h1>
      <Row md={4} xs={1} sm={1} className='w-100 m-auto'>
        {
          arrayFav.map((item) => {
            return (
              <Col className='mb-3' key={item.id}>
                <Image className='shadow img-fav rounded m-auto w-100' src={item.src.large}/>
              </Col>
            )
          })
        }
      </Row>
    </>
  )
}

export default Favorites