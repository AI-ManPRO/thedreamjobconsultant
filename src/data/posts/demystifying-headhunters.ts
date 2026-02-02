import { BlogPost } from '../blog-posts';

export const post24: BlogPost = {
  id: '24',
  slug: 'demystifying-headhunters',
  title: 'Demystifying Headhunters: Retained vs. Contingent Search (And How to Get Found)',
  excerpt: 'Not all recruiters are created equal. Learn the difference between Retained and Contingent search, how the "Hidden Job Market" really works, and how to get on the radar of top executive search firms like Korn Ferry and Spencer Stuart.',
  seo: {
    title: 'Headhunters vs Recruiters: The Executive Search Guide 2026',
    description: 'The ultimate guide to working with executive recruiters. Includes email scripts, fee structure explanations, and the "Black Book" secrets of retained search firms.',
    keywords: ['executive search', 'retained search', 'headhunter secrets', 'working with recruiters', 'hidden job market', 'executive career', 'Korn Ferry', 'Spencer Stuart']
  },
  content: `
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-blue-900 font-bold mb-2 mt-0">The Executive Search Cheat Sheet</h3>
      <ul class="list-disc pl-5 text-blue-800 space-y-2 mb-0">
          <li><strong>The Misconception:</strong> Recruiters work for you. (False. They work for the company).</li>
          <li><strong>The Hierarchy:</strong> Internal HR vs. Contingent Agencies vs. Retained Search.</li>
          <li><strong>The Strategy:</strong> Why applying online is useless for $200k+ roles.</li>
          <li><strong>The Outreach:</strong> How to email a Partner at Korn Ferry without being annoying.</li>
          <li><strong>The Interview:</strong> The specific questions Headhunters ask to vets candidates.</li>
      </ul>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      If you are earning $50,000, you find a job on Indeed. If you are earning $250,000, the job finds you.
    </p>

    <p class="mb-6">
      This is the fundamental shift that happens as you climb the corporate ladder. At the executive level, the process flips. You stop "applying" and start "being courted." But who are the gatekeepers of these high-level roles?
    </p>

    <p class="mb-8">
      They are Headhunters. And if you don't understand how they get paid, you will never understand how to get their attention. The executive search industry is a $20 billion machine designed to exclude 99% of the population. This guide is your key to the other 1%.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. The 3 Tiers of Recruiters: Know Who Is Calling</h2>
    
    <p class="mb-4">
      To navigate the market, you must identify who is calling you. Are they a transactional agent trying to hit a quota, or a strategic advisor holding the keys to the C-Suite? Mixing these up is a fatal career error.
    </p>

    <div class="space-y-6 mb-8">
        <div class="bg-slate-50 p-6 rounded-lg">
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. Internal Talent Acquisition (TA)</h4>
            <p class="text-slate-600"><strong>Who they are:</strong> Employees of the company (e.g., "Recruiter at Google").</p>
            <p class="text-slate-600"><strong>Role:</strong> They fill the bulk of open roles (IC to Director level). They are often overworked, handling 20-30 requisitions at once. They rely heavily on the ATS (Applicant Tracking System) to filter volume.</p>
            <p class="text-slate-600"><strong>Strategy:</strong> Employee Referral is the only fast lane here. They have little incentive to answer cold emails unless you are a perfect "square peg for a square hole" match.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-lg">
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. Contingent Recruiters (Agencies)</h4>
            <p class="text-slate-600"><strong>Who they are:</strong> Third-party firms (e.g., Robert Half, Michael Page, TekSystems).</p>
            <p class="text-slate-600"><strong>The Model:</strong> "Eat what you kill." They only get paid (usually 20-25% of your first-year salary) if <em>their</em> candidate gets hired. If the company hires someone else, the recruiter gets $0.</p>
            <p class="text-slate-600"><strong>Behavior:</strong> Fast, aggressive, sales-oriented. They will ghost you instantly if they find a better candidate because speed is their competitive advantage. They are excellent for mid-senior specialized roles (e.g., "Senior DevOps Engineer" or "Controller").</p>
            <p class="text-emerald-700 italic mt-2">Best for: Mid-senior individual contributors and tactical management roles.</p>
        </div>

        <div class="bg-navy-900 text-white p-6 rounded-lg shadow-xl">
            <h4 class="font-bold text-gold-500 text-lg mb-2">3. Retained Search (The Real "Headhunters")</h4>
            <p class="text-slate-300"><strong>Who they are:</strong> The "SHREK" firms (Spencer Stuart, Heidrick & Struggles, Russell Reynolds, Egon Zehnder, Korn Ferry).</p>
            <p class="text-slate-300"><strong>The Model:</strong> They are paid a <strong>retainer</strong> (an upfront fee, often over $100k) to conduct a thorough search. They are paid whether they fill the role or not (though they always do). They are exclusive—the company does not use other agencies.</p>
            <p class="text-slate-300"><strong>Behavior:</strong> Consultative, slow, relationship-driven. They focus on "fit, culture, and long-term potential." They fill C-Suite, VP, and Board roles.</p>
            <p class="text-gold-400 italic mt-2">Best for: Executive roles ($250k - $5M+ comp packages).</p>
        </div>
    </div>

    <figure class="my-10">
      <img src="/images/blog/demystifying-headhunters-body.png" alt="Recruiter reviewing a resume on a tablet" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">In retained search, the "paper resume" matters less than your reputation and referral network.</figcaption>
    </figure>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. How Retained Search Actually Works (Behind the Scenes)</h2>
    
    <p class="mb-4">
      When a Board of Directors needs a new CEO or VP of Sales, they don't post a job ad on LinkedIn. That would signal weakness to the market ("Why did their VP leave? Is the ship sinking?"). Instead, they hire a Retained Search firm to conduct a confidential search.
    </p>

    <h3 class="text-xl font-bold text-navy-800 mt-6 mb-3">The 90-Day Lifecycle of a Search</h3>
    <ul class="list-decimal pl-5 text-slate-600 space-y-4 mb-8">
        <li><strong>Days 1-14: The Briefing.</strong> The Partners meet with the Board to define the "Ideal Candidate Profile." They draft a confidential "Position Specification" (a 10-page document you won't see until you are vetted).</li>
        <li><strong>Days 15-30: Market Mapping.</strong> The research team lists every competitor company. They map out the org charts of those companies to identify who sits in the target seat. (e.g., "Find us every CMO at SaaS companies with $50M-$100M ARR").</li>
        <li><strong>Days 30-45: The Longlist.</strong> They reach out to 20-30 potential candidates. This is the "screening" phase.</li>
        <li><strong>Days 45-60: The Shortlist.</strong> They present 3-5 candidates to the client. These candidates go through rigorous interviews.</li>
        <li><strong>Days 60-90: The Offer & Close.</strong> Reference checks, compensation negotiation, and onboarding.</li>
    </ul>
    
    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
        <strong class="text-yellow-900 block mb-2">Crucial Insight:</strong>
        <p class="text-yellow-800">
            Retained recruiters are deeply risk-averse. Their reputation depends on your success. If they place a CEO who fails in 6 months, their firm loses the client forever. This is why they vet you harder than the actual company will. They check your backchannel references before they even present you.
        </p>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. Getting on the Radar (The LinkedIn Algorithm for Executives)</h2>
    
    <p class="mb-4">
      Since they find <em>you</em>, your job is to be findable. Retained recruiters use <strong>LinkedIn Recruiter</strong> (the expensive enterprise tool) to build their longlists. If your profile is not optimized for their search filters, you are invisible.
    </p>

    <h3 class="text-xl font-bold text-navy-800 mt-6 mb-3">Optimization Checklist for Executives:</h3>
    <div class="bg-white border border-slate-200 p-6 rounded-lg shadow-sm mb-6">
        <ul class="list-disc pl-5 text-slate-600 space-y-4">
            <li>
                <strong>Title Standardization:</strong> 
                <p class="text-sm mt-1">If your internal title is "Head of People Ops," but the market calls it "CHRO," change your headline to: <strong>Chief Human Resources Officer (CHRO) | Head of People Ops</strong>. Recruiters search for standard titles.</p>
            </li>
            <li>
                <strong>The "Open to Work" Setting:</strong> 
                <p class="text-sm mt-1">Do not use the green banner frame unless you are unemployed. Instead, use the <strong>hidden setting</strong> visible only to recruiters ("Recruiter Only"). It puts a "Green Dot" next to your name in their dashboard, signaling you are "poachable."</p>
            </li>
            <li>
                <strong>Keyword Density (Metrics):</strong> 
                <p class="text-sm mt-1">For executives, the keywords are not just skills (like "Agile"), but context. P&L size, Headcount, and Industry. <br><em>Example: "Managing $50M P&L" or "Leading 200+ Person Global Team."</em></p>
            </li>
            <li>
                <strong>Board Memberships:</strong> 
                <p class="text-sm mt-1">If you sit on a non-profit board, listing it signals "Executive Maturity." It shows you understand governance.</p>
            </li>
        </ul>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The Outreach Script (How to Email a Partner)</h2>
    
    <p class="mb-4">
      Yes, you can reach out to them. But the "Spray and Pray" method will get you blacklisted. You must be surgical.
    </p>
    <p class="mb-6">
      <strong>Rule #1:</strong> Do not say "Here is my resume, please find me a job." They do not work for you.
      <br><strong>Rule #2:</strong> Do not email the general inbox (info@kornferry.com). You must email the specific Partner who leads your practice area (e.g., "North American FinTech Practice Leader").
    </p>

    <div class="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow-sm mb-8">
        <h4 class="font-bold text-navy-900 mb-4">The "Value-Add" Introduction Template</h4>
        <p class="font-mono text-sm text-slate-600 bg-white p-4 rounded border border-slate-200 mb-4">
            <strong>Subject:</strong> Introductions / Trend in [Industry] Executive Hiring<br><br>
            Hi [Partner Name],<br><br>
            I've been following [Firm Name]'s work in the FinTech space, specifically your recent placement of the new CFO at [Company]. It was a great move for them.<br><br>
            I am currently the VP of Finance at [Current Company], overseeing our path to IPO ($100M ARR). I'm not actively looking to leave, but I wanted to introduce myself as a resource in the Bay Area market.<br><br>
            If you ever need a confidential perspective on market trends, compensation benchmarks, or backchannel references for your searches, I'm happy to be a sounding board.<br><br>
            I've attached my bio for your files in case my background aligns with future confidential mandates.<br><br>
            Best,<br>
            [Your Name]
        </p>
        <p class="text-sm text-indigo-800 font-bold">Why this works:</p>
        <ul class="list-disc pl-5 text-sm text-slate-700 mt-2">
            <li>It strokes their ego (mentions a recent placement).</li>
            <li>It signals high value ("not actively looking").</li>
            <li>It offers help ("sounding board").</li>
        </ul>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">5. The Interview: How It Differs</h2>
    
    <p class="mb-4">
      Interviewing with a Retained Headhunter is not like interviewing with HR. They won't ask "What is your greatest weakness?"
    </p>
    <p class="mb-4">
      They will ask questions designed to test your <strong>Executive Presence</strong> and <strong>Strategic Vision</strong>.
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h4 class="font-bold text-navy-900 mb-3">The "Context" Question</h4>
            <p class="text-sm text-slate-700 italic">"Tell me about the organizational structure you inherited versus the one you left behind."</p>
            <p class="text-xs text-slate-500 mt-2"><strong>What they want:</strong> Did you just keep the seat warm, or did you restructure the team to align with strategy?</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h4 class="font-bold text-navy-900 mb-3">The "Failure" Question</h4>
            <p class="text-sm text-slate-700 italic">"Walk me through a strategic initiative that failed. How did you handle the Board?"</p>
            <p class="text-xs text-slate-500 mt-2"><strong>What they want:</strong> Accountability and grace under pressure. Do not blame your team.</p>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">6. Case Study: From "Ghosted" to "Placed"</h2>
    
    <p class="mb-4">
        <strong>The Candidate:</strong> "Mark," a Senior Director of Operations in Manufacturing.
    </p>
    <p class="mb-4">
        <strong>The Problem:</strong> Mark was purely reactive. He Applied to "VP of Ops" roles on LinkedIn and got rejected by the ATS. He sent his resume to general inboxes at Spencer Stuart and heard silence. He felt "too old" and "overlooked."
    </p>
    <p class="mb-4">
        <strong>The Pivot Strategy:</strong>
    </p>
    <ul class="list-decimal pl-5 text-slate-600 space-y-3 mb-6">
        <li><strong>Niche Targeting:</strong> We identified the 5 specific Partners at top firms who handled "Industrial Operations" practices. We stopped emailing generalists.</li>
        <li><strong>Brand Overhaul:</strong> Mark updated his LinkedIn headline from "Director of Ops" to "Manufacturing Turnaround Leader | Lean Six Sigma Master Black Belt".</li>
        <li><strong>The "Give" Strategy:</strong> Mark reached out to one Partner offering introductions to <em>other</em> candidates. "I know you are looking for a Plant Manager in Ohio. I can't take that role, but I have a former direct report who is perfect."</li>
    </ul>
    <p class="mb-4">
        <strong>The Result:</strong> The Partner was grateful for the referral. Three months later, when a confidential "$300k VP of Supply Chain" role opened up, that Partner called Mark first. Mark answered the phone, skipped the line, and landed the role without ever "applying."
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">7. Red Flags and Etiquette (How to Blow It)</h2>
    
    <p class="mb-4">
        Executive search is a small world. If you burn a bridge with one firm, word travels.
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-red-50 p-6 rounded-xl">
            <h4 class="font-bold text-red-900 mb-2">The "Do Not" List</h4>
            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Stalking:</strong> Do not comment on their kids' private Instagram photos. Keep it to LinkedIn.</li>
                <li><strong>Harassment:</strong> Do not follow up every week. Once a quarter is appropriate.</li>
                <li><strong>Lying about Comp:</strong> Reluctant disclosure is fine, but lying is fatal. Retained firms will verify your W2s or offer letters eventually.</li>
                <li><strong>Being Rude to Junior Staff:</strong> The "Researcher" or "Associate" is the gatekeeper. If you are arrogant to them, the Partner will never see your resume.</li>
            </ul>
        </div>
        <div class="bg-emerald-50 p-6 rounded-xl">
            <h4 class="font-bold text-emerald-900 mb-2">The "Do" List</h4>
            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Be Responsive:</strong> If they call, answer. Even if you aren't interested. Speed matters to them.</li>
                <li><strong>Help Them Out:</strong> If a role isn't for you, suggest names. They remember who helped them.</li>
                <li><strong>Update Them:</strong> When you get promoted, send a quick update note. "Just wanted to let you know I've taken the SVP seat at [Company]."</li>
            </ul>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Conclusion: Play the Long Game</h2>
    <p class="mb-6">
      Headhunters are not career coaches. They are brokers for high-stakes talent. They are not paid to help you find a job; they are paid to solve a problem for their client.
    </p>
    <p class="mb-6">
      To win with headhunters, you must stop acting like a needy job seeker and start acting like a peer. Treat the relationship with professionalism, respect their time, and make it easy for them to sell you. Your next role likely won't come from a job board—it will come from a 15-minute conversation you planted the seeds for today.
    </p>
    
    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Are You "Headhunter Ready"?</h3>
      <p class="mb-8 text-lg text-slate-300">Your LinkedIn profile needs to speak the language of Retained Search. We audit your bio against the top 1% of executive profiles and give you a roadmap to visibility.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Book an Executive Audit
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2025-09-13',
  image: '/images/blog/demystifying-headhunters.png',
  category: 'Recruiting Strategies',
  tags: ['Executive Search', 'Recruiting', 'Networking', 'Career Strategy', 'Hidden Job Market']
,
  
  sidebarAds: {
    ad1: {
      type: 'placeholder',
      title: 'Affiliate Ad Space',
      description: 'Reserved for future partnerships'
    },
    ad2: {
      type: 'placeholder',
      title: 'Affiliate Ad Space',
      description: 'Reserved for future partnerships'
    },
    // --------------------------------------------------------
    // COPY & PASTE these templates to replace the placeholders above
    // --------------------------------------------------------
    
    // TEMPLATE: Custom Ad
    /*
    ad1: {
      type: 'custom',
      title: 'Service Name',
      description: 'Short description of the service.',
      image: '/images/your-image.jpg',
      link: 'https://your-link.com',
      ctaText: 'Learn More',
      bgColor: '#0f172a'
    },
    */

    // TEMPLATE: Amazon Book Ad
    /*
    ad2: {
      type: 'amazon',
      title: 'Book Title',
      author: 'Author Name',
      description: 'Book description...',
      image: 'https://m.media-amazon.com/images/...',
      link: 'https://amzn.to/...',
      rating: 5.0,
      reviews: 100
    },
    */
  },
  affiliateBooks: [
    {
      title: "Book Title 1 Placeholder",
      author: "Author Name",
      description: "Description...",
      image: "https://placehold.co/150x220/e2e8f0/475569?text=Book+Cover",
      link: "https://amazon.com",
      rating: 5.0,
      reviews: 0
    },
    {
      title: "Book Title 2 Placeholder",
      author: "Author Name",
      description: "Description...",
      image: "https://placehold.co/150x220/e2e8f0/475569?text=Book+Cover",
      link: "https://amazon.com",
      rating: 5.0,
      reviews: 0
    }
  ]
,
  smallAds: [
    {
      type: 'placeholder',
      title: 'Amazon Small Ad 1',
      image: '',
      url: '',
      price: '',
      rating: 0,
      reviews: 0
    },
    {
      type: 'placeholder',
      title: 'Amazon Small Ad 2',
      image: '',
      url: '',
      price: '',
      rating: 0,
      reviews: 0
    },
    {
      type: 'placeholder',
      title: 'Amazon Small Ad 3',
      image: '',
      url: '',
      price: '',
      rating: 0,
      reviews: 0
    }
  ]
};
