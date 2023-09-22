import React from 'react'
import salad from '../assets/images/salad.png'

function About() {
  return (
    <section id='about'>
        <div className='bg-white'>
            <div className='p-24 grid grid-cols-2'>
                <div className=''>
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi eveniet ex natus quisquam iusto voluptatem autem magnam libero. Ex ipsum doloribus repudiandae dolorem repellendus et recusandae ad, quibusdam dolor nihil eum facilis, quas in assumenda numquam est eius magnam, nostrum fugiat omnis? Adipisci obcaecati ab odit, voluptate quibusdam consequuntur!
                    </p>
                    <div className="flex items-center justify-center">
                        <img src={salad} alt="" className='w-[400px] h-[400px] object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About