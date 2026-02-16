import { BlogPost } from '../blog-posts';

export const post18: BlogPost = {
  id: '18',
  slug: 'first-90-days-success',
  title: 'The First 90 Days: How to Crush It in Your New Job',
  excerpt: 'The "Honeymoon Period" is a myth. You are being judged from Day 1. Use this 30-60-90 day plan to secure early wins and build trust with your new boss.',
  seo: {
    title: 'First 90 Days Plan | New Job Success Guide',
    description: 'A 30-60-90 day plan template for new hires. How to manage your boss, build relationships, and deliver early wins in your first 3 months.',
    keywords: ['first 90 days', 'onboarding tips', 'new job advice', '30-60-90 day plan', 'career success', 'probation period']
  },
  content: `
    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-indigo-900 font-bold mb-2 mt-0">The Onboarding Playbook</h3>
      <ul class="list-disc pl-5 text-indigo-800 space-y-2 mb-0">
          <li><strong>The "Listening Tour":</strong> Who to meet in week 1.</li>
          <li><strong>Days 1-30 (Learn):</strong> Absorbing the culture without stepping on toes.</li>
          <li><strong>Days 31-60 (Contribute):</strong> Securing your first "Quick Win."</li>
          <li><strong>Days 61-90 (Lead):</strong> Proposing a long-term strategy.</li>
          <li><strong>The Boss Sync:</strong> The exact agenda for your 1:1 meetings.</li>
          <li><strong>Imposter Syndrome:</strong> Why you feel like a fraud (and why it's normal).</li>
      </ul>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      Congratulations, you got the job! Now the hard work begins.
    </p>

    <p class="mb-6">
      Most companies have terrible onboarding processes. They give you a laptop, a login, and say "Go." If you wait for them to tell you what to do, you will fail.
    </p>

    <p class="mb-8">
      You need to take ownership of your own onboarding. The First 90 Days are critical. This is when your reputation is formed. Are you a "High Performer" or a "Bad Hire"?
    </p>
    
    {{AD_1}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. Days 1-30: The Sponge Phase</h2>
    
    <p class="mb-4">
      <strong>Goal:</strong> Learn faster than you produce.
    </p>
    <p class="mb-6">
      The biggest mistake new hires make is trying to change things too early. "At my old company, we did it this way..." STOP. Nobody likes the person who thinks they know better before they understand the context.
    </p>
    
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h4 class="font-bold text-navy-900 mb-2">The Checklist:</h4>
        <ul class="list-disc pl-5 text-slate-700 space-y-2">
            <li><strong>The Core 10:</strong> Ask your boss for a list of the 10 most important people you need to know. Schedule 15-minute "Intro Coffees" with all of them.</li>
            <li><strong>Archive Digging:</strong> Read old Slack threads, Notion docs, and strategy decks. Understand the history of decisions.</li>
            <li><strong>Ask "Why?":</strong> "Why do we use specific process X?" Ask with curiosity, not judgment.</li>
        </ul>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. Days 31-60: The "Quick Win" Phase</h2>
    
    <p class="mb-4">
      <strong>Goal:</strong> Prove you can deliver.
    </p>
    <p class="mb-6">
      Now that you know the lay of the land, identify one small, annoying problem that nobody has fixed, and fix it.
    </p>

    <div class="space-y-4 mb-8">
        <div class="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
            <strong class="text-navy-900 block mb-1">Examples of Quick Wins:</strong>
            <ul class="list-disc pl-5 text-slate-600 text-sm">
                <li>Automating a manual report that takes 2 hours a week.</li>
                <li>Updating an outdated documentation page.</li>
                <li>Organizing a messy folder structure.</li>
            </ul>
        </div>
    </div>
    <p class="text-sm text-slate-500">This builds political capital. It shows you are helpful.</p>

    <figure class="my-10">
      <img src="/images/blog/first-90-days-body.jpg" alt="Guide illustration for first-90-days-success" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Visual guide for first 90 days success</figcaption>
    </figure>


    <hr class="my-10 border-slate-200" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. Days 61-90: The Strategy Phase</h2>
    
    <p class="mb-4">
      <strong>Goal:</strong> Show your value.
    </p>
    <p class="mb-6">
      By month 3, you are no longer the "New Guy." You are expected to have an opinion.
    </p>
    <p class="mb-6">
      Present a plan to your boss for the next 6 months. "Based on my first 90 days, I see opportunities in X and Y. I propose we focus on Z." This shows initiative and strategic thinking.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The "Boss Management" Protocols</h2>
    
    <p class="mb-4">
      Your relationship with your direct manager is the #1 predictor of your success.
    </p>
    
    <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse border border-slate-200">
            <thead>
                <tr class="bg-navy-900 text-white">
                    <th class="p-4 border-b">Do This</th>
                    <th class="p-4 border-b">Don't Do This</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100"><td class="p-4">Send a Friday Recap email (Wins & Blockers).</td><td class="p-4">Make them guess what you are working on.</td></tr>
                <tr class="border-b border-slate-100"><td class="p-4">Bring solutions ("I found problem X, I suggest we do Y").</td><td class="p-4">Bring only problems ("X is broken, what should I do?").</td></tr>
                <tr class="border-b border-slate-100"><td class="p-4">Ask for feedback early ("Am I on the right track?").</td><td class="p-4">Wait for the 6-month review to hear you are failing.</td></tr>
            </tbody>
        </table>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">5. Dealing with Imposter Syndrome</h2>
    
    <p class="mb-4">
      Around week 3, you will panic. "Everyone here is smarter than me. I fooled them in the interview. They serve to fire me."
    </p>
    <p class="mb-6">
      This is normal. It's called the Dunning-Kruger effect curve. You are in the "Valley of Despair."
    </p>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6 border border-yellow-200">
        <strong class="text-yellow-900">The Antidote:</strong>
        <p class="text-yellow-800 mt-2">Document your wins. Start a "Hype Doc." Every time you solve a problem or get a compliment, write it down. Read it when you panic. Remember, they hired you for a reason.</p>
    </div>

    {{AD_2}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Frequently Asked Questions</h2>

    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. How do I handle a toxic coworker?</h4>
            <p class="text-slate-600">Be professional. Document everything. Do not gossip. In your first 90 days, you are Switzerland. Neutral territory. Avoid choosing sides in office politics until you understand the power dynamics.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. Should I work late to impress them?</h4>
            <p class="text-slate-600">Be careful. You set the precedent in the first month. If you answer emails at 10 PM in week 1, they will expect it in year 1. Set sustainable boundaries early. Show impact, not just hours.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">3. What if the job isn't what they promised?</h4>
            <p class="text-slate-600">Give it 3 months. Sometimes onboarding is just chaotic. If by Day 90 it is still a bait-and-switch, start looking. You can leave a job after 3 months (leave it off your resume) if it's a disaster.</p>
        </div>
    </div>

    <hr class="my-12 border-slate-200" />

    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Navigate Your Career</h3>
      <p class="mb-8 text-lg text-slate-300">From the interview to the promotion, we are your career co-pilots. Join our coaching program to accelerate your path to leadership.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Start Your Journey
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2025-04-13',
  image: '/images/blog/first-90-days.jpg',
  category: 'Career Growth',
  tags: ['Onboarding', 'New Job', 'Career Advice', 'Productivity', 'Leadership']
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
      title: "Your First 100 Days In a New Executive Job: Powerful First Steps On The Path to Greatness",
      author: "Robert Hargrove",
      description: "Accelerate the time between job entry and job impact!",
      image: "https://m.media-amazon.com/images/I/610hgC4jWEL._SY425_.jpg",
      link: "https://amzn.to/4ahTuOp",
      rating: 4.3,
      reviews: 273
    },
    {
      title: "THE FIRST 90 DAYS： A Guided Journal for Career Success)",
      author: "ZHI HONG GUO",
      description: "The First 90 Days Career Compass A Guided Journal for Professional Success: Navigate Your New Role with 90 Daily Prompts, Strategic Phases, and Monthly Calendars.",
      image: "https://m.media-amazon.com/images/I/41+P4OqBDdL._SL1499_.jpg",
      link: "https://amzn.to/3O1KiX2",
      rating: 5.0,
      reviews: 1
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
