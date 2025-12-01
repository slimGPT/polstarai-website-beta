import AgentDetailLayout from '@/components/AgentDetailLayout';

export default function AgentFinsight() {
  return (
    <AgentDetailLayout
      title="FinSight"
      tagline="AI Financial Analyst for SMEs"
      description="FinSight is a lightweight AI financial analyst designed for small and medium-sized companies. It automatically reads financial statements, analyzes key ratios, and generates clear, actionable insights — helping teams understand performance without needing a finance background. It transforms raw numbers into simple narratives, risk alerts, and strategic recommendations."
      image="/images/agents/Finsight.jpg"
      capabilities={[
        'Automated parsing of balance sheets, income statements & cash-flow reports',
        'Liquidity, profitability, leverage & efficiency ratio computation',
        'Trend & variance detection',
        'Early-warning financial risk flagging',
        'Narrative explanations & actionable recommendations',
        'Export-ready summaries for investors, lenders & management',
      ]}
      forAudience={[
        'CEOs & founders',
        'Finance teams & accountants',
        'Controllers & operations managers',
        'SMEs preparing for investors or audits',
      ]}
      solves={[
        'Confusing or incomplete financial reports',
        'Slow manual ratio and trend analysis',
        'Lack of performance visibility',
        'Missed early warning signals (cash pressure, margins, debt risk)',
        'Difficulty explaining financial health to non-finance teams',
      ]}
      domain="SME finance, operational strategy, financial analysis, cash-flow intelligence"
    />
  );
}
