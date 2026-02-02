import { BlogPost } from '../blog-posts';

export const post54: BlogPost = {
  id: '54',
  slug: 'types-of-interviews-explained',
  title: 'Behavioral, Technical, Case, or Stress? The 4 Types of Interviews Explained',
  excerpt: 'Not all interviews are created equal. A "Behavioral" interview requires stories. A "Case" interview requires math. If you prepare for the wrong one, you will fail. Here is your field guide to identifying and crushing each type.',
  seo: {
    title: 'Types of Job Interviews: Behavioral vs Technical vs Case',
    description: 'Detailed guide to the 4 main types of job interviews. How to answer STAR questions (Behavioral), solve Case Studies, handle Stress Interviews, and pass Technical screens.',
    keywords: ['types of interviews', 'behavioral interview questions', 'case study interview', 'stress interview', 'technical interview', 'STAR method']
  },
  content: `
    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-indigo-900 font-bold mb-2 mt-0">The "Trojan Horse"</h3>
      <p class="text-indigo-800 mb-0">
        The most dangerous interview is the "Casual Coffee Chat." You think it's a friendly meeting. It isn't. It is a "Behavioral Interview" in disguise. They are testing your guard. Never relax.
      </p>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      You cannot practice "Interviewing." You must practice "Specific Formats." Analyzing a P&L statement requires a completely different part of your brain than telling a story about conflict resolution.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. The Behavioral Interview (The Storyteller)</h2>
    
    <p class="mb-4">
      <strong>Used by:</strong> Amazon (Leadership Principles), Google, HR departments everywhere.
    </p>
    <p class="mb-4">
      <strong>The Format:</strong> "Tell me about a time when..."
    </p>
    <div class="bg-white border border-slate-200 p-6 rounded-lg shadow-sm mb-8">
        <h4 class="font-bold text-navy-900 mb-4">How to Win: The STAR Method (Advanced)</h4>
        <p class="text-slate-600 mb-4">
            Most people know STAR. Most people use it wrong. They spend 90% of the time on "Situation" and 10% on "Result." Flip it.
        </p>
        <ul class="list-disc pl-5 text-slate-600 space-y-2">
            <li><strong>S (Situation):</strong> "We were missing our Q3 target by 20%." (Keep this short - 1 sentence).</li>
            <li><strong>T (Task):</strong> "I needed to generate $50k in pipeline in 2 weeks." (The goal).</li>
            <li><strong>A (Action):</strong> "I launched a cold-email campaign tracking open rates. I A/B tested subject lines. I called 50 leads a day. I used a new CRM tool." (Spend 70% of your time here. Use "I," not "We").</li>
            <li><strong>R (Result):</strong> "We closed $65k and beat the target. This resulted in a 15% bonus for the team." (Must be a number. No number = No result).</li>
        </ul>
        <p class="mt-4 font-bold text-navy-900">The "L" Amendment (STAR-L)</p>
        <p class="text-slate-600">
            Some recruiters look for <strong>Learning</strong>. "If I had to do it again, I would have automtated the email sequence earlier." This shows humility/growth.
        </p>
    </div>

    <h3 class="text-xl font-bold text-navy-800 mt-8 mb-4">Top 5 Behavioral Questions (2026 Edition)</h3>
    <ul class="list-disc pl-5 text-slate-600 space-y-3 mb-8">
        <li>"Tell me about a time you disagreed with a manager." (Testing: Conflict Resolution).</li>
        <li>"Tell me about a time you failed." (Testing: Resilience).</li>
        <li>"Describe a time you had to work with incomplete data." (Testing: Ambiguity).</li>
        <li>"Tell me about a time you persuaded a difficult stakeholder." (Testing: Influence).</li>
        <li>"Tell me about a time you went above and beyond." (Testing: Work Ethic).</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. The Case Study Interview (The Consultant)</h2>
    
    <p class="mb-4">
      <strong>Used by:</strong> McKinsey, BCG, Bain, Product Management roles.
    </p>
    <p class="mb-4">
      <strong>The Format:</strong> "How many tennis balls fit in a Boeing 747?" or "Should Google acquire Spotify?"
    </p>
    <p class="mb-4">
      <strong>The Goal:</strong> They don't care about the answer. They care about your <em>logic</em>.
    </p>
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h4 class="font-bold text-navy-900 mb-2">Strategy: Frameworks</h4>
        <p class="text-slate-700">
            Never just guess. Use a framework (SWOT, Porter's 5 Forces).
            <br>Say: "First, I'll calculate the volume of the plane. Second, the volume of a ball. Third, I'll adjust for empty space between balls."
        </p>
    </div>

        <img src="/images/blog/types-of-interviews-explained-inner-1.png" alt="Icons representing the 4 interview types" class="w-full rounded-lg shadow-lg my-8" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. The Technical Interview (The Audit)</h2>
    
    <p class="mb-4">
      <strong>Used by:</strong> Engineering, Finance, Data Science.
    </p>
    <p class="mb-4">
      <strong>The Format:</strong> Whiteboard coding, Excel modeling test, Take-home assignment.
    </p>
    <p class="mb-4">
      <strong>Red Flag:</strong> If a company asks you to do a "Take-home project" that takes 20 hours, they are stealing your work. A real test takes 2 hours max.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The Stress Interview (The Pressure Cooker)</h2>
    
    <p class="mb-4">
      <strong>Used by:</strong> Investment Banks, High-Frequency Trading, some Sales orgs.
    </p>
    <p class="mb-4">
      <strong>The Format:</strong> The interviewer is rude. They interrupt you. They look bored. They ask: "Why is your GPA so low?"
    </p>
    <p class="mb-4">
      <strong>The Test:</strong> Do you crumble? Or do you stay cool?
    </p>
    <p class="bg-red-50 p-4 border-l-4 border-red-500 italic text-red-900">
        <strong>Warning:</strong> Identify if this is a "Stress Test" or just a "Toxic Culture." If they insult you personally, walk away.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Conclusion</h2>
    <p class="mb-6">
      Ask the recruiter: "What format will this interview take?" They will usually tell you. If they say "Case Study," and you show up prepared to tell stories, you are bringing a knife to a gunfight.
    </p>
    
    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Terrified of the Case Study?</h3>
      <p class="mb-8 text-lg text-slate-300">Case Studies are skill-based. You can learn them. We offer "Mock Case Interview" sessions where we give you a real McKinsey-style prompt and grade your innovative thinking.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Practice a Case Study
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2025-02-16',
  image: '/images/blog/types-of-interviews-explained.png',
  category: 'Interviews',
  tags: ['Interview Tips', 'Behavioral Interview', 'Case Study', 'Technical Interview', 'Career Advice']
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
