import { BlogPost } from '../blog-posts';

export const post27: BlogPost = {
  id: '27',
  slug: 'executive-compensation-guide',
  title: 'Executive Compensation: Decoding RSUs, Options, and Golden Handcuffs',
  excerpt: 'At the executive level, Base Salary is just a fraction of the package. Learn how to value RSUs vs Options, negotiate "Double Trigger" acceleration, and avoid the tax traps of Incentive Stock Options (ISOs).',
  seo: {
    title: 'Executive Compensation Guide 2026: RSUs vs Options',
    description: 'How to negotiate executive packages. Understanding vesting schedules, cliffs, and liquidation preferences. Don\'t leave equity on the table.',
    keywords: ['executive compensation', 'RSU negotiation', 'stock options', 'golden handcuffs', 'executive salary negotiation', 'startup equity']
  },
  content: `
    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-emerald-900 font-bold mb-2 mt-0">The Wealth Equation</h3>
      <p class="text-emerald-800 mb-0">
        In 2026, you cannot build truly generational wealth on salary alone. Taxes eat 40% of your paycheck. True wealth is built through Asset Ownership (Equity). If you are negotiating only for a higher base salary, you are playing the wrong game.
      </p>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      When a company offers you a "$200,000" job, that number is a lie. That is just the cash flow. The real offer is in the "Long Term Incentive Plan" (LTIP).
    </p>

    <p class="mb-6">
      But Equity is complicated. It is designed to be complicated. Companies use jargon like "Cliffs," "Vesting," and "Strike Price" to confuse you into accepting less than you deserve. This guide decodes the fine print.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. The 3 Buckets of Executive Pay</h2>
    
    <p class="mb-4">
      An executive offer usually looks like a pyramid.
    </p>

    <div class="space-y-6 mb-8">
        <div class="bg-white p-6 rounded-lg border border-slate-200">
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. Base Salary (The Floor)</h4>
            <p class="text-slate-600">This pays your mortgage. It typically caps out around $300k-$400k even for VP roles at large firms. Negotiating for $20k more here changes your taxes, not your life.</p>
        </div>
        <div class="bg-white p-6 rounded-lg border border-slate-200">
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. Cash Bonus (The Variable)</h4>
            <p class="text-slate-600">Usually 20-50% of Base. Tied to company performance (EBITDA, Revenue). <strong>Warning:</strong> These are rarely guaranteed. Negotiate the "Target" bonus percentage.</p>
        </div>
        <div class="bg-navy-900 text-white p-6 rounded-lg shadow-xl">
            <h4 class="font-bold text-gold-500 text-lg mb-2">3. Equity (The Ceiling)</h4>
            <p class="text-slate-300">This is where the upside lives. In startups, it's Options. In public companies, it's RSUs (Restricted Stock Units). This can range from $100k to $10M+ over 4 years.</p>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. Options vs. RSUs: Know the Difference</h2>
    
    <p class="mb-4">
      If you join a pre-IPO company, you get <strong>Options</strong>. If you join Google, you get <strong>RSUs</strong>. They are not the same.
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-indigo-50 p-6 rounded-xl">
            <h4 class="font-bold text-indigo-900 mb-2">Stock Options (ISOs/NSOs)</h4>
            <p class="text-sm text-slate-700 mb-4">You have the <em>right</em> to buy the stock at a fixed price ("Strike Price") later. You make money if the stock goes UP.</p>
            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Pros:</strong> Huge upside if company 10x's. Tax advantages (QSBS) for ISOs.</li>
                <li><strong>Cons:</strong> If the company valuation drops or stays flat, they are worth $0. You have to pay cash to exercise them.</li>
            </ul>
        </div>
        <div class="bg-emerald-50 p-6 rounded-xl">
            <h4 class="font-bold text-emerald-900 mb-2">RSUs (Restricted Stock Units)</h4>
            <p class="text-sm text-slate-700 mb-4">You are <em>given</em> the stock outright. It is just like cash.</p>
            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Pros:</strong> Always has value (unless stock goes to $0). Liquid (easy to sell as soon as they vest).</li>
                <li><strong>Cons:</strong> Taxed as regular income immediately upon vesting. Less "lottery ticket" upside than early options.</li>
            </ul>
        </div>
    </div>

    <figure class="my-10">
      <img src="/images/blog/executive-compensation-guide-body.png" alt="Bar chart showing vesting schedule of RSUs over 4 years" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">The 'Golden Handcuffs': Notice how the unvested portion keeps you locked in for years.</figcaption>
    </figure>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. The Vesting Schedule (The Trap)</h2>
    
    <p class="mb-4">
      They don't give you the stock on Day 1. You earn it over time. The standard is a <strong>4-Year Vest with a 1-Year Cliff</strong>.
    </p>
    
    <div class="bg-slate-100 p-6 rounded-lg mb-6 border-l-4 border-slate-500">
        <h4 class="font-bold text-navy-900 mb-2">How the "Cliff" Works</h4>
        <p class="text-slate-700">
            If you leave (or get fired) on Day 364, you get <strong>Zero</strong> equity.
            <br>On Day 366, you get 25% of your grant at once.
            <br>The remaining 75% vests monthly or quarterly over the next 3 years.
        </p>
    </div>

    <p class="mb-6">
        <strong>Negotiation Tip:</strong> Ask for specific vesting terms if you are senior. Some companies offer "quarterly vesting" without a cliff for executives, or "back-weighted" vesting (Amazon style: 5%, 15%, 40%, 40%). Know the schedule before you sign.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The "Tax Bomb": AMT and Income</h2>
    
    <div class="bg-red-50 p-6 rounded-lg mb-8">
        <h4 class="font-bold text-red-900 mb-2">Warning: The Exercising Trap</h4>
        <p class="text-sm text-slate-700">
            If you exercise your ISO options, you might trigger the <strong>Alternative Minimum Tax (AMT)</strong>. This means you owe the IRS huge taxes on "paper gains" even though you haven't sold the stock yet. You could go bankrupt paying taxes on stock you can't sell. 
            <br><em>Always consult a CPA before exercising.</em>
        </p>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">5. The "Double Trigger" Acceleration</h2>
    
    <p class="mb-4">
      This is the most critical clause to negotiate in an executive contract.
    </p>
    <p class="mb-6">
      Scenario: You join a startup. You have 100,000 options vesting over 4 years. In Year 1, the startup gets acquired by Amazon. Amazon fires the executive team to replace them with their own people.
    </p>

    <ul class="space-y-4 mb-8">
        <li class="flex items-start">
            <span class="text-red-500 font-bold mr-2">Bad Deal (Standard):</span>
            <p class="text-slate-600">Your unvested options disappear. You leave with 25% of what you were promised. The investors win, you lose.</p>
        </li>
        <li class="flex items-start">
            <span class="text-emerald-500 font-bold mr-2">Good Deal (Double Trigger):</span>
            <p class="text-slate-600">The clause says: If the company is sold (Trigger 1) AND I am fired without cause (Trigger 2), then <strong>100% of my unvested equity accelerates (vests immediately)</strong>.</p>
        </li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">6. Cheat Sheet: What is Negotiable?</h2>

    <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th class="border-b-2 border-slate-300 p-3 text-navy-900">Component</th>
                    <th class="border-b-2 border-slate-300 p-3 text-navy-900">Startup (Series A/B)</th>
                    <th class="border-b-2 border-slate-300 p-3 text-navy-900">Public Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b border-slate-200 p-3 text-slate-700 font-bold">Base Salary</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Not really (Cash is tight)</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Yes (Band based)</td>
                </tr>
                <tr>
                    <td class="border-b border-slate-200 p-3 text-slate-700 font-bold">Equity Amount</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">HIGHLY Negotiable</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Moderately Negotiable</td>
                </tr>
                <tr>
                    <td class="border-b border-slate-200 p-3 text-slate-700 font-bold">Remote Work</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Yes</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Hard (Use Policy)</td>
                </tr>
                <tr>
                    <td class="border-b border-slate-200 p-3 text-slate-700 font-bold">Signing Bonus</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Rare</td>
                    <td class="border-b border-slate-200 p-3 text-slate-600">Yes (Easy Give)</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">7. Case Study: The Startup CTO</h2>
    
    <p class="mb-4">
        <strong>The Candidate:</strong> "Emily," offered a CTO role at a Series B Fintech.
    </p>
    <p class="mb-4">
        <strong>The Offer:</strong> $220k Base + 0.5% Equity ($2M value based on current valuation).
    </p>
    <p class="mb-4">
        <strong>The Problem:</strong> The base was low for a CTO (market was $250k). But the company had limited runway.
    </p>
    <p class="mb-4">
        <strong>The Negotiation Strategy:</strong>
    </p>
    <ul class="list-decimal pl-5 text-slate-600 space-y-2 mb-6">
        <li>We ignored the Base Salary fight. They simply couldn't pay more without angering investors.</li>
        <li>We asked for <strong>0.75% Equity</strong> (a 50% increase in stock). It cost the company no cash today, so they agreed.</li>
        <li>We added "Double Trigger Acceleration" to protect her in an acquisition.</li>
        <li>We added an "Extended Exercise Window" (10 years to buy stock after leaving, instead of the standard 90 days). This is crucial if you leave before an IPO.</li>
    </ul>
    <p class="mb-4">
        <strong>The Result:</strong> The negotiations took 2 weeks. The company exited 3 years later for $400M. Her 0.25% extra equity was worth an additional <strong>$1,000,000</strong>.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Conclusion</h2>
    <p class="mb-6">
      Do not leave the equity section blank. It is the most complex part of the offer, but also the most valuable. Hire a lawyer or a negotiation coach to review the fine print. Remember: You don't get what you deserve; you get what you negotiate.
    </p>
    
    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Don't Sign Yet</h3>
      <p class="mb-8 text-lg text-slate-300">We benchmark your offer against industry standards for your role and Series stage. Know exactly what you are worth before you say yes.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Get an Offer Review
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2026-04-15',
  image: '/images/blog/executive-compensation.png',
  category: 'Negotiation',
  tags: ['Executive Compensation', 'Salary Negotiation', 'Stock Options', 'Equity', 'Startup Advice']
};
