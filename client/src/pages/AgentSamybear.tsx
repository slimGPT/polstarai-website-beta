import AgentDetailLayout from '@/components/AgentDetailLayout';

export default function AgentSamybear() {
  return (
    <AgentDetailLayout
      title="SamyBear"
      tagline="AI Learning Companion for Children"
      description="SamyBear is our most advanced and emotionally intelligent agent. He listens, understands, and responds like a gentle companion, helping children learn, express themselves, and grow with confidence. Built with emotional awareness, natural speech patterns, and a playful personality, SamyBear turns learning into a warm, safe, and engaging experience for every child."
      avatar="/images/agents/Samybearavatar nobackground.png"
      image="/images/agents/Samybear.jpg"
      capabilities={[
        'Emotion-aware listening',
        'Natural, child-friendly speech powered by expressive TTS',
        'Personalized learning interactions',
        'Safe conversation filtering',
        'Adaptive responses shaped by tone and emotional cues',
        'Progress insights for parents and educators',
      ]}
      forAudience={[
        'Children ages 5 to 10',
        'Parents seeking safe, interactive learning tools',
        'Schools and educators introducing AI-driven learning',
        'Speech therapists and emotional development programs',
      ]}
      solves={[
        'Limited personalized attention for kids',
        'Difficulty expressing emotions or needs',
        'Low engagement with traditional learning tools',
        'Lack of safe, supervised digital companions',
      ]}
      domain="Early-childhood learning, emotional development, speech engagement, AI-powered education"
    />
  );
}
