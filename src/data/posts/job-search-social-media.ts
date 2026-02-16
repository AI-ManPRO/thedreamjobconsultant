import { BlogPost } from '../blog-posts';

export const post7: BlogPost = {
  id: '7',
  slug: 'job-search-social-media',
  title: 'Social Media for Job Seekers: Beyond LinkedIn',
  excerpt: 'Recruiters are Googling you. What will they find? Learn how to leverage Twitter, Instagram, and even TikTok to build a personal brand that attracts offers.',
  seo: {
    title: 'Social Media Job Search Strategy | LinkedIn, Twitter & More',
    description: 'Comprehensive guide to using social media for job hunting. Learn how to optimize your digital footprint, network on Twitter, and build a personal brand that recruiters love.',
    keywords: ['job search social media', 'personal branding', 'digital footprint', 'networking', 'LinkedIn strategy']
  },
  content: `
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-blue-900 font-bold mb-2 mt-0">Key Takeaways</h3>
      <ul class="list-disc pl-5 text-blue-800 space-y-2 mb-0">
          <li><strong>The "Shadow Check":</strong> 92% of recruiters verify candidates on social media. We show you how to audit your own presence.</li>
          <li><strong>Platform Strategy:</strong> Why GitHub is for developers, Behance for designers, and Twitter for thought leadership.</li>
          <li><strong>The "Warm Outreach" Script:</strong> How to DM strangers without being spammy.</li>
          <li><strong>Content Creation:</strong> You don't need to be an influencer, you just need to be "active." 5 easy post ideas.</li>
          <li><strong>The "Digital Dirt":</strong> How to scrub red flags from your past.</li>
      </ul>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      Your resume tells them what you <em>did</em>. Your social media tells them who you <em>are</em>.
    </p>

    <p class="mb-6">
      In 2026, the "Hidden Job Market" has moved online. Recruiters aren't just posting jobs on Indeed; they are scouring Twitter for developers sharing code, looking at Instagram for marketers with an aesthetic eye, and scrolling LinkedIn for thought leaders.
    </p>

    <p class="mb-8">
      If you are invisible online, you are invisible to 50% of the opportunities. But if you are visible in the <em>wrong</em> way, you are disqualified before you even interview.
    </p>

    <p class="mb-8">
      This guide will teach you how to turn your social media presence from a liability into your greatest asset.
    </p>

    <hr class="my-10 border-slate-200" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Step 1: The Digital Audit (The "Google Test")</h2>

    <p class="mb-4">
      Before you build, you must clean. Open an Incognito window in your browser right now and search for:
    </p>
    <ul class="list-disc pl-5 mb-6 space-y-1">
        <li>"Your Name"</li>
        <li>"Your Name" + "City"</li>
        <li>"Your Name" + "Company"</li>
    </ul>

    <p class="mb-4">
      What comes up?
    </p>

    <div class="bg-red-50 p-6 rounded-lg mb-6">
        <h4 class="text-red-900 font-bold mb-2">Red Flags to Scrub Immediately:</h4>
        <ul class="list-disc pl-5 space-y-2 text-red-800">
            <li><strong>Political Rants:</strong> Regardless of your stance, extreme polarization scares employers who value team cohesion.</li>
            <li><strong>Unprofessional Photos:</strong> That photo of you doing a keg stand in college? Delete it. Or set your Facebook to "Private."</li>
            <li><strong>Complaining:</strong> Tweets saying "I hate Mondays" or "My boss is an idiot."</li>
        </ul>
    </div>

    <p class="mb-6">
      <strong>Pro Tip:</strong> Use tools like BrandYourself or simply manually review your last 2 years of posts. If in doubt, delete.
    </p>

    {{AD_1}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Step 2: Choosing Your Battlefield</h2>

    <p class="mb-4">
      You do not need to be everywhere. You need to be where <em>your</em> industry hangs out.
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-navy-900 mb-2 flex items-center">
                <span class="text-blue-500 mr-2 text-xl">in</span> LinkedIn (The HQ)
            </h4>
            <p class="text-sm text-slate-600 mb-2"><strong>Required for:</strong> Everyone.</p>
            <p class="text-sm text-slate-600">This is your digital resume. It must be polished, professional, and up-to-date. Ensure your headline is a hook, not just a job title.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-navy-900 mb-2 flex items-center">
                <span class="text-slate-900 mr-2 text-xl">X</span> X / Twitter (The Town Square)
            </h4>
            <p class="text-sm text-slate-600 mb-2"><strong>Best for:</strong> Tech, Crypto, Media, Journalism, VCs.</p>
            <p class="text-sm text-slate-600">Great for "building in public," sharing opinions, and engaging directly with founders/CEOs who respond to tweets but ignore emails.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-navy-900 mb-2 flex items-center">
                <span class="text-pink-500 mr-2 text-xl">IG</span> Instagram / TikTok (The Portfolio)
            </h4>
            <p class="text-sm text-slate-600 mb-2"><strong>Best for:</strong> Creatives, Designers, Marketing, Branding.</p>
            <p class="text-sm text-slate-600">Your feed is your portfolio. Show your work. Create "Day in the Life" reels to show your personality.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-navy-900 mb-2 flex items-center">
                <span class="text-slate-800 mr-2 text-xl">Gh</span> GitHub / StackOverflow (The Code)
            </h4>
            <p class="text-sm text-slate-600 mb-2"><strong>Best for:</strong> Developers, Data Scientists.</p>
            <p class="text-sm text-slate-600">CTOs look at your commit history. Consistent "green squares" show passion and discipline.</p>
        </div>
    </div>

    <figure class="my-10">
      <img src="/images/blog/social-media-body.jpg" alt="Professional managing LinkedIn profile on smartphone" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Don't just scroll. Engage. Commenting is 10x more effective than liking.</figcaption>
    </figure>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Step 3: The "Warm Outreach" Strategy</h2>

    <p class="mb-4">
      "Networking" feels slimy because people do it wrong. They ask for things immediately.
    </p>
    <p class="mb-4">
      <em>"Hi, I see you work at Google. Can you refer me?"</em> (Delete).
    </p>

    <p class="mb-6">
      <strong>The Correct Approach: Value First.</strong>
    </p>
    <p class="mb-6">
      You want to build a relationship before you ask for a favor. Here is a 3-step script that works on LinkedIn or Twitter DMs.
    </p>

    <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
        <h4 class="font-bold text-navy-900 mb-4">The "Insight" DM Script</h4>
        <p class="text-sm text-slate-500 mb-2 uppercase tracking-wide font-bold">Step 1: The Hook</p>
        <p class="italic text-slate-700 mb-4">"Hi [Name], I've been following your posts about [Topic X] for a while—specifically your point about [Specific Detail] last week. It completely changed how I look at [The Industry]."</p>
        
        <p class="text-sm text-slate-500 mb-2 uppercase tracking-wide font-bold">Step 2: The Soft Ask (Curiosity)</p>
        <p class="italic text-slate-700 mb-4">"I'm currently transitioning into [Role] and I'm trying to decide between focusing on [Skill A] or [Skill B]. Given your experience at [Company], I'd value your take on which is more critical right now?"</p>
        
        <p class="text-sm text-slate-500 mb-2 uppercase tracking-wide font-bold">Step 3: No Pressure Close</p>
        <p class="italic text-slate-700">"No need to reply if you're swamped, but thanks for the content you put out!"</p>
    </div>

    <p class="mb-6">
      <strong>Why this works:</strong> It strokes their ego (you read their content), hits a specific topic (not generic), and asks for <em>advice</em>, not a <em>job</em>. People love giving advice. Once they reply, <em>then</em> you are in a conversation.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Step 4: Content Creation for Non-Influencers</h2>

    <p class="mb-4">
      You don't need to post viral videos. You just need to show you are alive and thinking.
    </p>

    <p class="mb-6">
      <strong>The 90-9-1 Rule:</strong> 90% of people lurk. 9% comment. 1% create. If you join the 1%, you instantly stand out.
    </p>

    <h3 class="text-xl font-bold text-navy-800 mt-6 mb-3">5 Easy Content Ideas (The "Curator" Strategy)</h3>
    <ol class="list-decimal pl-5 space-y-4 mb-8">
        <li><strong>The "Learning Journey":</strong> "I just started learning Python this week. Integrating API calls was harder than I thought. Here is a 2-minute video of what I built." (Shows growth mindset).</li>
        <li><strong>The "Article Summary":</strong> "I just read this report on FinTech trends. Here are my top 3 takeaways." (Shows you stay current).</li>
        <li><strong>The "Tool Recommendation":</strong> "I finally switched from Trello to Notion for project management. Here is how I set up my board." (Shows process thinking).</li>
        <li><strong>The "Event Specific":</strong> Take a selfie at a conference or webinar. Tag the speakers. "Great session on AI ethics by [Name]." (Shows you show up).</li>
        <li><strong>The "Question":</strong> "Fellow PMs, how do you handle feature requests from sales that don't fit the roadmap?" (Invites engagement).</li>
    </ol>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Step 5: Engaging with Companies</h2>

    <p class="mb-4">
      Don't just follow the company page. Follow the <em>people</em>.
    </p>
    <p class="mb-6">
      <strong>The "Surround Sound" Effect:</strong><br>
      If you are applying to Acme Corp, follow their CEO, their CMO, and 3 people in the department you want to join. Like their posts. Comment intelligently. When your resume finally lands on their desk, your name will trigger a subconscious "I know this person" feeling. Familiarity breeds trust.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Advanced Strategy: Time Management</h2>
    <p class="mb-4">
        "I don't have time for social media." This is the common excuse.
    </p>
    <p class="mb-6">
        You need a system. Here is the 15-Minute Morning Routine:
    </p>
    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Min 1-5:</strong> Accept/Decline connection requests.</li>
        <li><strong>Min 5-10:</strong> Scroll your feed, find 3 relevant posts, and leave a thoughtful comment (not just "Great post!").</li>
        <li><strong>Min 10-15:</strong> Send one DM (outreach or follow-up).</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Dealing with Negativity</h2>
    <p class="mb-4">
        If you post, you might get negative comments.
    </p>
    <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Ignore Trolls:</strong> Do not engage. Delete the comment and block.</li>
        <li><strong>Valid Criticism:</strong> If someone corrects a fact, thank them graciously. "Great catch, thanks for the correction." This shows humility.</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">30-Day Social Media Challenge</h2>
    <div class="bg-indigo-50 p-6 rounded-lg mb-8">
        <ul class="space-y-2 text-indigo-900">
            <li><strong>Week 1:</strong> Update Profile (Photo, Headline, About). Connect with 20 alumni.</li>
            <li><strong>Week 2:</strong> Comment on 2 posts per day. Follow 5 target companies.</li>
            <li><strong>Week 3:</strong> Post 2 times (One text post, one photo). Send 5 "Lookwarm" DMs.</li>
            <li><strong>Week 4:</strong> Write one "Deep Dive" article or long-form post. Ask for 2 recommendations.</li>
        </ul>
    </div>

    <hr class="my-10 border-slate-200" />

    {{AD_2}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Frequently Asked Questions</h2>

    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. Is paying for LinkedIn Premium worth it?</h4>
            <p class="text-slate-600">If you are actively searching, yes. It allows you to see who viewed your profile (invaluable intel) and gives you InMail credits to message recruiters who are outside your network. You can usually get a 1-month free trial. Use it strategically during your highest activity month.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. My industry is old-school. Do I really need Twitter/X?</h4>
            <p class="text-slate-600">Probably not. If you are in Law, Accounting, or Heavy Manufacturing, LinkedIn is your primary arena. Twitter/X is dominant in Tech, Media, and Web3. Go where your target audience (hiring managers) are spending their time.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">3. Should I keep my accounts private or public?</h4>
            <p class="text-slate-600">LinkedIn should always be public. Twitter should be public if you are using it for networking. Instagram and Facebook can remain private if they are strictly for personal photos. However, keep your profile picture professional across all platforms just in case.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">4. How do I delete old posts that I can't find?</h4>
            <p class="text-slate-600">Use a tool like "TweetDelete" or check your "Activity Log" on Facebook/LinkedIn. You can filter by year. Spend a Sunday afternoon doing a clean sweep. It is better to have an empty profile than a controversial one.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">5. What if my current employer sees I am active on LinkedIn?</h4>
            <p class="text-slate-600">Being active (commenting, sharing industry news) is not a sign of leaving; it's a sign of being an engaged professional. It actually reflects well on your company. Just don't switch your status to "Open to Work" with the green banner unless you are okay with them knowing.</p>
        </div>
    </div>

    <hr class="my-10 border-slate-200" />

    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Build Your Personal Brand</h3>
      <p class="mb-8 text-lg text-slate-300">Your network is your net worth. Learn how to build a LinkedIn profile that attracts recruiters while you sleep.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        LinkedIn Profile Audit
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2023-10-21',
  image: '/images/blog/social-media-search.jpg',
  category: 'Social Media',
  tags: ['Job Search', 'LinkedIn', 'Personal Branding', 'Networking', 'Digital Footprint']
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
      title: "Find a Job Through Social Networking: Use LinkedIn, Twitter, Facebook, Blogs and More to Advance Your Career",
      author: "Diane Crompton",
      description: "Find a Job Through Social Networking helps individuals maximize online networking for job search and career success by showing them where, how, and why they can benefit from making professional connections online.",
      image: "https://m.media-amazon.com/images/I/51DmQChcO4L._SY342_.jpg",
      link: "https://amzn.to/3ZY5uzy",
      rating: 4.8,
      reviews: 12
    },
    {
      title: "The Social Media Boost: Accessible Techniques To Accelerate Your Job Search And Career Growth With LinkedIn, Twitter And Other Social Media",
      author: "Robert Hellmann",
      description: "LinkedIn, Twitter and other social media have become essential tools for career management, and in particular for conducting an effective and productive job search.",
      image: "https://m.media-amazon.com/images/I/71IuuDnrCzL._SY385_.jpg",
      link: "https://amzn.to/4kkOFIs",
      rating: 5.0,
      reviews: 4
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
