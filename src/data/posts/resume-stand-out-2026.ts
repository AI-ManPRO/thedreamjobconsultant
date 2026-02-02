import { BlogPost } from '../blog-posts';

export const post5: BlogPost = {
  id: '5',
  slug: 'resume-stand-out-2026',
  title: 'How to Make Your Resume Stand Out in 2026',
  excerpt: 'The resume rules have changed. ATS robots, 6-second scans, and "show don\'t tell." Learn exactly how to format your resume for the modern job market.',
  seo: {
    title: 'Resume Tips 2026 | Stand Out to Recruiters & ATS',
    description: 'Modern resume guide for 2026. Learn ATS optimization, quantifiable achievements, and the layout secrets that get your resume read by humans.',
    keywords: ['resume tips', 'ATS optimization', 'CV writing', 'job search 2026', 'resume format', 'career advice']
  },
  content: `
    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-indigo-900 font-bold mb-2 mt-0">Key Takeaways</h3>
      <ul class="list-disc pl-5 text-indigo-800 space-y-2 mb-0">
          <li><strong>The 6-Second Rule:</strong> Visual heatmaps prove recruiters only scan specific zones. Learn where they look first.</li>
          <li><strong>Quantify Everything:</strong> Transforming "Responsible for sales" to "Grew revenue by 22% YoY."</li>
          <li><strong>Beat the Bots (ATS):</strong> Why fancy columns and graphics are destroying your chances.</li>
          <li><strong>The Summary Section:</strong> Stop writing "Objective" and start writing a "Unique Value Proposition."</li>
          <li><strong>Visual Hierarchy:</strong> Using fonts, bolding, and spacing to guide the reader's eye.</li>
      </ul>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      If you are applying for jobs in 2026 with a resume format from 2016, you are already behind. The game has changed completely.
    </p>

    <p class="mb-6">
      Today, your resume isn't just a document; it's data. It is first read by a machine (the Applicant Tracking System or ATS), then parsed by an AI summarizer, and finally—if you are lucky—glanced at by a burnt-out human recruiter for exactly 6 seconds.
    </p>

    <p class="mb-8">
      To survive this gauntlet, you need a resume that is technically optimized for robots and psychologically optimized for humans. "Pretty" doesn't cut it anymore. "Effective" is all that matters.
    </p>

    <p class="mb-8">
      In this comprehensive guide, we will break down the anatomy of a top 1% resume that gets interviews in the modern market.
    </p>

    <hr class="my-10 border-slate-200" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. The "F-Pattern" & The 6-Second Test</h2>

    <p class="mb-4">
      Eye-tracking studies (heatmaps) consistently show that recruiters read resumes in an "F-Pattern."
    </p>

    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>They scan the <strong>Header</strong> (Name, Title).</li>
        <li>They scan the <strong>Summary</strong> (Top horizontal bar of the F).</li>
        <li>They scan the <strong>Skills</strong> section (Middle horizontal bar).</li>
        <li>They scan the <strong>Job Titles</strong> down the left side (The vertical stem of the F).</li>
    </ul>

    <p class="mb-6">
      If your key achievements are buried in the bottom right corner, or in a dense block of text on page 2, they do not exist. You must front-load your value.
    </p>

    <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 class="text-blue-900 font-bold mb-2">The Layout Rule</h4>
        <p class="mb-4 text-blue-800">
            Keep it simple. One column is best for ATS readability. Use standard headings (Experience, Education, Skills). Do not use photos, icons, or rating bars (e.g., "5/5 stars in Java"). These confuse the parsing software and annoy recruiters who just want the data.
        </p>
    </div>

    {{AD_1}}

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. Quantify or Die: The "Show, Don't Tell" Method</h2>

    <p class="mb-4">
      The most common mistake we see is resumes that read like job descriptions.
    </p>
    <p class="mb-4">
      <em>"Responsible for managing the sales team."</em>
    </p>
    <p class="mb-6">
      This tells me <strong>what</strong> you did, but not <strong>how well</strong> you did it. Did the team grow? Did sales crash? Were you fired?
    </p>

    <p class="mb-4">
      You must convert Responsibilities into Achievements. This requires specific numbers: $, %, #, or Time Saved.
    </p>

    <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse border border-slate-200">
            <thead>
                <tr class="bg-slate-100">
                    <th class="p-4 border-b font-bold text-slate-700">Weak (Task-Based)</th>
                    <th class="p-4 border-b font-bold text-green-700">Strong (Impact-Based)</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="p-4 text-slate-500">"Managed social media accounts."</td>
                    <td class="p-4 text-navy-900 font-medium">"Grew organic LinkedIn followers by <strong>45% (2k to 2.9k)</strong> in 6 months by implementing a video-first content strategy."</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="p-4 text-slate-500">"Helped customers with support tickets."</td>
                    <td class="p-4 text-navy-900 font-medium">"Maintained a <strong>4.9/5 CSAT score</strong> while resolving <strong>50+ tickets daily</strong>, reducing backlog by 15%."</td>
                </tr>
                <tr>
                    <td class="p-4 text-slate-500">"Wrote code for the new app."</td>
                    <td class="p-4 text-navy-900 font-medium">"Refactored legacy backend code, reducing API latency by <strong>200ms</strong> and cutting server costs by <strong>$12k/year</strong>."</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p class="mb-6">
      Notice the bolding in the "Strong" column? That is intentional. <strong>Bold your metrics</strong> on your resume to draw the recruiter's eye instantly to the value.
    </p>

    <figure class="my-10">
      <img src="/images/blog/resume-body.jpg" alt="Highlighting metrics and achievements on a resume" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Anatomy of a winning bullet point: Action Verb + Metric + Context.</figcaption>
    </figure>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. Beating the ATS (Applicant Tracking System)</h2>

    <p class="mb-4">
      Companies like Google receive 3 million resumes a year. They cannot read them all. They use software (Greenhouse, Lever, Workday) to filter them. A recent statistic shows nearly 75% of resumes are rejected before a human ever sees them.
    </p>

    <p class="mb-4">
      If the job description asks for "Project Management," "Agile," and "Jira," and your resume says "Team Lead," "Fast-paced," and "Task tracking," you might be qualified, but you will be rejected. The bot is matching keywords.
    </p>

    <h3 class="text-xl font-bold text-navy-800 mt-6 mb-3">How to Optimize:</h3>
    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Analyze the JD:</strong> Print the job description. Highlight the hard skills (nouns) that appear multiple times.</li>
        <li><strong>Mirror the Language:</strong> If they say "Client Success," do not say "Customer Service." Change your resume to match their terminology.</li>
        <li><strong>Use a "Core Competencies" Section:</strong> Add a section below your summary with 9-12 bulleted keywords. This is pure SEO juice for the ATS.</li>
        <li><strong>File Type Matters:</strong> Always send a .docx or a standard PDF. Never send a .png, .jpg, or a Canva-graphic PDF, as text parsers often fail to read them.</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. The "Summary" Upgrade</h2>

    <p class="mb-4">
      The "Objective" statement ("Looking for a challenging role...") is dead. Companies do not care what <em>you</em> are looking for; they care what <em>they</em> are looking for.
    </p>

    <p class="mb-4">
      Replace it with a <strong>Professional Summary</strong>. This is your "Elevator Pitch" in written form. It should be 3-4 lines max.
    </p>

    <p class="italic text-slate-600 bg-slate-50 p-4 rounded-lg mb-6">
      <strong>Template:</strong><br>
      "[Adjective] [Job Title] with [Number] years of experience in [Industry]. Proven track record of [Major Achievement 1] and [Major Achievement 2]. Expert in [Top 3 Unique Skills]. Passionate about [Company Goal]."
    </p>

    <p class="mb-6">
      <strong>Example:</strong> "Data-driven Marketing Manager with 7+ years of experience in B2B SaaS. Proven track record of scaling paid search budgets from $10k to $100k/mo while maintaining a 3:1 ROAS. Expert in HubSpot, Google Ads, and attribution modeling."
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">5. Formatting Fundamentals (The Human Factor)</h2>

    <p class="mb-4">
        Once the ATS passes you, a human reads it. If it looks like a wall of text, they will trash it. Your design must be readable.
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div>
            <h4 class="font-bold text-navy-900 mb-2">Fonts</h4>
            <p class="text-sm text-slate-600">Use clean, sans-serif fonts. Arial, Calibri, Roboto, or Open Sans. Times New Roman looks dated. Comic Sans is professional suicide. <strong>Size 10-12pt</strong> for body text, <strong>14-16pt</strong> for headers.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 mb-2">Margins & Spacing</h4>
            <p class="text-sm text-slate-600">Keep margins at 0.5" to 1". Any smaller and it looks cluttered. Use generous line spacing (1.15 to 1.5). White space is your friend; it gives the reader's eye a place to rest.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 mb-2">Dates</h4>
            <p class="text-sm text-slate-600">Align dates to the right. Use a consistent format: "Jan 2020 – Present" or "01/2020 – Present". Do not switch between formats mid-document.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 mb-2">Length</h4>
            <p class="text-sm text-slate-600">1 page for <10 years experience. 2 pages for 10+ years. Never 3 pages unless you are an academic (CV) or C-suite executive with a sprawling portfolio.</p>
        </div>
    </div>

    {{AD_2}}
    
    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">6. International Variations (US vs UK vs EU)</h2>
    <p class="mb-4">
        The rules above apply primarily to the North American market. If you are applying globally, be aware of these critical differences:
    </p>
    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Photos:</strong> In the US/UK/Canada, <strong>never</strong> include a photo (discrimination laws). In Germany, France, and parts of Asia, a professional headshot is often expected.</li>
        <li><strong>Personal Info:</strong> In the EU, it's common to see date of birth or marital status. In the US, this is illegal to ask for. Remove it.</li>
        <li><strong>Length:</strong> European CVs tend to be slightly more detailed and academic than the punchy, achievement-driven American Resume.</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">7. Accounting for Gaps and Career Pivots</h2>

    <p class="mb-4">
      The modern career is linear no longer. Layoffs, sabbaticals, and pivots are normal.
    </p>

    <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>For Gaps:</strong> If the gap is recent (post-2020), you can list it as "Career Break" or "Sabbatical" with a one-line description like "Traveled to 10 countries" or "Completed Professional Certification in UX Design." Own it.</li>
        <li><strong>For Pivots:</strong> Use a "Functional Resume" or a "Hybrid Resume" that highlights relevant <em>skills</em> first, rather than just chronological history. If you are moving from Sales to HR, highlight your "Communication," "Conflict Resolution," and "Training" skills from your sales days.</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Checklist: Before You Hit Submit</h2>

    <div class="bg-green-50 p-6 rounded-lg mb-8">
        <ul class="space-y-3">
            <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Is it 1-2 pages max? (Unless you are an academic or C-level executive).</span>
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Are there numbers/metrics in at least 50% of the bullets?</span>
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Did you match the keywords to the specific job description?</span>
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Is the contact info correct? (Link to your LinkedIn profile!).</span>
            </li>
            <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Is it saved as "FirstName_LastName_Resume.pdf"? (Not "Resume_Final_v3.pdf").</span>
            </li>
        </ul>
    </div>

    <hr class="my-10 border-slate-200" />

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Frequently Asked Questions</h2>

    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">1. Should I include a photo on my resume?</h4>
            <p class="text-slate-600">In the US, UK, and Canada, the answer is usually NO. It can lead to unconscious bias and potential discrimination claims, so many HR departments will automatically discard resumes with photos. However, in Europe, Asia, and the Middle East, a professional headshot is often standard practice. Know your market.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">2. Can I use color or creative designs?</h4>
            <p class="text-slate-600">Unless you are a graphic designer, stick to black text on a white background. It's clean, professional, and readable. You can use a conservative accent color (Navy, Dark Green) for headers, but avoid bright backgrounds or complex graphics that confuse ATS scanners.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">3. Do I really need a Cover Letter?</h4>
            <p class="text-slate-600">Yes and No. 50% of recruiters never read them. The other 50% consider them essential. Since you don't know who is reading, write one. But keep it short (200 words). Focus on "Why them" (passion for company) and "Why you" (specific fit), not just re-hashing your resume.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">4. How far back should my work history go?</h4>
            <p class="text-slate-600">Rule of thumb: 10-15 years. Anything older than that is likely irrelevant to modern tools and workflows. You can include a "Previous Experience" section that just lists "Company Name, Title (Dates)" without bullet points to show longevity if needed.</p>
        </div>
        <div>
            <h4 class="font-bold text-navy-900 text-lg mb-2">5. How do I explain a prolonged employment gap?</h4>
            <p class="text-slate-600">Be honest but brief. "Career Break for Family Care" or "Sabbatical for Professional Development." If you did any freelance work, consulting, or upskilling (courses, certificates) during that time, list it to show you stayed active.</p>
        </div>
    </div>

    <hr class="my-10 border-slate-200" />

    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Get a Professional Review</h3>
      <p class="mb-8 text-lg text-slate-300">Still unsure if your resume hits the mark? We will audit your resume for free during our consultation call and point out exactly what needs to change.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Review My Resume
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2023-07-03',
  image: '/images/blog/resume-2026.jpg',
  category: 'Resume Writing',
  tags: ['Resume Tips', 'ATS', 'Job Search', 'Career Advice', 'Personal Branding']
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
