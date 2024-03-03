import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import PhotoList from './PhotoList'
import { GoTrashcan } from 'react-icons/go'
import CircularProgress from '@mui/material/CircularProgress';
import { useRemoveAlbumMutation } from '../store';
function AlbumListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation()
    const handleClick = () => {
        removeAlbum(album)
    }
    const header = (
        <>
            <button onClick={handleClick} style={{ marginRight: '30px', border: 'none', cursor: 'pointer' }}>
                {results.isLoading ? (
                    <CircularProgress style={{ width: '20px', height: '20px' }} />
                ) :
                    <GoTrashcan />
                }
            </button>
            {album.title}
        </>
    )
    return (
        <div >
            <ExpandablePanel header={header}>
                <PhotoList album={album} />
            </ExpandablePanel>
        </div>
    )
}

export default AlbumListItem