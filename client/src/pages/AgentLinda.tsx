import AgentDetailLayout from '@/components/AgentDetailLayout';

export default function AgentLinda() {
  return (
    <AgentDetailLayout
      title="Linda"
      tagline="AI Revenue Strategist for Hotels"
      description="Linda is an AI-powered revenue intelligence assistant built for independent hotels and hotel groups. She monitors competitor pricing in real time, detects demand shifts across OTAs, and delivers clear, strategic pricing recommendations through a conversational interface. Linda gives revenue teams what they rarely have: clarity, speed, and a genuine competitive advantage."
      image="/images/agents/Linda.png"
      capabilities={[
        'OTA price scraping (Booking, Expedia, major OTAs)',
        'Real-time competitor monitoring',
        'Demand-shift & anomaly detection',
        'Time-series trend analysis & clustering',
        'Revenue strategy suggestions (price moves, opportunities, threats)',
        'Conversational guidance tailored to hotel context',
      ]}
      forAudience={[
        'Revenue managers & general managers',
        'Hotel owners & operations teams',
        'Boutique hotels, resorts & multi-property groups',
      ]}
      solves={[
        'Slow, manual rate shopping',
        'Missed revenue opportunities',
        'Limited visibility into competitor pricing',
        'Lack of real-time pricing recommendations',
      ]}
      domain="Hospitality revenue management, OTA pricing intelligence, demand forecasting, competitive analysis"
    />
  );
}
