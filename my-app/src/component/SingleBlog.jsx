import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { getDoc, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { db } from '../Firebase';



const SinglBolg = () => {
  const { id } = useParams();

  const [singleData, setsingleData] = useState([])
  useEffect(() => {
    const getsingleDoc = async (id) => {

      const ref = doc(db, 'blog', id);
      getDoc(ref).then((doc) => setsingleData(doc.data()))


    }
    getsingleDoc(id)

    console.log(singleData)
  }, [id])



  return (
    <div>
       
      <Navbar />

      <div className="container center author d-flex justify-content-center align-items-center g-5 my-3">
        <div className="img-fluid img-thumbnail" >
          <img src={singleData.imgUrl} alt="" style={{ width: "60%", height: "10%" }} />
        </div>
        <div className="content center">
          <div className="author d-flex justify-content-center align-items-center">
            <img src={singleData.authorImg} alt="" style={{ width: '5%', borderRadius: '50%', margin: '1rem' }} />
            <h3>{singleData.authorName}</h3>
          </div>
          <div style={{ textAlign: 'center' }}>

            <h1>{singleData.title}</h1>
            <h3>{singleData.shortDesc}</h3>
            <p>{singleData.longDesc}</p>
          </div>

        </div>


      </div>
     
    </div>
  )
}

export default SinglBolg