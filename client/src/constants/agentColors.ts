export const agentColors = {
  hospitality: ['#FF8C73', '#FF4F5E', '#FFB8A8'], // coral / warm red
  finance: ['#4B82F2', '#6AD1F8', '#A9C9FF'], // cyan / deep blue
  pricing: ['#3B82F6', '#06B6D4', '#60A5FA'], // Polstar blue / cyan
  education: ['#87CEEB', '#B0E0E6', '#E0F7FA'], // baby blue / mint
  // Legacy mappings
  solaria: ['#FF8C73', '#FF4F5E', '#FFB8A8'], // warm coral
  finsight: ['#4B82F2', '#6AD1F8', '#A9C9FF'], // financial blue
  samybear: ['#87CEEB', '#B0E0E6', '#E0F7FA'], // baby blue / mint
  linda: ['#3B82F6', '#06B6D4', '#60A5FA'], // Polstar blue / cyan
} as const;

export type AgentName = keyof typeof agentColors;

