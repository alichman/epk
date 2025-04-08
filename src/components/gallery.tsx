import React, { Ref } from 'react'
import '../App.css'
import './gallery.css'
import { useHorizontalScroll } from '../useHorizontalScroll'

const videoLinks = [
    'https://www.youtube.com/embed/AD6l7H4aQoc',
    "https://www.youtube.com/embed/U9WiUdQ_v4U",
    "https://www.youtube.com/embed/vcFYGnL9fhU",
]

type MediaFile = {
    src: string;
    type: 'image' | 'video'
}

const importMedia = (): MediaFile[] => {
    // @ts-ignore to ignore TS error for require.context
    const context = require.context('../assets/gallery', false, /\.(png|jpe?g|gif|mp4|webm)$/);

    return context.keys().map((key: string): MediaFile => {
        const src = context(key);
        const ext = key.split('.').pop()?.toLowerCase();
        const isVideo = ext === 'mp4' || ext === 'webm';
        return {
        src,
        type: isVideo ? 'video' : 'image',
        };
    });
};

const mediaFiles = importMedia();

export default function () {
    const upperSF = useHorizontalScroll();

    return <div className='galleryMain' ref={upperSF as Ref<HTMLDivElement>}>
        <h1>Gallery</h1>
        <div className='galleryGrid'>
            {mediaFiles.filter((v) => v.type === 'image').map((file, index) =>
                <img key={index} src={file.src} alt={`media-${index}`} />
            )}   
        </div>
        <div className='galleryGrid'>
        {videoLinks.map((url) => <iframe width="420" height="315" src={url}/>)}
        </div>
    </div>
}