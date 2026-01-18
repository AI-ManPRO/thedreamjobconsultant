import { BlogPost } from '../blog-posts';

export const post45: BlogPost = {
  id: '45',
  slug: 'types-of-resumes-explained',
  title: 'Types of Resumes: Chronological, Functional, or Hybrid? (Stop Using the Wrong One)',
  excerpt: 'Most people use the Reverse-Chronological resume. But if you have a career gap or are changing industries, that format hurts you. Learn when to use a Functional or Hybrid resume to control your narrative.',
  seo: {
    title: '3 Types of Resumes Explained: Chronological vs Functional vs Hybrid',
    description: 'Which resume format is best for you? Detailed breakdown of Reverse-Chronological, Functional (Skills-based), and Hybrid resume formats. Pros and cons of each.',
    keywords: ['resume formats', 'chronological resume', 'functional resume', 'hybrid resume', 'career change resume', 'resume templates']
  },
  content: `
    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
      <h3 class="text-yellow-900 font-bold mb-2 mt-0">The "Functional" Trap</h3>
      <p class="text-yellow-800 mb-0">
        You have a 2-year gap, so you Google "how to hide a gap." The internet tells you to write a "Functional Resume" that lists skills instead of dates. <strong>Recruiters hate this.</strong> When they see a Functional resume, they assume you have something to hide. Proceed with extreme caution.
      </p>
    </div>

    <p class="lead text-xl text-slate-600 mb-6">
      Format is not just design; it is storytelling. The way you organize your data tells the recruiter what to focus on.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">1. Reverse-Chronological (The Gold Standard)</h2>
    
    <p class="mb-4">
      <strong>Structure:</strong> Contact Info -> Summary -> Experience (Newest to Oldest) -> Education -> Skills.
    </p>
    <p class="mb-4">
      <strong>Who it is for:</strong> 90% of candidates. People with a steady career progression in the same industry. If you were a Junior Manager in 2018, Manager in 2020, and Senior Manager in 2024, this format is your best friend.
    </p>
    
    <div class="bg-green-50 p-6 rounded-lg mb-8">
        <h4 class="font-bold text-green-900 mb-4">Why Recruiters Love It</h4>
        <p class="text-green-800 mb-4">
            It tells a linear story. The recruiter can instantly see:
            <br>1. Are you currently employed?
            <br>2. Have you been promoted? (The best indicator of performance).
            <br>3. Do you stay at companies for a reasonable time (2+ years)?
        </p>
        <p class="text-green-800">
            <strong>ATS Compatibility:</strong> 100%. Every ATS on earth is built to read this format.
        </p>
    </div>

    <h3 class="text-xl font-bold text-navy-800 mt-8 mb-4">Case Study: The Steady Climber</h3>
    <p class="text-slate-600 mb-4">
        <strong>Candidate:</strong> Sarah, Software Engineer.
        <br><strong>History:</strong> 3 years at Startup A, 4 years at Big Tech B.
        <br><strong>Strategy:</strong> Using Chronological format, she highlights her title change from "Engineer II" to "Senior Engineer" at Big Tech B. This title change is the most valuable signal on her profile. A functional resume would hide this promotion.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">2. Functional (The "Skills-Based" Resume)</h2>
    
    <p class="mb-4">
      <strong>Structure:</strong> Contact Info -> Summary -> "Key Skills" (Big section with bullet points) -> Work History (Just a tiny list of titles/dates at the bottom).
    </p>
    <p class="mb-4">
      <strong>Who it is for:</strong> Almost nobody. Maybe someone returning to work after 10 years of raising kids, or a gig worker with 50 short projects.
    </p>

    <div class="bg-red-50 p-6 rounded-lg mb-8">
        <ul class="list-disc pl-5 text-red-800 space-y-2">
            <li><strong>Pros:</strong> Hides gaps. Groups disparate skills together.</li>
            <li><strong>Cons:</strong> <strong>Major Red Flag.</strong> Recruiters often throw these in the bin because they can't figure out <em>where</em> you used the skill. ATS struggle to parse it.</li>
        </ul>
    </div>

    <!-- Placeholder for Resume Types Image -->
    <div class="bg-indigo-900 p-8 rounded-lg text-center mb-8">
       <p class="text-white font-bold italic text-lg">"Choose Your Weapon"</p>
       <p class="text-indigo-200 text-sm mt-2">(Image: Trio of resume layouts side-by-side)</p>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">3. Hybrid / Combination (The Smart Pivot)</h2>
    
    <p class="mb-4">
      <strong>Structure:</strong> Contact Info -> Summary -> "Core Competencies" or "Selected Highlights" -> Experience (Chronological).
    </p>
    <p class="mb-4">
      <strong>Who it is for:</strong> Career Changers and Senior Executives.
    </p>
    <p class="mb-4">
      If are a "Marketing Director" applying for a "Product Owner" role, your chronological history screams "Marketing." A Hybrid format allows you to put a "Product Management Skills" section at the <strong>top</strong>, proving you have the transferrable skills, before listing your history.
    </p>

    <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h4 class="font-bold text-navy-900 mb-2">Why Hybrid Wins for Pivots:</h4>
        <p class="text-slate-700">It passes the "6-Second Scan" by showing relevant keywords immediately at the top, but still satisfies the recruiter's need to see a chronological timeline below.</p>
    </div>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">4. Visual Resumes (The Infographic)</h2>
    
    <p class="mb-4">
      <strong>Structure:</strong> Columns, charts, photos, icons, skill bars (e.g., "Photoshop: 80%").
    </p>
    <p class="mb-4">
      <strong>Who it is for:</strong> Graphic Designers and Creatives ONLY.
    </p>
    <p class="mb-6">
      <strong>Warning:</strong> Never send this to a bank or a tech firm via an online portal. The ATS cannot read the charts. It will parse your resume as blank. Only send these as a PDF attachment in an email or bring them to the interview.
    </p>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Top Formatting Tips for All Types</h2>
    
    <ul class="list-disc pl-5 text-slate-600 space-y-3 mb-8">
        <li><strong>Fonts:</strong> Stick to sans-serif (Arial, Calibri, Roboto). No Times New Roman (it looks dated).</li>
        <li><strong>Bullets:</strong> Keep them under 2 lines. Resume readers skim, they don't read paragraphs.</li>
        <li><strong>Margins:</strong> 0.5 to 1 inch. Don't cram text to the edge. White space is luxury.</li>
        <li><strong>File Type:</strong> PDF is best for layout preservation. Word (.docx) is safer for older ATS systems.</li>
    </ul>

    <h2 class="text-2xl font-bold text-navy-900 mt-12 mb-6">Conclusion</h2>
    <p class="mb-6">
      Don't overthink the format. Content is King. A Chronological resume with great achievements beats a fancy Hybrid resume with weak content every time. When in doubt, stick to the standard Reverse-Chronological format. It is what they expect.
    </p>
    
    <div class="bg-navy-900 text-white p-8 rounded-xl text-center mt-12 shadow-xl">
      <h3 class="text-gold-500 font-bold text-2xl mb-4">Need a Template?</h3>
      <p class="mb-8 text-lg text-slate-300">We offer ATS-tested resume templates for all 3 standard formats. Download our "Dream Job" pack and just fill in the blanks.</p>
      <a href="https://calendly.com/thedreamjobconsultant/60min/" class="inline-block bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
        Download Templates
      </a>
    </div>
  `,
  author: 'Ayman',
  date: '2026-10-10',
  image: '/images/blog/resume-types.png',
  category: 'Resumes',
  tags: ['Resume Formats', 'Chronological Resume', 'Functional Resume', 'Career Pivot', 'Job Search Tips']
};
