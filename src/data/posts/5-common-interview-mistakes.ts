import { BlogPost } from '../blog-posts';

export const post4: BlogPost = {
  id: '4',
  slug: '5-common-interview-mistakes',
  title: '5 Common Interview Mistakes (And How to Fix Them)',
  excerpt: 'Even qualified candidates fail due to simple errors. From body language to strategic questioning, learn the 5 most common interview mistakes and how to turn them into advantages.',
  seo: {
    title: '5 Common Interview Mistakes & Solutions | Job Interview Guide',
    description: 'Avoid the 5 biggest interview mistakes that cost candidates job offers. Comprehensive guide covering remote interview etiquette, body language, and behavioral questions.',
    keywords: ['interview mistakes', 'job interview tips', 'career coaching', 'interview preparation', 'salary negotiation']
  },
  content: `
    <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-red-900 font-bold mb-2 mt-0">Key Takeaways</h3>
      <ul class="list-disc pl-5 text-red-800 space-y-2 mb-0">
          <li><strong>Research is Non-Negotiable:</strong> "Reading the About page" is not enough. You need deep competitive intel to sound like an insider.</li>
          <li><strong>The "Negative Scale":</strong> How one negative comment about a past boss can outweigh 10 positive traits by triggering "loss aversion" in the interviewer.</li>
          <li><strong>The "Me vs. You" Trap:</strong> Why focusing on what <em>you</em> get (benefits, salary) too early kills the deal, and how to focus on value first.</li>
          <li><strong>The Remote Reality:</strong> Specific mistakes candidates make on Zoom (eye contact, lighting, audio) that imply a lack of professional polish.</li>
          <li><strong>The Follow-Up:</strong> The difference between annoying persistence and professional enthusiasm, including a template for the perfect "Thank You" note.</li>
      </ul>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      You have the skills. You have the experience. You look perfect on paper. So why didn't you get the offer?
    </p>

    <p class="mb-6">
      The reality of the hiring market in 2026 is that completely qualified candidates are rejected every single day. Companies are risk-averse. They aren't just looking for a reason to hire you; they are subconsciously looking for a reason <em>not</em> to hire you. With hundreds of applicants for every role, the screening process is a game of elimination.
    </p>

    <p class="mb-8">
      Often, it’s not a lack of technical ability that disqualifies a candidate. It’s a subtle behavioral red flag, a lack of preparation, or a failure to connect the dots for the interviewer. The good news? These mistakes are entirely preventable.
    </p>

    <p class="mb-8">
      In this comprehensive guide, we will dissect the five most common interview mistakes we see as career coaches, and more importantly, give you the exact scripts and strategies to avoid them. We will also cover the specific nuances of <strong>Remote Interviews</strong>, which have their own set of pitfalls.
    </p>

    {{AD_1}}

    <hr class="my-10 border-slate-200" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Mistake #1: Surface-Level Preparation</h2>

    <p class="mb-4">
      <strong>The Mistake:</strong> Most candidates spend 30 minutes looking at the company website, memorize the mission statement, and think they are ready. They walk into the interview knowing <em>what</em> the company does, but not <em>how</em> they do it or <em>why</em> it matters right now.
    </p>

    <p class="mb-4">
      <strong>The Psychology:</strong> Interviewers want to feel safe. They want to know you understand their specific challenges. If you only know public information, you look like a tourist. If you know their pain points, you look like a consultant.
    </p>

    <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 class="text-blue-900 font-bold mb-2">The "Deep Dive" Checklist</h4>
        <p class="mb-4">Before your next interview, you need to answer these four questions:</p>
        <ol class="list-decimal pl-5 space-y-2 text-blue-800">
            <li><strong>The Customers:</strong> Who buys from them? Read their reviews on G2, Capterra, or Google Maps. What do they complain about?</li>
            <li><strong>The Competitors:</strong> Who are they losing deals to? Read their competitor's blogs.</li>
            <li><strong>The Culture:</strong> Read Glassdoor reviews, but look for trends, not just angry ex-employees. Is "burnout" a common word? Is "micromanagement" flagged?</li>
            <li><strong>The News:</strong> Have they raised capital recently? Did they lay people off? Did they launch a new product? Use Google News filters for the last 30 days.</li>
        </ol>
    </div>

    <p class="mb-4">
        <strong>The Fix (Script):</strong> Instead of saying "I know you are a leader in fintech," try this:
    </p>
    <blockquote class="border-l-4 border-gold-500 pl-4 italic text-slate-600 my-6 bg-slate-50 p-4 rounded-r-lg">
        "I was reading about your Series B funding last week, and I noticed you mentioned expanding into the European market. When I was at [Previous Company], we faced similar compliance hurdles in Germany. I’m curious if GDPR is a major bottleneck for your product team right now?"
    </blockquote>
    <p class="mb-6">
        This shows you did the work and connects your history to their future.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Mistake #2: Badmouthing Recent Employers</h2>

    <p class="mb-4">
      <strong>The Mistake:</strong> The interviewer asks, "Why are you leaving your current job?" and you get honest. "My boss is a micromanager," or "The culture is toxic," or "They don't know what they are doing."
    </p>

    <p class="mb-4">
      <strong>The Psychology:</strong> Even if you are 100% right, you lose. The interviewer doesn't know your boss; they only know you. When you complain, you look difficult, disloyal, or negative. They immediately think, "Is this what they will say about us in two years?" This is known as "Trait Transference"—we inadvertently attribute the negative traits we describe in others to ourselves.
    </p>

    <p class="mb-4">
      <strong>The Fix: The "Pivot to Future" Technique</strong>
    </p>
    <p class="mb-6">
      Never run <em>away</em> from something; always run <em>towards</em> something. Frame your departure as a quest for growth, not an escape from misery.
    </p>

    <div class="bg-slate-100 p-6 rounded-lg mb-6">
        <h4 class="font-bold mb-4">Transforming The Negative</h4>
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <p class="text-red-600 font-bold mb-2">Don't Say:</p>
                <p class="text-sm">"My boss micromanages everything and won't let me try new ideas."</p>
            </div>
            <div>
                <p class="text-green-600 font-bold mb-2">Do Say:</p>
                <p class="text-sm">"I've learned a lot about process discipline in my current role, but I'm ready for a position that offers more autonomy and the chance to take ownership of strategic initiatives, which is why this Senior PM role appealed to me."</p>
            </div>
            <div>
                <p class="text-red-600 font-bold mb-2">Don't Say:</p>
                <p class="text-sm">"The company is sinking and they are firing everyone."</p>
            </div>
            <div>
                <p class="text-green-600 font-bold mb-2">Do Say:</p>
                <p class="text-sm">"The company is restructuring its focus, and I'm looking for a more stable environment where I can focus on long-term growth and product development."</p>
            </div>
        </div>
    </div>

    <figure class="my-10">
      <img src="/images/blog/interview-body.jpg" alt="Candidate checking interview notes and asking questions - Interview Mistakes" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Confidence comes from preparation. Bring your notes, ask your questions, but keep the tone positive.</figcaption>
    </figure>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Mistake #3: Not Asking Questions</h2>

    <p class="mb-4">
      <strong>The Mistake:</strong> The interview wraps up. "Do you have any questions for us?" You smile and say, "No, I think you covered everything."
    </p>

    <p class="mb-4">
      <strong>The Psychology:</strong> In the interviewer's mind, this translates to: "I am not curious," "I am desperate and will take anything," or "I haven't been listening." The Q&A section isn't just for you to learn; it's your final chance to sell your strategic thinking.
    </p>

    <p class="mb-4">
      <strong>The Fix: The "Closer" Questions</strong>
    </p>
    <p class="mb-6">
      Have 3-5 questions prepared. Group them into distinct categories:
    </p>

    <ul class="space-y-4 mb-8">
        <li class="flex items-start">
            <span class="bg-gold-100 text-gold-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">1</span>
            <div>
                <strong>The Role Question:</strong> "What does success look like in the first 90 days? If I were to join, what is the #1 problem you'd want me to solve immediately?"
            </div>
        </li>
        <li class="flex items-start">
            <span class="bg-gold-100 text-gold-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">2</span>
            <div>
                <strong>The Culture Question:</strong> "I saw one of your values is 'Customer Obsession.' Can you give me a recent example of a time the team made a hard decision to prioritize that value over short-term revenue?"
            </div>
        </li>
        <li class="flex items-start">
            <span class="bg-gold-100 text-gold-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">3</span>
            <div>
                <strong>The Closing Question:</strong> "Based on our conversation today, is there anything about my background that makes you hesitate? I'd love the chance to address it while we are here."
            </div>
        </li>
    </ul>

    <p class="mb-6">
      That last question is bold, but it works. It brings hidden objections to the surface so you can kill them before you leave the room.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Mistake #4: Focusing on "Me" Instead of "We"</h2>

    <p class="mb-4">
      <strong>The Mistake:</strong> Asking about salary, benefits, vacation time, or remote work flexibility in the first 15 minutes.
    </p>

    <p class="mb-4">
      <strong>The Psychology:</strong> Experienced sales people know you never discuss price until you have established value. An interview is a sales meeting. You are the product. If you ask "How much does it pay?" before they know "Will this solve my problem?", you look transactional.
    </p>

    <p class="mb-4">
      <strong>The Fix:</strong> Delay, Delay, Delay.
    </p>
    <p class="mb-6">
      Focus entirely on <em>their</em> needs in the first interview. Make them fall in love with you. Make them think, "We need this person." Once they want you, <em>then</em> you discuss terms. If they bring up salary early, give a range but pivot back to the role: "I'm targeting $120k-$140k, but honestly, the fit and the team are more important to me right now. I'd love to hear more about [Project X]."
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Mistake #5: Rambling and Lack of Structure</h2>

    <p class="mb-4">
      <strong>The Mistake:</strong> "Tell me about a time you failed." You start talking. 5 minutes later, you are talking about your childhood dog, and you've forgotten the original question. The interviewer's eyes have glazed over.
    </p>

    <p class="mb-4">
      <strong>The Psychology:</strong> Clarity is a proxy for intelligence. If you can't tell a concise story, employers assume you can't write a concise email, run a concise meeting, or think clearly under pressure.
    </p>

    <p class="mb-4">
      <strong>The Fix: The STAR Method (Strictly Enforced)</strong>
    </p>
    <p class="mb-6">
      Every behavioral answer must follow this structure. Practice it until you dream in bullet points.
    </p>

    <div class="bg-white border text-left border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-navy-900 text-white">
                    <th class="p-4 border-b">Section</th>
                    <th class="p-4 border-b">Time Limit</th>
                    <th class="p-4 border-b">Goal</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100 hover:bg-slate-50">
                    <td class="p-4 font-bold text-navy-900">Situation</td>
                    <td class="p-4">20 Seconds</td>
                    <td class="p-4 text-slate-600">Set the scene. "We were losing 10% of customers monthly."</td>
                </tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50">
                    <td class="p-4 font-bold text-navy-900">Task</td>
                    <td class="p-4">10 Seconds</td>
                    <td class="p-4 text-slate-600">What was your job? "I needed to reduce churn to 5%."</td>
                </tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50">
                    <td class="p-4 font-bold text-navy-900">Action</td>
                    <td class="p-4">60 Seconds</td>
                    <td class="p-4 text-slate-600">The Meat. "I implemented X, interviewed Y customers, and built Z." (Use "I", not "We").</td>
                </tr>
                <tr class="hover:bg-slate-50">
                    <td class="p-4 font-bold text-navy-900">Result</td>
                    <td class="p-4">30 Seconds</td>
                    <td class="p-4 text-slate-600">The Payoff. "Churn dropped to 4% and we saved $50k/month."</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">SPECIAL SECTION: Remote Interview Pitfalls</h2>

    <p class="mb-4">
      Since 2020, 80% of first-round interviews happen on Zoom or Teams. This introduces a new category of mistakes.
    </p>

    <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 class="font-bold text-navy-900 mb-2">1. The Eye Contact Trap</h4>
            <p class="text-sm text-slate-600">You naturally look at the face on the screen. To the interviewer, this looks like you are looking down. <strong>Look at the camera lens.</strong> Put a sticky note with an arrow next to your webcam if you have to.</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 class="font-bold text-navy-900 mb-2">2. The "Notification" Ping</h4>
            <p class="text-sm text-slate-600">Hearing a Slack ping or an iMessage notification during an interview screams "distracted." Close every other app. Put your phone in another room.</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 class="font-bold text-navy-900 mb-2">3. The Dark Room</h4>
            <p class="text-sm text-slate-600">If you are backlit (window behind you), you look like a silhouette. If you are in the dark, you look low-energy. <strong>Lighting matters.</strong> Face a window or buy a $20 ring light.</p>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Bonus: The "Thank You" Note Mistake</h2>
    
    <p class="mb-4">
      Do not send a generic "Thanks for your time" email. It's lazy and forgotten instantly.
    </p>
    <p class="mb-6">
      Send a specific note referencing something you learned. "I loved hearing about your vision for the Q3 roadmap. It reinforced my belief that my background in Agile is a perfect fit." Send it within 24 hours. If you spoke to 4 people, send 4 different emails.
    </p>

    <h3 class="text-xl font-bold text-navy-900 mt-8 mb-4">A Note on Body Language</h3>
    <p class="mb-4">
        Even on video, your body speaks. Posture affects your voice projection.
    </p>
    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Sit up straight:</strong> It opens your diaphragm and makes your voice clearer.</li>
        <li><strong>Use your hands:</strong> Gesturing makes you seem more energetic and passionate. Don't sit on your hands.</li>
        <li><strong>Smile:</strong> It sounds cliché, but smiling releases tension in your voice. You can <em>hear</em> a smile over the phone.</li>
    </ul>

    {{AD_2}}
    
    <hr class="my-10 border-slate-200" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Frequently Asked Questions</h2>

    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. Should I send a LinkedIn connection request after the interview?</h4>
            <p class="text-slate-600">Yes, absolutely. Wait until <em>after</em> you have sent the formal Thank You email. The connection request is a soft touch. Include a note: "Hi [Name], great speaking with you today about the PM role. I'd love to stay connected regardless of the outcome." This builds your network for the long term.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. What if I am late due to technical issues?</h4>
            <p class="text-slate-600">It happens. Panic makes it worse. Email them immediately (have their email ready before the call starts). "I am having trouble with Zoom, restarting my computer now. I will be there in 2 minutes." When you join, apologize once concisely ("So sorry for the delay"), and then <em>move on</em>. Do not keep apologizing.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">3. Is it okay to bring notes to a video interview?</h4>
            <p class="text-slate-600">Yes! In fact, it is recommended. This is an open-book exam. Have your resume, the job description, and your questions printed out in front of you. Just don't read from a script verbatim—it sounds robotic. Use bullet points as cues.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">4. How do I handle a question I don't know the answer to?</h4>
            <p class="text-slate-600">Don't guess. Say: "That's a great question. I don't know the specific data point off the top of my head, but here is how I would find the answer..." or "I haven't used that specific tool, but I have used [Competitor Tool] which is similar, so the learning curve would be short."</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">5. Should I answer salary questions in the first screen?</h4>
            <p class="text-slate-600">Ideally, no. But if they press you ("We need a number to proceed"), do not lowball yourself. Give a range based on market research. "I'm seeing roles like this in the market paying between $130k and $150k. Is that within your budget?" Puts the ball back in their court.</p>
        </div>
    </div>

    <hr class="my-10 border-slate-200" />

    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Eliminate Errors. Get Hired.</h3>
      <p class="mb-8 text-lg text-slate-300">Don't let a preventable mistake cost you your dream job. Our mock interview sessions simulate the real thing, identifying your blind spots before it counts.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Book a Mock Interview
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2023-05-04',
  image: '/images/blog/interview-mistakes.jpg',
  category: 'Interview Logic',
  tags: ['Interview Tips', 'Career Coaching', 'Job Search', 'Hiring Process', 'Soft Skills']
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
      title: "No Mistakes Interviews: How To Get The Job You Want (No Mistakes Careers Book 2)",
      author: "Giacomo Giammatteo",
      description: "Warning: Reading this book could get you a new job. The best candidate doesn’t always get the job—the candidate who interviews best does. No Mistakes Interviews will teach you how to: Prepare for the interview, Identify the company’s primary need, Assess your skills as they relate to that need, and Sell yourself as the solution.",
      image: "https://m.media-amazon.com/images/I/81OK1B+MxeL._SY425_.jpg",
      link: "https://amzn.to/3LN8xYb",
      rating: 4.2,
      reviews: 8
    },
    {
      title: "Interview Speak: What your interviewer really wants to know",
      author: "Barbara Limmer, Laura Browne",
      description: "Discover how to decipher the most important job interview questions so you can tell your interviewer what they really want to know. Interview Speak shows you how to ace job interviews by answering the questions behind the questions. Written for job seekers in any field, Interview Speak shows you how to draw on your own unique skillset and deliver answers that will make you stand out.",
      image: "https://m.media-amazon.com/images/I/514bY2+rBmL._SY342_.jpg",
      link: "https://amzn.to/49In2Wn",
      rating: 4.9,
      reviews: 15
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
