import React from 'react'

function AlbumList({ user }) {
    const { data, isError, isFetching } = useFetchUsersQuery();
    const [add, results] = useAddAlbumMutation()

    return (
        <div>
            <div className='topArrangement'>
                <div className='topArrangement' >
                    {header}
                </div>
                <div onClick={handleClick}>

                    {expanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
        </div>
    )
}

export default AlbumList