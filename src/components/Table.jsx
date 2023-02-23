import React, { useState } from 'react'
import axios from 'axios'


function Table() {

  const [products, setProducts] = useState([]);

  axios.get("https://northwind.vercel.app/api/products").then(res => setProducts(res.data));



  return (
    <div>
      <table className='w3-table w3-striped w3-border'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {

            products.map(item => {
              if (item.unitsInStock !== 0 ) {

                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td> {item.unitsInStock}</td>
                  {item.unitPrice > 20 ? <td style={{background:'red'}}>{item.unitPrice}</td> : <td>{item.unitPrice}</td> }
                  <td>{item.quantityPerUnit}</td>



                </tr>

              }
              



            })


          }


        </tbody>


      </table>



    </div>
  )
}

export default Table