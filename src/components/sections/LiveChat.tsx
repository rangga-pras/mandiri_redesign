import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Clock, Users } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent' | 'system';
  content: string;
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'initial' | 'queue' | 'chat'>('initial');
  const [queuePosition, setQueuePosition] = useState(3);
  const [estimatedWait, setEstimatedWait] = useState(5);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [hasAddedWelcomeMessage, setHasAddedWelcomeMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate queue progression - only starts after first message
  useEffect(() => {
    if (currentView === 'queue' && queuePosition > 0 && hasStartedChat) {
      const interval = setInterval(() => {
        setQueuePosition(prev => {
          if (prev <= 1) {
            setCurrentView('chat');
            setIsConnected(true);
            // Add system message when connected - only once
            if (!hasAddedWelcomeMessage) {
              setMessages(prevMessages => [...prevMessages, {
                id: Date.now(),
                type: 'system',
                content: 'Anda telah terhubung dengan Customer Service Bank Mandiri. Bagaimana kami dapat membantu Anda hari ini?',
                timestamp: new Date()
              }]);
              setHasAddedWelcomeMessage(true);
            }
            return 0;
          }
          return prev - 1;
        });
        setEstimatedWait(prev => Math.max(1, prev - 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentView, queuePosition, hasStartedChat, hasAddedWelcomeMessage]);

  const handleStartChat = () => {
    setHasStartedChat(true);
    setCurrentView('queue');
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate CS response
    setTimeout(() => {
      const responses = [
        'Terima kasih atas pertanyaan Anda. Saya akan membantu menyelesaikan masalah ini.',
        'Untuk dapat membantu lebih lanjut, mohon berikan nomor rekening atau kartu debit Anda.',
        'Saya memahami kekhawatiran Anda. Kami akan segera memproses permintaan ini.',
        'Apakah ada informasi tambahan yang dapat Anda berikan terkait masalah ini?'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'agent',
        content: randomResponse,
        timestamp: new Date()
      }]);
    }, 1000 + Math.random() * 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const InitialView = () => (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <MessageCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Live Chat Support
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Hubungi customer service kami untuk bantuan langsung
        </p>
        <button
          onClick={handleStartChat}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Mulai Chat
        </button>
      </div>
    </div>
  );

  const QueueView = () => (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Clock className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Menunggu Customer Service
        </h3>
        <p className="text-gray-600 text-sm">
          Anda berada dalam antrian untuk terhubung dengan tim kami
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 w-full mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Posisi dalam antrian
            </span>
          </div>
          <span className="text-xl font-bold text-blue-600">
            {queuePosition}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Estimasi waktu tunggu
            </span>
          </div>
          <span className="text-lg font-semibold text-blue-600">
            {estimatedWait} menit
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((4 - queuePosition) / 4) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const ChatView = () => (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold">Customer Service</h4>
          <p className="text-xs opacity-90">
            {isConnected ? 'Online' : 'Menghubungkan...'}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : message.type === 'system'
                  ? 'bg-gray-100 text-gray-700 border'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Ketik pesan Anda..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoComplete="off"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 flex flex-col">
          {/* Main Header - Always visible */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {currentView === 'initial' && <InitialView />}
            {currentView === 'queue' && <QueueView />}
            {currentView === 'chat' && <ChatView />}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-white" />
            {queuePosition > 0 && hasStartedChat && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">
                  {queuePosition}
                </span>
              </div>
            )}
          </div>
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && currentView === 'chat' && messages.length > 1 && (
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">
            {messages.filter(m => m.type === 'agent').length}
          </span>
        </div>
      )}
    </div>
  );
};

export default LiveChat;