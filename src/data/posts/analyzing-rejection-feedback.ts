import { BlogPost } from '../blog-posts';

export const post42: BlogPost = {
    id: '42',
    slug: 'analyzing-rejection-feedback',
    title: 'Analyzing Rejection: How to Ask for (and Use) Feedback to Iterate',
    excerpt: 'Rejection is data. Most people delete the email and cry. Winners treat it as a data point in an A/B test. Here is how to reply to a rejection email to get actual, honest feedback that helps you land the next one.',
    seo: {
        title: 'How to Ask for Feedback After Rejection',
        description: 'Rejection email response templates. How to get feedback from recruiters after being turned down. Turning a "No" into a networking opportunity.',
        keywords: ['job rejection', 'ask for feedback', 'interview feedback', 'resilience', 'job search strategy', 'growth mindset']
    },
    content: `
    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-yellow-900 font-bold mb-2 mt-0">Don't Take It Personally</h3>
      <p class="text-yellow-800 mb-0">
        You weren't rejected because you are a bad person. You were rejected because of a specific mismatch: Price, Skill, or Fit. Until you know WHICH one, you cannot fix it.
      </p>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      "We decided to pursue other candidates." This generic email is useless. It is noise. You need the signal.
    </p>

    <p class="mb-6">
      Most recruiters are legally afraid to give feedback (risk of discrimination lawsuits). You must make them feel <strong>safe</strong> to tell you the truth.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. The "Safety" Script</h2>
    
    <p class="mb-4">
      Do not ask: "Why didn't I get the job?" (This sounds defensive).
    </p>
    <p class="mb-4">
      Ask: "What is the ONE thing I could have done differently?"
    </p>

    <div class="bg-slate-50 p-6 rounded-lg mb-8">
        <p class="font-mono text-sm text-slate-600 mb-4">
            Hi [Recruiter],<br><br>
            Thank you for the update. I genuinely enjoyed meeting the team, and I wish you all the best with the hire.<br><br>
            I am a big believer in continuous improvement. If you have 30 seconds, I’d love one piece of honest feedback:<br><br>
            <strong>"Was there a specific skill gap or interview question where I fell short?"</strong><br><br>
            Be as blunt as you like—I have thick skin and I really want to learn for my next application.<br><br>
            Best,<br>
            [Name]
        </p>
        <p class="text-sm italic text-slate-500"><strong>Why this works:</strong> It gives them permission ("thick skin"). It asks for something specific ("skill gap").</p>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. Analyzing the "Funnel Leak"</h2>
    
    <p class="mb-4">
      Track where you are getting rejected. It tells you exactly what is broken.
    </p>
    
    <div class="bg-white border border-slate-200 p-6 rounded-lg shadow-sm mb-8">
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th class="border-b-2 border-slate-300 p-2 text-sm">Rejection Point</th>
                        <th class="border-b-2 border-slate-300 p-2 text-sm">The Diagnosis</th>
                        <th class="border-b-2 border-slate-300 p-2 text-sm">The Fix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border-b border-slate-100 p-2 text-sm">Resume Screen</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Keywords / Formatting</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Fix your Resume (Post #25)</td>
                    </tr>
                    <tr>
                        <td class="border-b border-slate-100 p-2 text-sm">Recruiter Screen</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Story / Salary / Excitement</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Refine your "Tell Me About Yourself" (Post #15)</td>
                    </tr>
                    <tr>
                        <td class="border-b border-slate-100 p-2 text-sm">Hiring Manager</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Technical Competence</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Deepen your Portfolio / Case Studies</td>
                    </tr>
                    <tr>
                        <td class="border-b border-slate-100 p-2 text-sm">Final Round</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Culture Fit / EQ</td>
                        <td class="border-b border-slate-100 p-2 text-sm">Work on rapport and active listening (Post #38)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. The Silver Medalist Strategy</h2>
    
    <p class="mb-4">
      Often, you were the #2 choice. The #1 choice might quit in 3 months. Or they might open a new role.
    </p>
    <p class="mb-4">
      <strong>Do not disappear.</strong> Connect with the Hiring Manager on LinkedIn.
    </p>
    <p class="mb-4">
      "Thanks for the time, [Name]. Disappointed I won't be joining, but I'll be following [Company]'s progress on [Project X]. Let's stay in touch."
    </p>
    <p class="mb-6">
      I have seen dozens of candidates get hired 6 months later because they were gracious in defeat.
    </p>
    <img src="/images/blog/analyzing-rejection-feedback-inner-1.png" alt="Chart showing 'Rejection' turning into 'Iteration' and then 'Success'" class="w-full rounded-lg shadow-lg my-8" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. Warning: Bad Feedback</h2>
    
    <p class="mb-4">
      Sometimes feedback is just wrong. "You didn't seem enthusiastic enough." (Maybe you are just introverted).
    </p>
    <p class="mb-4">
      <strong>Look for patterns.</strong> If one person says you are arrogant, it might be them. If FIVE people say you interrupt too much, it's YOU.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Conclusion</h2>
    <p class="mb-6">
      JK Rowling was rejected 12 times. Airbnb was rejected by every VC in Silicon Valley. Rejection is the tax you pay for ambition. Pay the tax, learn the lesson, and keep moving.
    </p>
    
    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Stuck in the 'Final Round' Curse?</h3>
      <p class="mb-8 text-lg text-slate-300">If you keep getting to the final round but never get the offer, you have a "Closer" problem. We diagnose exactly where you are losing the sale.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Fix Failing Interviews
      </a>
    </div>
  `,
    author: 'Ayman',
    date: '2025-11-22',
    image: '/images/blog/analyzing-rejection.png',
    category: 'Mindset',
    tags: ['Rejection', 'Feedback', 'Resilience', 'Job Search Hacks', 'Growth Mindset']
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
