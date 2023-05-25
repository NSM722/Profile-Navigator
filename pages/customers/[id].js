import React from 'react'


/**
 * This function runs at build time to create 
 * the routes & html page for each customer
 */

export const getStaticPaths = async () => {
  // without destructuring(data) format
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  // console.log(data)
  const allPaths = data.map(customer => {
    return {
      params: {
        // customer: customer.username,
        // same property name as [id].js but a string version
        id: customer.id.toString(),
      }
    }    
  })
  // console.log(allPaths)

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
export const getStaticProps = async (context) => {
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
    <section className="container mt-4 border border-dark p-4 rounded-3">
      <h3 className="display-3 text-decoration-underline">{customer.name} Profile</h3>
      <article className="display-6">
        <p>{customer.username}</p>
        <p>{customer.phone}</p>
        <p>{customer.website}</p>
        <p>{customer.company.name}</p>
        <p>{customer.company.bs}</p>
      </article>
    </section>
  )
}

export default CustomerProfile
