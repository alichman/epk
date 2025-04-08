import '../App.css'
import './music.css'

const audioLinks =  [
    'https://www.youtube.com/embed/9iMgZZf25eY',
    'https://www.youtube.com/embed/EUoVZWAkPxM',
    'https://www.youtube.com/embed/TVPk7zP4p0Q',
    'https://www.youtube.com/embed/215odMInjPM',
    'https://www.youtube.com/embed/EUoVZWAkPxM',
]

const SoundCloudEmbed = () => {
    return (
      <div>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2063804724&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/whateveryousayband"
            title="Whatever You Say"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Whatever You Say
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/whateveryousayband/outrun-the-monotony"
            title="Outrun the Monotony"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Outrun the Monotony
          </a>
        </div>
      </div>
    );
  }

export default function () {
    return <div className='musicMain'>
        <h1>Discography</h1>
        <div className='ytGrid'>
        {audioLinks.map((url) => <iframe width="420" height="315" src={url}/>)}
        <SoundCloudEmbed/>
        </div>
    </div>
}