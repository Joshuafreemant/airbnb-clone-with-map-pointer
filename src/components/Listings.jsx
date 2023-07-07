import React from 'react'
import { ListingCard, NoResult } from './index';


const Listings = ({ data, filterData, click }) => {

    return (
        <div className='px-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-8 mt-[200px] pb-28'>
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