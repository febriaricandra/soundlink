import React from 'react'
import Card from '../../components/Card/Card'
import music from '../../service/data.json';
export default function Index() {
  return (
    <div className=''>
        <h1 className='text-4xl font-bold my-4'>Tracks</h1>
        {music.data.map((track, index) => (
            <Card key={index} id={track.id} title={track.title} cover={track.cover} />
        ))}
    </div>
  )
}
