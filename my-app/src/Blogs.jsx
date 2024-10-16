import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { auth, db } from './Firebase'
import { onSnapshot, collection, deleteDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([])

  const colleRef = collection(db, 'blog')

  useEffect(() => {
    const getData = async () => {
      onSnapshot(colleRef, (snapshot) => {
        setAllBlogs(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
    }

    getData()
  }, [])

  const deleteData = async (id) => {
    const dataRef = doc(db, 'blog', id) 
    alert('Your data will be deleted forever!')
    try {
      await deleteDoc(dataRef) 
      console.log(`Document with id: ${id} deleted successfully!`)
    } catch (error) {
      console.error('Error deleting document:', error)
    }
  }

  return (
    <>
      <Navbar />

      <div style={{ marginTop: '1rem', textAlign: 'center', minHeight: "100vh" }}>
        {allBlogs.map((data) => (
          <div key={data.id} className="container my-3">
            <div className='d-flex justify-content-center align-item-center flex-column'>
              <div className="author d-flex justify-content-center align-items-center" style={{ width: "60%" }}>
                <img src={data.authorImg} alt="author" style={{ width: "5%", borderRadius: "50%", margin: '1rem' }} />
                <h3>{data.authorName}</h3>
              </div>
              <div className='d-flex justify-content-center align-item-center'>
                <div className="card center bg-secondary" style={{ width: "70%", alignItems: "center", color: 'white' }}>
                  <div className="row ">
                    <div className="col-md-4 d-flex justify-content-center align-item-center">
                      <img src={data.imgUrl} className="img-fluid rounded-start" alt="..." style={{ width: "60%" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <h5 className="card-text">{data.shortDesc}</h5>
                        <h5 className=""><small className="text-warning">Last updated 3 mins ago</small></h5>
                        <Link className='btn btn-primary' to={`/blogs/${data.id}`}>View More</Link>
                        <button onClick={() => deleteData(data.id)} className='btn btn-danger mx-3'>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogs
