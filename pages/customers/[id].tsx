// ** react
import React from 'react'

// ** next.js
import { GetStaticProps, GetStaticPaths } from 'next';

// ** react-icons
import { AiOutlineUser } from 'react-icons/ai'
import { BsTelephoneInbound } from 'react-icons/bs'
import { SiSimilarweb } from 'react-icons/si'
import { MdAssuredWorkload } from 'react-icons/md'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'

// ** type
import Customers from '../../src/types/Customers';


/**
 * This function runs at build time to create 
 * the routes & html page for each customer
 */
export const getStaticPaths: GetStaticPaths = async () => {
  // without destructuring(data) format
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: Customers[] = await response.json()
  const allPaths = data.map(customer => {
    return {
      params: {
        // customer: customer.username,
        // same property name as [id].js but a string version
        id: customer.id.toString(),
      }
    }    
  })
  return {
    // an array of objects representing a route
    paths: allPaths,
    // if path doesn't match one gets 404 error fallback page
    fallback: false
  }
}

/**
 * Extracting the props required in the component
 * context - is an automatic object accepted as 
 * an argument in this function
 */
export const getStaticProps: GetStaticProps = async (context) => {
  // get the id from the context object
  const id = context?.params.id

  // Fetching a single id for every request
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const customer = await response.json();
  return {
    props: {
      customer
    }
  }
}

const CustomerProfile = ({ customer }) => {
  return (
    <div className="card mt-4 text-dark border border-2 border-secondary shadow p-3 mb-5 bg-body rounded">
      <div className="card-body px-4 py-6 fs-5">
        <h5 className="card-title text-decoration-underline fs-2">{customer.name}'s Profile</h5>
        <h6 className="card-subtitle mb-2 fs-3"><AiOutlineUser /> {customer.username}</h6>
        <p className="card-text"><BsTelephoneInbound /> {customer.phone}</p>
        <p className="card-text"><MdAssuredWorkload /> {customer.company.name}</p>
        <a href="#" className="card-link"><SiSimilarweb /> {customer.website}</a>
        <p className="card-text fst-italic text-primary fw-light"><RiDoubleQuotesL /> {customer.company.bs} <RiDoubleQuotesR /></p>
      </div>
    </div>
  )
}

export default CustomerProfile
