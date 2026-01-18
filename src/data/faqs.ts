export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    title: string;
    items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
    {
        title: "About Us",
        items: [
            {
                question: "Why Should I Choose The Dream Job Consultant?",
                answer: "We act as your strategic partner, not just a service provider. Our approach combines data-driven market research, personalized branding, and direct executive networking to bypass gatekeepers. We don't just apply for jobs; we advocate for your candidacy directly to decision-makers, significantly increasing your visibility and interview rate."
            },
            {
                question: "What Industries Do You Specialize In?",
                answer: "We have deep expertise in Technology (Software, Data, Product), Construction & Engineering (Project Directors, C-Level), Finance, and General Corporate Leadership. If you are a senior professional or executive in these fields, our network is ready for you."
            },
            {
                question: "What Types Of Professionals Do You Work With?",
                answer: "We specialize in working with mid-to-senior level professionals, executives (Directors, VPs, C-Suite), and specialized individual contributors across various high-impact industries. We are best suited for ambitious individuals ready to take a proactive approach to their career advancement."
            },
            {
                question: "What Is Your Success Rate?",
                answer: "Success relies heavily on client engagement. However, our clients consistently report a 300% increase in interview requests within the first month of our partnership. Our structured approach is designed to maximize your market penetration and deliver tangible results."
            },
            {
                question: "Are You Experienced In My Field?",
                answer: "Likely, yes. Our team has successfully placed candidates across Technology, Finance, Engineering, Healthcare, Sales, Operations, and more. Our reverse recruiting methodology is industry-agnostic because it focuses on the universal principles of value proposition and direct networking, which work in every sector."
            },
            {
                question: "Are You Experienced With Executive And 'C-Suite' Level Search?",
                answer: "Absolutely. A significant portion of our clientele consists of senior executives. We understand the nuances of executive search, including confidentiality, board-level communication, and the importance of accessing the \"hidden\" job market where most C-level roles are filled."
            },
            {
                question: "How Do I Know If I’m A Good Fit For Your Program?",
                answer: "You are a good fit if you are committed to your career growth, open to expert guidance, and ready to invest in a proactive strategy. If you are tired of the \"apply and wait\" method and want to take control of your job search, our partnership will be highly effective."
            },
            {
                question: "So Why Choose A Company Like The Dream Job Consultant?",
                answer: "Because the traditional job search is broken. ATS systems filter out qualified candidates, and recruiters are overwhelmed. We level the playing field by putting a professional team in your corner to manage the heavy lifting—sourcing, networking, and pitching—so you can focus on acing the interview."
            },
            {
                question: "Where Are You Located And Where Do You Do Business?",
                answer: "We are a fully remote, global agency with a strong presence in the US, UK, Canada, Australia, New Zealand, Europe, and the Middle East. We work with clients worldwide, leveraging digital tools to provide seamless support regardless of your time zone."
            },
            {
                question: "Does The Dream Job Consultant Work With Clients From Outside The US?",
                answer: "Yes, we work with international clients looking for roles in their local markets or seeking relocation. Our networking strategies are effective globally, though we always tailor our approach to local business customs and platforms."
            }
        ]
    },
    {
        title: "Reverse Recruiting",
        items: [
            {
                question: "What Exactly Is Reverse Recruiting?",
                answer: "Traditional recruiting works for companies to find talent. Reverse Recruiting works for YOU to find companies. We act as your personal career agent. Instead of you spending hours scrolling job boards and applying into 'black holes', we identify target roles, network with decision-makers on your behalf, and pitch your value proposition directly to them."
            },
            {
                question: "What Makes This Service Unique From Other Reverse Recruiting Services?",
                answer: "Unlike automated services that spam generic applications, we prioritize quality over quantity. potentially using distinct, handcrafted messages for each stakeholder. We also integrate deep market research to identify opportunities before they are advertised, giving you a first-mover advantage."
            },
            {
                question: "How Is Reverse Recruiting Different From Traditional Recruiting?",
                answer: "Traditional recruiters serve the company (they are paid to fill a seat). We serve *you* (we are paid to find you a job). We represent your interests exclusively, negotiating for the best terms and finding roles that align with your career goals, not just whatever is open."
            },
            {
                question: "How Long Does The Process Typically Take?",
                answer: "On average, our executive clients begin seeing interview requests within 2-3 weeks of us launching their campaign. The average time to signed offer is typically 2-3 months, which is significantly faster than the 6-9 month average for executive searches conducted manually."
            },
            {
                question: "Do You Have Connections Or Network?",
                answer: "We leverage a vast network of recruiters, hiring managers, and industry leaders. More importantly, we are experts at *building* new connections. If we don't have a contact at your dream company today, we will identify and engage the right person tomorrow using our proven outreach strategies."
            },
            {
                question: "I Already Know How To Network; Why Do I Need Your Help On How To Network With My Network?",
                answer: "Networking for a job search requires a different intensity and strategy than casual professional networking. We professionalize the process, ensuring consistent, high-volume, and persuasive outreach that you simply cannot sustain alone while working a full-time job. We turn networking into a scalable system."
            },
            {
                question: "Does Your Company Provide Job Leads?",
                answer: "Yes. We use sophisticated search tools and aggregator access to find the best open roles, including \"hidden\" jobs not yet posted on public boards. We curate these leads to match your specific criteria before executing our outreach strategy."
            },
            {
                question: "What Is Your Turnaround Time?",
                answer: "Once we complete your onboarding and finalize your documents, we typically launch the campaign within 5-7 business days. You can expect to see initial traction—profile views and connection acceptances—almost immediately after launch."
            },
            {
                question: "How Do I Increase My Salary?",
                answer: "We help you increase your salary by positioning you as a premium candidate. By accessing unadvertised roles and bypassing HR screens, we get you in front of decision-makers where value is recognized. We also provide negotiation support to ensure you don't leave money on the table."
            },
            {
                question: "Do I Have To Give You My LinkedIn Password?",
                answer: "For our full Partnership Model, yes. We manage your inbox, connection requests, and networking messages to save you time. However, for the Standard Flat Fee model, LinkedIn management is optional. We use enterprise-grade security protocols to ensure your account remains safe."
            }
        ]
    },
    {
        title: "Resume Writing",
        items: [
            {
                question: "Do You Write Executive & Professional Bios?",
                answer: "Yes. An executive bio is a critical assets for networking and board positions. We craft compelling narratives that highlight your leadership philosophy, major achievements, and professional brand, distinct from the structured format of a resume."
            },
            {
                question: "Do You Write Curriculum Vitae? (CVs)",
                answer: "Absolutely. Whether you need a US-style resume or an international CV (Academic, Medical, or Regional formats), our writers are versed in the global nuances of application documents and will tailor them to your target market."
            },
            {
                question: "Are Your Resumes ATS-Ready?",
                answer: "Yes, all our documents are optimized for Applicant Tracking Systems (ATS) while remaining visually appealing for human readers. We use keyword optimization strategies to ensure you pass the digital gatekeepers."
            }
        ]
    },
    {
        title: "Career Coaching",
        items: [
            {
                question: "What Types Of Problems Can You Help Solve?",
                answer: "We address common career roadblocks such as stagnation, imposter syndrome, difficult career transitions, and lack of interview confidence. We also help navigate complex salary negotiations and offer strategic advice on handling workplace politics during your exit."
            },
            {
                question: "Do You Offer Career Coaching?",
                answer: "Yes. Our coaching is integral to our service. We don't just find you an interview; we prepare you to ace it. We offer mock interviews, salary negotiation coaching, and ongoing strategic advice throughout your job search campaign."
            },
            {
                question: "I’m Getting Interviews, Just No Offers. Why?",
                answer: "This usually signals a disconnect in the interview stage—either your story isn't landing, or you aren't effectively closing the deal. We will analyze your interview performance, identify the gaps, and provide targeted coaching to convert those interviews into offers."
            },
            {
                question: "I Want To Change Careers. I’m Not Sure What I Want. Can The Dream Job Consultant Help Me?",
                answer: "Yes. Career pivots are our specialty. We help you identify transferable skills and translate your experience into language that resonates with your new target industry. We also help you define a realistic and exciting roadmap for your transition."
            }
        ]
    },
    {
        title: "Help & Support",
        items: [
            {
                question: "Is My Privacy Protected?",
                answer: "Your privacy is paramount. We operate with strict confidentiality. We do not disclose your job search to your current employer, and all data shared with us is encrypted and used solely for the purpose of your campaign."
            },
            {
                question: "I Have A Quick Question, How Do I Contact You?",
                answer: "You can reach our support team via email at support@thedreamjobconsultant.com or use the chat widget on our website. For urgent matters, registered clients have direct access to their dedicated account manager."
            },
            {
                question: "I Am Ready To Proceed. How Do I Get Started?",
                answer: "Simply book a strategy call or choose your package on our pricing page. Once you sign up, you'll receive an onboarding questionnaire to kick off the process. We'll then schedule your intake session to begin crafting your new career future."
            },
            {
                question: "I Have A Unique Situation. Can You Help Me?",
                answer: "We've seen it all—gaps in employment, career changes, relocation, and complex visa situations. Book a consultation call so we can discuss the specifics of your situation. We pride ourselves on creating customized solutions for unique career paths."
            },
            {
                question: "What If The Service I Need Is Not Listed On Your Website?",
                answer: "If you have a specific career need not listed, please reach out. We often create bespoke packages for items like LinkedIn content creation, personal branding websites, or specific coaching sessions."
            }
        ]
    },
    {
        title: "Outplacement",
        items: [
            {
                question: "What Is Outplacement?",
                answer: "Outplacement is a service provided by companies to support employees who are exiting the business (usually due to layoffs). We provide a premium version of this, working directly with the impacted employees to help them transition smoothly and quickly into their next role, preserving the employer's brand reputation and the employee's career trajectory."
            }
        ]
    },
    {
        title: "Payment Options Terms & Refunds",
        items: [
            {
                question: "Do You Guarantee A Job Offer?",
                answer: "While no ethical firm can guarantee a specific job offer due to external market variables, our Partnership Model aligns our success with yours. In this model, we significantly lower the upfront cost and only receive our full fee when you sign an offer letter. This ensures we are as motivated as you are to close the deal."
            },
            {
                question: "What Happens If I Don't Get Hired?",
                answer: "In our Partnership Model, if you do not land a role, you do not pay the success fee. We share the risk. However, our 90%+ success rate suggests that with the right strategy, branding, and volume of outreach, landing a role is a matter of 'when', not 'if'."
            },
            {
                question: "Can I Pay After I Land A Job?",
                answer: "Yes, with our Partnership Model. This model requires a smaller engagement fee upfront to cover our hard costs, with the majority of our fee due only *after* you secure a new position. This performance-based structure ensures our incentives are perfectly aligned."
            },
            {
                question: "Are There Any Guarantees?",
                answer: "We guarantee our work product—your resume, LinkedIn profile, and outreach messages will be world-class. We also guarantee our activity levels—we will hit the outreach targets we agree upon. While we cannot control the hiring manager's final decision, we guarantee we will keep working until you are satisfied with the results or the term of our engagement is fulfilled."
            },
            {
                question: "What Is Your Refund Policy?",
                answer: "Due to the labor-intensive nature of our work, upfront engagement fees are generally non-refundable once work has commenced. However, we are committed to your satisfaction and will work tirelessly to resolve any issues. Specific terms are detailed in our service agreement."
            },
            {
                question: "Do You Require A Fee?",
                answer: "Yes, we are a professional consulting firm working for *you*, not a recruitment agency working for companies. This means our loyalty is 100% to you. Our fees reflect the potentially life-changing value of a higher salary and a better career trajectory."
            },
            {
                question: "What Forms Of Payment Do You Accept?",
                answer: "We accept all major credit cards, bank transfers, and in some regions, alternative payment methods like Payoneer or Western Union."
            },
            {
                question: "Do You Require Payment Upfront?",
                answer: "For our \"Done-For-You\" packages, payment is required to begin work. For our Partnership programs, a deposit is required, with the balance due upon success. We also offer installment plans for qualified candidates to make the investment more accessible."
            }
        ]
    }
];
