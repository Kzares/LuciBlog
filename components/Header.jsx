import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services';
import {BsMenuUp} from 'react-icons/bs'

function Header() {

    const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  return (

    <div className='header'>

        <div className="logo">
            <Link href="/">BlogDemo</Link>
        </div>

        <div className="links">
            {categories.map((category)=>(
                
                    <span>
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            {category.name}
                        </Link>
                    </span>
                
            ))}
        </div>
        <Link href='#categories'><BsMenuUp className='menu-icon' /></Link>
    </div>
  )
}

export default Header