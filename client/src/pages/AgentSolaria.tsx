import AgentDetailLayout from '@/components/AgentDetailLayout';

export default function AgentSolaria() {
  return (
    <AgentDetailLayout
      title="Solaria"
      tagline="AI Concierge for Hotels"
      description="A multilingual, AI-powered concierge system for hotel guests & staff. Solaria is a full-stack AI concierge deployed at Solaria Hammamet Hotel, designed to automate guest interactions, service requests, and hotel information delivery — across Web, Telegram, and multilingual interfaces (Arabic, French, English). It understands natural language, detects service needs, logs them automatically, and routes them to staff dashboards with real-time monitoring."
      image="/images/agents/Solaria.png"
      capabilities={[
        'Multilingual concierge responses',
        'FAQ + service logic retrieval',
        'Room, dining, activities recommendations',
        'Session-aware guest conversations',
        'Integration with property systems',
      ]}
      forAudience={[
        'Hotel managers & operations teams',
        'Guest-experience directors',
        'Hospitality groups seeking automation',
        'Multi-property chains wanting scalable AI concierge services',
      ]}
      solves={[
        'Slow response to guest requests',
        'Fragmented communication channels',
        'Manual service logging',
        'Language barriers & inconsistent service',
        'High cost of 24/7 concierge staffing',
      ]}
      domain="Hospitality automation, guest experience, service management, multilingual AI"
    />
  );
}
