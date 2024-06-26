import React, { useEffect } from 'react'



const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            window.botpressWebChat.init({
                botId: '8eb0fa8f-cc66-497a-b035-299ef72df019',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                clientId: '8eb0fa8f-cc66-497a-b035-299ef72df019',
            })
        }
    }, [])

    return <div id="webchat" className='bpw-layout' />
}

export default Chatbot;