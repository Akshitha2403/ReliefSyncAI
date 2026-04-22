import { useState } from 'react'
import { Bot, Send } from 'lucide-react'

export default function ChatAssistant({ t }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [chatLog, setChatLog] = useState([])

  const sendMessage = (messageText) => {
    const text = messageText?.trim()
    if (!text) {
      return
    }
    setChatLog((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setChatLog((prev) => [...prev, { role: 'bot', text: t.chatbotReply }])
      setTyping(false)
    }, 800)
  }

  return (
    <div className="chat-container">
      <button type="button" className="chat-fab" onClick={() => setOpen((prev) => !prev)}>
        <Bot size={18} /> {t.chatOpen}
      </button>
      {open && (
        <aside className="chat-assistant glass">
          <h4>{t.chatbotTitle}</h4>
          <div className="chat-log">
            {chatLog.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === 'bot' ? 'bot-msg' : 'user-msg'}>
                {message.text}
              </div>
            ))}
            {typing && <div className="bot-msg typing">{t.typing}</div>}
          </div>
          <div className="quick-actions">
            <button type="button" onClick={() => sendMessage(t.quickUrgent)}>{t.quickUrgent}</button>
            <button type="button" onClick={() => sendMessage(t.quickAllocate)}>{t.quickAllocate}</button>
            <button type="button" onClick={() => sendMessage(t.quickRiskZones)}>{t.quickRiskZones}</button>
          </div>
          <div className="chat-entry">
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.chatPlaceholder} />
            <button type="button" onClick={() => sendMessage(input)}><Send size={14} /> {t.send}</button>
          </div>
        </aside>
      )}
    </div>
  )
}

