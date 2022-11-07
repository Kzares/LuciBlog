import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services';

function Categories() {


  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  console.log(categories)
  return (
    <div className="categories" id='categories'>
      <div className="content">
        <h1>Categories</h1>
        <div className="box-container">
          {categories.map((category) => {
            return (
              <Link href={`/category/${category.slug}`} className="box" key={category.name}>
                {category.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories