import { Mic } from 'lucide-react'

export default function VoiceInput({ t, value, onChange }) {
  const startVoice = () => {
    const recognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!recognitionApi) {
      onChange('Need urgent food support in Uppal.')
      return
    }
    const recognition = new recognitionApi()
    recognition.lang = 'en-US'
    recognition.onresult = (event) => onChange(event.results[0][0].transcript)
    recognition.start()
  }

  return (
    <section className="card glass">
      <h3>{t.voiceTitle}</h3>
      <div className="voice-wrap">
        <button type="button" className="mic-btn" onClick={startVoice}><Mic size={18} /></button>
        <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={t.voicePlaceholder} />
      </div>
    </section>
  )
}

