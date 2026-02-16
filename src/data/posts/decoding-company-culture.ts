import { BlogPost } from '../blog-posts';

export const post41: BlogPost = {
  id: '41',
  slug: 'decoding-company-culture',
  title: 'Decoding Culture: 5 Questions to Ask Before You Join (To Avoid Toxicity)',
  excerpt: 'Every company says they have a "Great Culture." Most are lying. You need to be a detective. Learn the "Reverse Interview" techniques to uncover burnout, micromanagement, and political infighting before you sign the offer.',
  seo: {
    title: 'Questions to Ask in an Interview to Check Culture',
    description: 'How to spot a toxic workplace during the interview. The best questions to ask hiring managers and peers to reveal the truth about work-life balance and leadership.',
    keywords: ['company culture', 'interview questions', 'toxic workplace', 'due diligence', 'reverse interviewing', 'job search']
  },
  content: `
    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-emerald-900 font-bold mb-2 mt-0">The "Values" on the Wall</h3>
      <p class="text-emerald-800 mb-0">
        Enron had "Integrity" carved into their lobby wall. Values are not what they write; values are what they reward. If they reward the "Jerks" who hit quota, they value revenue over respect. You need to find out what they reward.
      </p>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      An interview is a two-way street. They are vetting you for skills. You are vetting them for sanity.
    </p>

    {{AD_1}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Question 1: "How is conflict resolved here? Can you give an example?"</h2>
    
    <p class="mb-4">
      <strong>What you want to hear:</strong> A specific story about a disagreement over product roadmap or strategy, resolved through data or open debate.
    </p>
    <p class="mb-4">
      <strong>Red Flag:</strong> "We differ to the HiPPO (Highest Paid Person's Opinion)" or "We are a family, we don't really fight." (Lies. Families fight the most).
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Question 2: "When was the last time someone was promoted, and why?"</h2>
    
    <p class="mb-4">
      This unlocks the "Reward System."
    </p>
    <div class="bg-white border border-slate-200 p-6 rounded-lg shadow-sm mb-8">
        <ul class="list-disc pl-5 text-slate-600 space-y-3">
            <li>If they say: "John worked 80 hour weeks to ship the launch," they reward <strong>Burnout</strong>.</li>
            <li>If they say: "Sarah mentored 3 juniors who are now leads," they reward <strong>Leadership</strong>.</li>
            <li>If they say: "Mike closed the biggest deal," they reward <strong>Results</strong> (even if Mike is a jerk).</li>
        </ul>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Question 3: "How does the team handle failure? Tell me about a recent miss."</h2>
    
    <p class="mb-4">
      <strong>Green Flag:</strong> "We launched Feature X, nobody used it. We did a retro, realized we skipped user research, and pivoted." (Psychological Safety).
    </p>
    <p class="mb-4">
      <strong>Red Flag:</strong> A long pause. Or "We don't fail." (This means they hide mistakes, which is dangerous).
    </p>
    <img src="/images/blog/decoding-company-culture-inner-1.png" alt="Detective magnifying glass over a company 'Values' poster" class="w-full rounded-lg shadow-lg my-8" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The "Backchannel" Verification</h2>
    
    <p class="mb-4">
      Don't rely on the interviewer. They are selling you.
    </p>
    <p class="mb-4">
      Find ex-employees on LinkedIn who left in the last 6 months.
    </p>
    <p class="font-mono text-sm text-slate-600 bg-slate-50 p-4 rounded mb-6">
        "Hi [Name], I'm holding an offer from [Company]. I see you worked there for 2 years. I'd value your candid take on the culture—specifically [Team/Dept]. I promise to keep your feedback 100% confidential. Open to a 5-min chat?"
    </p>
    <p class="mb-4">
        Ex-employees have no incentive to lie. If 3 out of 3 say "Run," you run.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">5. Signs of Low Psychological Safety</h2>
    
    <p class="mb-4">
      Watch the dynamics in the panel interview.
    </p>
    <ul class="list-disc pl-5 text-slate-600 space-y-3 mb-8">
        <li>Does the Manager interrupt the Junior staff?</li>
        <li>Do the Juniors look terrified to answer before the Manager speaks?</li>
        <li>Does everyone look exhausted (dark circles, disheveled)?</li>
    </ul>

    {{AD_2}}
    
    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Conclusion</h2>
    <p class="mb-6">
      You spend more time with your coworkers than your spouse. Choosing a toxic culture can destroy your mental health faster than unemployment. Invest the time in due diligence.
    </p>
    
    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Unsure About an Offer?</h3>
      <p class="mb-8 text-lg text-slate-300">We help clients weigh multiple offers, not just on salary, but on career trajectory and cultural fit. Make the right choice.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Offer Evaluation Call
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2025-09-20',
  image: '/images/blog/decoding-culture.png',
  category: 'Due Diligence',
  tags: ['Company Culture', 'Interview Questions', 'Due Diligence', 'Red Flags', 'Career Strategy']
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
      title: "Job Interview: Get the Job By Asking Two Critical Questions (e-Report)",
      author: "Peggy McKee",
      description: "Boost your chances of getting the job by 30-40 percent just by asking two simple, strategic questions in the interview.",
      image: "https://m.media-amazon.com/images/I/810Zi7P+eWL._SL1500_.jpg",
      link: "https://amzn.to/4toKtvr",
      rating: 4.0,
      reviews: 97
    },
    {
      title: "301 Best Questions to Ask on Your Interview, Second Edition",
      author: "John Kador",
      description: "Revised and updated for today’s job market, the bestselling handbook for the ahead-of-the-curve job seeker",
      image: "https://m.media-amazon.com/images/I/712LmeYeP8L._SL1360_.jpg",
      link: "https://amzn.to/4rCRzuC",
      rating: 4.4,
      reviews: 80
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
