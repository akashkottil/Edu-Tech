import React from 'react'
import './Plans.css'


const Plans = () => {

    

    const pricingData=[
        {
            title:"Regular Member",
            price:"$0",
            color:'#fff',
            duration:"/month",
            features:["Unlimited accesss to the Course",
            "Customer support",
            "personal trainer",
            "Standard options",
            "5 Classes per week"
           ],
        },
        {
            title:"Premium Member",
            price:"$100",
            color:'#6f55f2',
            duration:"/month",
            features:["Unlimited accesss to the Course",
            "Customer support",
            "personal trainer",
            "Standard options",
            "5 Classes per week"
           ],
        },
        {
            title:"Standard Member",
            price:"$10",
            color:'#fff',
            duration:"/month",
            features:["Unlimited accesss to the Course",
                     "Customer support",
                     "personal trainer",
                     "Standard options",
                     "5 Classes per week"
                    ],
                    
        },
    ]
    return (

    <div className='container'>
        <div className="pricing-top">
            <h2 className="section-title">
                Premium Pricing Plan
            </h2>
            <p>Unlock elite tech services eith our Premium Pricing Plan and soar ahead of the competition</p>
        </div>
        <div className="pricing-wrapper">

            
            {
                pricingData.map((pricingItem, index)=>(
                    <div className="pricing-item" key={index}>
                <div className="pricing-card-top" style={{backgroundColor:pricingItem.color}}>
                    <h2 className='section_title'>{pricingItem.title}</h2>
                    <h2 className='pricing-section-title'>{pricingItem.price}
                    <span>{pricingItem.duration}</span>
                    </h2>
                </div>
                <div className="services">
                <ul>
                    {pricingItem.features.map((feature,index)=>(
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                    <button className='register-btn'>Join</button>
                </div>
            </div>
                ))
            }
            

            
        </div>
    </div>
  )
}

export default Plans
