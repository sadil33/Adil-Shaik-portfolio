export const PROJECTS = [
    {
        id: 'discount-calculation-ui',
        title: 'Discount Calculation UI',
        shortDescription: 'Interactive UI for complex financial discount logic, reducing manual effort.',
        fullDescription: 'Designed and implemented an interactive and user-friendly UI for discount calculation using Angular. This tool automated complex financial computations, significantly reducing manual effort and increasing efficiency in financial operations for the ERP system.',
        techStack: ['Angular', 'TypeScript', 'HTML/CSS', 'UX Design'],
        status: 'Completed',
        complexity: 'High',
        features: [
            'Automated financial logic',
            'Real-time calculation updates',
            'User-friendly input forms',
            'Integration with backend ERP'
        ],
        github: 'https://github.com/19aa83237', // Placeholder
        demo: null,
    },
    {
        id: 'm3-erp-extensions',
        title: 'M3 ERP H5 Extensions',
        shortDescription: 'Custom scripts extending ERP functionality with advanced grid features.',
        fullDescription: 'Extended M3 ERP functionalities by developing custom H5 scripts to introduce advanced features. This included adding dynamic grid columns, interactive buttons, and bespoke fields to empower users with tailored solutions directly within the ERP interface.',
        techStack: ['H5 Scripting', 'JavaScript', 'Infor M3', 'DOM Manipulation'],
        status: 'Completed',
        complexity: 'High',
        features: [
            'Custom grid columns',
            'Interactive action buttons',
            'Data injection into legacy ERP',
            'Seamless user experience'
        ],
        github: 'https://github.com/19aa83237',
        demo: null,
    },
    {
        id: 'enterprise-integration-bods',
        title: 'Enterprise Integrations (BODs)',
        shortDescription: 'Robust Java-based Business Object Documents for system sync.',
        fullDescription: 'Engineered robust Business Object Documents (BODs) using Java to facilitate seamless system integrations. These integrations successfully automated workflows and ensured reliable data synchronization across multiple enterprise platforms.',
        techStack: ['Java', 'XML', 'Infor ION', 'System Integration'],
        status: 'Completed',
        complexity: 'Very High',
        features: [
            'Automated workflows',
            'Reliable data sync',
            'Cross-platform compatibility',
            'Error handling and logging'
        ],
        github: 'https://github.com/19aa83237',
        demo: null,
    },
    {
        id: 'intelligent-it-ticketing-genai',
        title: 'Intelligent IT Ticketing Automation',
        shortDescription: 'Enterprise-grade automation using RPA and GenAI to transform Outlook emails into structured Jira/ServiceNow tickets.',
        fullDescription: 'An enterprise-grade Intelligent Automation solution designed to revolutionize IT support operations. This system autonomously monitors Microsoft Outlook for incoming support requests, utilizing Generative AI to read, understand, and structure the content before automatically creating tickets in ITSM platforms like Jira or ServiceNow.\n\nUnlike traditional bots, this solution handles unstructured data with ease, converting vague emails into clear, professional ticket descriptions, creating a seamless bridge between end-users and support engineers.',
        techStack: ['RPA (UiPath)', 'Generative AI', 'React', 'Framer Motion', 'Microsoft Outlook', 'Jira / ServiceNow'],
        status: 'AI-Powered',
        complexity: 'High',
        features: [
            '📧 Intelligent Outlook Monitoring',
            '🧠 GenAI-Driven Context Understanding',
            '📝 Auto-Structuring of Ticket Descriptions',
            '🚥 Dynamic Priority Assignment',
            '🔔 Instant Engineer Notification',
            '🔄 Multi-Platform ITSM Support (Jira/ServiceNow)'
        ],
        github: 'https://github.com/19aa83237',
        demo: null,
        challenges: [
            {
                title: 'Unstructured Email Content',
                solution: 'Integrated GenAI to transform free-text emails with missing details into structured, professional summaries.'
            },
            {
                title: 'Inconsistent Ticket Quality',
                solution: 'Standardized outputs using AI to ensure every ticket has a clear problem summary, system impact, and error details.'
            },
            {
                title: 'Accurate Priority Assignment',
                solution: 'Implemented hybrid logic: Rule-based checks for keywords + AI inference for urgency and business impact.'
            },
            {
                title: 'Multi-Platform Support',
                solution: 'Designed a dynamic adapter pattern in RPA to seamlessly switch between Jira and ServiceNow APIs based on config.'
            },
            {
                title: 'AI Reliability & Safety',
                solution: 'Enforced confidence thresholds; low-confidence AI outputs are flagged for human review to ensure trust.'
            }
        ],
        impact: [
            'Drastically reduced manual ticket creation effort',
            'Standardized ticket quality across the enterprise',
            'Accelerated response times with instant notifications',
            'Improved SLA adherence via accurate prioritization'
        ],
        aiPrompts: [
            {
                name: 'Ticket Description Generation',
                prompt: 'Analyze the following IT support email and generate a clear, structured ticket description. Include problem summary, affected system, error details, and user impact. Use professional IT service desk language.'
            },
            {
                name: 'Priority Inference',
                prompt: 'Based on the issue description, business impact, and urgency indicators, suggest an appropriate ticket priority (High, Medium, Low) following ITSM best practices.'
            }
        ],
        workflow: [
            { step: 'Outlook Email Received', icon: 'Mail', desc: 'Monitors inbox for new support requests.' },
            { step: 'RPA Bot Reads Email', icon: 'Bot', desc: 'Extracts subject, body, and sender details.' },
            { step: 'GenAI Processing', icon: 'Brain', desc: 'Understands context & structures unstructured data.' },
            { step: 'Description Generated', icon: 'FileText', desc: 'Formats content into professional IT language.' },
            { step: 'Priority Assigned', icon: 'AlertCircle', desc: 'Determines urgency based on business rules + AI.' },
            { step: 'Ticket Created', icon: 'CheckCircle', desc: 'Posts to Jira or ServiceNow via API.' },
            { step: 'Engineer Notified', icon: 'Bell', desc: 'Sends instant alert with ticket link & AI summary.' }
        ]
    },
    {
        id: 'idm-intelligent-upload-automation',
        title: 'IDM Intelligent Files Upload Automation',
        shortDescription: 'Custom PID-based caching logic for intelligent file uploads into Infor Document Management.',
        fullDescription: 'Designed an intelligent automation solution for uploading files into Infor Document Management (IDM). The primary challenge was the lack of native caching support in the RPA studio, creating efficiency bottlenecks.\n\nTo solve this, I engineered a custom PID-based caching mechanism using a local lightweight file system. This logic checks for existing uploads on the same day to perform updates instead of redundant creations, while ensuring fresh uploads on new days. This constraint-driven solution removed infrastructure dependencies and significantly reduced processing time.',
        techStack: ['RPA (UiPath)', 'Infor IDM', 'React', 'Framer Motion', 'Custom Caching Logic', 'File System API'],
        status: 'Optimization',
        complexity: 'High',
        features: [
            '📂 Intelligent File Uploads',
            '⚡ Custom PID Cache Mechanism',
            '📅 Daily Update vs New Logic',
            '🛡️ Server-less Caching',
            '📉 Reduced Infrastructure Dependency'
        ],
        github: 'https://github.com/19aa83237', // Placeholder
        demo: null,
        challenges: [
            {
                title: 'No Native Caching',
                solution: 'Built a custom local file-based cache to store PID and LastUploadDate for state tracking.'
            },
            {
                title: 'Identifying Same-Day Uploads',
                solution: 'Implemented logic to compare the current date with the cached date to decide between "Update" and "Create" operations.'
            },
            {
                title: 'Server Access dependency',
                solution: 'Decoupled the state logic from the server, allowing the bot to manage its own state locally.'
            },
            {
                title: 'Slow Validation Cycles',
                solution: 'The caching logic allowed for rapid re-testing of update scenarios without waiting for server resets.'
            }
        ],
        impact: [
            'Removed external server dependency',
            'Reduced testing loop time by 40%',
            'Ensured 100% data consistency (no duplicate files)',
            'Enabled idempotent execution for end-users'
        ],
        workflow: [
            { step: 'Automation Triggered', icon: 'PlayCircle', desc: 'Process initiated by schedule or user.' },
            { step: 'Output File Logic', icon: 'FileText', desc: 'Generates the final PDF/Document for upload.' },
            { step: 'Check Cache', icon: 'Database', desc: 'Reads local cache for previous PID & Date.' },
            { step: 'Logic Check', icon: 'Activity', desc: 'Compares Cache Date vs Today\'s Date.' },
            { step: 'Same Day → Update', icon: 'RefreshCw', desc: 'Updates existing file using stored PID.' },
            { step: 'New Day → Create', icon: 'PlusCircle', desc: 'Deletes old cache, uploads new file.' },
            { step: 'Update Cache', icon: 'Save', desc: 'Writes new PID & Date to local cache.' },
            { step: 'Process Complete', icon: 'CheckCircle', desc: 'Upload verified and logged successfully.' }
        ]
    }
];
