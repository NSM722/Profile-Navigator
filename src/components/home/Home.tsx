// ** react
import React from 'react'

// ** next.js
import Link from 'next/link'

// ** react-icons
import { HiOutlineMail } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'
import { ImProfile } from 'react-icons/im'
import { GiClick } from 'react-icons/gi'

// ** types
import Customers from '../../types/Customers'

const HomePage: React.FC<{ customers: Customers[] }> = ({ customers }) => {
  return (
    <>
      <h1 className="fw-bold border-bottom border-dark pt-4">Customers</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 pt-4">
          {
            customers.map(customer => (
              <div 
                className="col-sm-6"
                key={customer.id}
              >
                <div className="card border-secondary text-dark bg-light">
                  <div className="card-body">
                    <h5 className="card-title"><ImProfile /> {customer.name}</h5>
                    <p className="card-text"><HiOutlineMail /> {customer.email}</p>
                    <p className="card-text"><GoLocation /> {customer.address.city}</p>
                    <Link href={`/customers/${customer.id}`} 
                      className="btn btn-primary"
                    ><GiClick /> Visit Profile</Link>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </>
  )
}

export default HomePage