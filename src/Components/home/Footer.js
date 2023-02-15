import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
export default function Footer() {
  return (

    <>
    <h1 style={{marginLeft:'600px'}}>Contact Us</h1>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          
         
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                
              </MDBCol>

              
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            contact number : 8779190379 /9152380358
           
          </p>
          <p>
           email: sg8779190@gmail.com
           
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>linkedin</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.linkedin.com/in/sunil-gupta-bba094223' className='text-white'>
                    connect
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>instagram</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.instagram.com/' className='text-white'>
                  connect
                  </a>
                </li>
             
                
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>linkedin</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.instagram.com/' className='text-white'>
                  connect
                  </a>
                </li>
            
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>instagram</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.instagram.com/' className='text-white'>
                  connect
                  </a>
                </li>
             
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>

      
    </MDBFooter>
  
</>
  )
}
