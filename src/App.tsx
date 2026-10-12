import appHtml from '../misi-tata-surya.html?raw'

export default function App() {
  return (
    <iframe
      title="Misi Tata Surya"
      srcDoc={appHtml}
      style={{ width: '100%', height: '100dvh', border: 0, display: 'block' }}
      allow="fullscreen"
    />
  )
}
