import React, { useEffect } from 'react'



const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            window.botpressWebChat.init({
                botId: '15bdb5f2-76c2-430a-81f6-e8cded4393ed',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                clientId: '15bdb5f2-76c2-430a-81f6-e8cded4393ed',
            })
        }
    }, [])

    return <div id="webchat" className='bpw-layout' />
}

export default Chatbot;