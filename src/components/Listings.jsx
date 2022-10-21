import React from 'react'
import { ListingCard, NoResult } from './index';


const Listings = ({ data, filterData, click }) => {

    console.log('lllllll', filterData)
    return (
        <div className='px-12 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8 mt-[190px] pb-28'>
            {
                click === true ?
                    (
                        filterData.length > 0 ?
                            filterData.map((item, i) => (
                                <ListingCard key={i} data={item} />
                            )) : <NoResult />

                    ) : (

                        data.map((item, i) => (
                            <ListingCard key={i} data={item} />
                        ))
                    )
            }
        </div>
    )
}

export default Listings