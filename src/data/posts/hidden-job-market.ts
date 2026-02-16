import { BlogPost } from '../blog-posts';

export const post12: BlogPost = {
  id: '12',
  slug: 'hidden-job-market',
  title: 'The Hidden Job Market Unlocked: How to Find Unadvertised Roles',
  excerpt: 'Did you know 80% of jobs are never posted online? Learn the secrets to tapping into the hidden job market, connecting with hiring managers, and creating your own opportunities.',
  seo: {
    title: 'Hidden Job Market Guide | Find Unposted Jobs',
    description: 'Stop relying on job boards. Discover strategies to access the hidden job market through networking, direct outreach, and value-add projects. Get the templates.',
    keywords: ['hidden job market', 'networking', 'job search tips', 'unadvertised jobs', 'career advice', 'cold emailing', 'direct outreach']
  },
  content: `
    <div class="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-gray-900 font-bold mb-2 mt-0">The Iceberg Effect</h3>
      <ul class="list-disc pl-5 text-gray-800 space-y-2 mb-0">
          <li><strong>The Stat:</strong> Why 80% of jobs exist only in the "Hidden Market."</li>
          <li><strong>The "Dream 40" Strategy:</strong> Building a target list instead of browsing boards.</li>
          <li><strong>Information Mining:</strong> How to find Hiring Managers names and emails.</li>
          <li><strong>The "Permissionless Project":</strong> How to prove your value before you are hired.</li>
          <li><strong>Community Hacking:</strong> Slack, Discord, and niche groups where jobs are posted first.</li>
      </ul>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      If your entire job search strategy consists of refreshing LinkedIn, Indeed, and Glassdoor, you are fishing in a pond where 90% of the other fishermen are gathered, fighting over 20% of the fish.
    </p>

    <p class="mb-6">
      The "Hidden Job Market" isn't a conspiracy theory. It’s a simple economic reality. Posting a job online is expensive ($300-$500 per post), time-consuming, and results in a flood of 1,000+ unqualified resumes that clog the system.
    </p>

    <p class="mb-8">
      Smart companies prefer to hire through their network first. They ask employees, "Do you know anyone?" If they fill the role that way, the job ad <strong>never gets written</strong>. If you can enter that network, you skip the line. Here is your key.
    </p>

    <hr class="my-10 border-slate-200" />

    {{AD_1}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. Why Are Jobs Hidden?</h2>
    
    <p class="mb-4">
      Understanding the "Why" helps you navigate the "How."
    </p>
    <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-slate-50 p-6 rounded-lg">
            <h4 class="font-bold text-navy-900 mb-2">Confidentiality</h4>
            <p class="text-sm text-slate-600">They are replacing someone who hasn't been fired yet. Or they are launching a new division they don't want competitors to know about.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-lg">
            <h4 class="font-bold text-navy-900 mb-2">Speed</h4>
            <p class="text-sm text-slate-600">The Hiring Manager needs help <em>now</em>. HR processes take 6 weeks. If you appear in their inbox today, you solve a problem immediately</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-lg">
            <h4 class="font-bold text-navy-900 mb-2">Cost</h4>
            <p class="text-sm text-slate-600">Recruitment agencies charge 20-30% of the first year's salary. By hiring you direct, they save the company $30k.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-lg">
            <h4 class="font-bold text-navy-900 mb-2">Uncertainty</h4>
            <p class="text-sm text-slate-600">The role isn't fully defined yet. They know they need "Marketing help" but aren't sure if it's a Manager or Director. You can shape the role.</p>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. The Target Company List ("The Dream 40")</h2>
    
    <p class="mb-4">
      Stop searching for "Jobs." Start searching for "Companies."
    </p>
    
    <p class="mb-6">
      Create a spreadsheet. List 40 companies you admire. Don't check if they are hiring.
    </p>

    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Tier 1 (10 Companies):</strong> Your absolute dream jobs. High effort outreach.</li>
        <li><strong>Tier 2 (15 Companies):</strong> Great places to work. Medium effort.</li>
        <li><strong>Tier 3 (15 Companies):</strong> Safe bets / Stepping stones. Low effort.</li>
    </ul>

    <figure class="my-10">
      <img src="/images/blog/hidden-market-body.jpg" alt="Person mapping out target companies on a whiteboard" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Proactive targeting beats reactive applying every single time.</figcaption>
    </figure>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. Determining the Decision Maker</h2>
    
    <p class="mb-4">
      Do not email HR. HR's job is to screen people <em>out</em>.
    </p>
    <p class="mb-6">
      You need to find the person who feels the pain. The Hiring Manager.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
        <h4 class="font-bold text-navy-900 mb-3">The Boolean Search Method</h4>
        <p class="text-slate-700 mb-2">Go to LinkedIn. In the search bar, type:</p>
        <code class="block bg-slate-800 text-green-400 p-3 rounded text-sm mb-4">"Head of Marketing" OR "VP of Marketing" AND "Stripe"</code>
        <p class="text-slate-700">Look for people in your location (or remote). These are your targets. They are the ones with the budget.</p>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The Direct Outreach (Cold Email)</h2>
    
    <p class="mb-4">
      You found the VP of Marketing at Stripe. Now what?
    </p>
    <p class="mb-4">
      <strong>Do NOT send this:</strong> "Hi, are you hiring? Here is my resume." (Deleted).
    </p>
    <p class="mb-6">
      <strong>The High-Value Script:</strong>
    </p>
    
    <div class="italic text-slate-600 bg-slate-50 p-8 rounded-lg mb-8 border border-slate-200 font-serif">
      <p class="mb-4">Subject: Question about [Company]'s [Recent Launch/News]</p>
      
      <p class="mb-4">Hi [Name],</p>
      
      <p class="mb-4">I've been following [Company]'s growth and loved your recent launch of [Product]. It’s a smart move to capture the [Specific] market.</p>
      
      <p class="mb-4">I noticed you are expanding into [Region/Vertical]. In my last role at [Competitor/Similar Co], I faced the exact same challenge of compliance hurdles in that region. We solved it by [Brief 1-sentence Solution].</p>
      
      <p class="mb-4">I'd love to share some insights on that if you're open to a brief chat. Even if you aren't hiring, I'm a big fan of what you're building.</p>

      <p>Best,<br>[Your Name]</p>
    </div>
    
    <p class="mb-6">
      <strong>Why it works:</strong> You offered value ("I solved this before"). You showed expertise. You stroked their ego. You didn't ask for a job, you asked for a "chat." Once you are on the call, you are in the hidden market.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">5. The "Permissionless Project"</h2>
    
    <p class="mb-4">
      If cold emailing feels too weak, use the "Show, Don't Tell" method.
    </p>
    
    <p class="mb-6">
      Do the work before you get the job.
    </p>
    
    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Designer:</strong> Redesign their landing page and send it to the Head of Design. "I noticed your checkout flow has friction here. I mocked up a fix."</li>
        <li><strong>Sales:</strong> Find 3 leads for them. "I noticed these 3 companies aren't using your software but should be. Here are the contacts."</li>
        <li><strong>Marketer:</strong> Audit their SEO. "You are ranking on page 2 for this keyword. Here are 3 changes to get to page 1."</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">6. Community Mining</h2>
    
    <p class="mb-4">
       The "Hidden Market" lives in private Slack communities and Discord servers.
    </p>
    <p class="mb-2"><strong>Find your tribe:</strong></p>
    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Product:</strong> Lenny's Newsletter Community, Product School.</li>
        <li><strong>Marketing:</strong> Dave Gerhardt's Exit Five, Demand Curve.</li>
        <li><strong>Devs:</strong> Y Combinator "Work at a Startup," various Discords.</li>
    </ul>
    <p class="mb-6">
        Jobs are posted in the #hiring channels of these groups weeks before they hit LinkedIn.
    </p>

    {{AD_2}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Frequently Asked Questions</h2>

    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. Isn't this annoying for the Hiring Manager?</h4>
            <p class="text-slate-600">Spam is annoying. Value is not. If you send a generic template, yes. If you send a thoughtful solution to a problem they have, they will love you. Hiring Managers are desperate for good talent.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. How do I find their email address?</h4>
            <p class="text-slate-600">Use tools like Hunter.io, Apollo.io, or RocketReach. Most corporate emails follow a pattern: first.last@company.com.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">3. What if I don't hear back?</h4>
            <p class="text-slate-600">Follow up. 50% of meetings are booked on the follow-up. Wait 3-4 days, then reply to your own email: "Hi [Name], bubbling this up in case it got buried. Any thoughts?" After 3 attempts, move on.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">4. Can I use this for entry-level jobs?</h4>
            <p class="text-slate-600">Yes, but the "Permissionless Project" works best here. Since you lack experience, you must show potential/effort.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">5. Is it better to reach out to a Recruiter or a Manager?</h4>
            <p class="text-slate-600">Manager. Always. The Manager feels the pain of the missing employee. The Recruiter is just following a process. Sell to the person with the pain.</p>
        </div>
    </div>

    <hr class="my-12 border-slate-200" />

    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Master the Art of Networking</h3>
      <p class="mb-8 text-lg text-slate-300">Networking doesn't have to feel slimey. We teach you authentic, high-value outreach strategies that build real relationships and uncover exclusive opportunities.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Unlock the Hidden Job Market
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2024-05-30',
  image: '/images/blog/hidden-market.jpg',
  category: 'Job Search Strategy',
  tags: ['Hidden Job Market', 'Networking', 'Job Search', 'Career Hacks', 'Direct Outreach']
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
      title: "Executive Job Search in the Hidden Job Market - The Morita Method",
      author: "Rainer Morita",
      description: "Are you an executive earning $200K+—but stuck in a dead-end search for your next big role?",
      image: "https://m.media-amazon.com/images/I/61N+m0DaDIL._SY425_.jpg",
      link: "https://amzn.to/3ZUCUiF",
      rating: 4.1,
      reviews: 78
    },
    {
      title: "The Job Search Playbook: A Leader's Guide to Accessing the Hidden Job Market",
      author: "Andrew Macaskill",
      description: "If you are an executive or leader who is on the job market, then this is for you.",
      image: "https://m.media-amazon.com/images/I/81Oum2rQMjS._SL1500_.jpg",
      link: "https://amzn.to/4kj4dfY",
      rating: 4.7,
      reviews: 106
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
