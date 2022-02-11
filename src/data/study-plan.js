const curriculums = [
    {
        name: "MMIT 57 IS",
        minimumCredit: 133,
        categories: [
            {
                name: "General Education",
                minimumCredit: 30,
                subCategories: [
                    {
                        name: "Language and Communication",
                        minimumCredit: 12,
                        innerSubCategories: [
                            {
                                name: "",
                                requiredType: "ALL",
                                minimumCredit: 12,
                                courses: [
                                    { code: "001101", name: "Fundamental English1", credit: 3 },
                                    { code: "001102", name: "Fundamental English2", credit: 3 },
                                    { code: "001201", name: "Critical Reading and Effective Writing", credit: 3 },
                                    { code: "001229", name: "English for Media Arts", credit: 3 },
                                ]
                            }
                        ],
                    },
                    {
                        name: " Humananities and Social Science",
                        minimumCredit: 9,
                        innerSubCategories: [
                            {
                                name: "",
                                requiredType: "ELECTIVE",
                                minimumCredit: 9,
                                courses: [
                                    { code: "013110", name: "Psychology and Daily Life", credit: 3, },
                                    { code: "050104", name: "Man and the Modern World", credit: 3, },
                                    { code: "050111", name: "Man and Quest for Knowledge", credit: 3, },
                                    { code: "050113", name: "Localism and Globalization", credit: 3, },
                                    { code: "050121", name: "Thai people in the ASEAN Commu	", credit: 3, },
                                    { code: "109100", name: "Man and Art", credit: 3, },
                                    { code: "109110", name: "Man and Art", credit: 3, },
                                    { code: "159100", name: "Modern World in Everyday Life", credit: 3, },
                                    { code: "851100", name: "Introduction to Communication", credit: 3, },
                                ]
                            }
                        ],
                    },
                    {
                        name: "Science and Mathematics",
                        minimumCredit: 6,
                        innerSubCategories: [
                            {
                                name: "",
                                requiredType: "ELECTIVE",
                                minimumCredit: 6,
                                courses: [
                                    { code: "201111", name: "The World of Science", credit: 3 },
                                    { code: "201114", name: "Environmental Science in Today's World", credit: 3 },
                                    { code: "201115", name: "Life and Energy", credit: 3 },
                                    { code: "205105", name: "Earth Science and Civilization", credit: 3 },
                                    { code: "951100", name: "Modern Life and Animation", credit: 3 },
                                    { code: "953111", name: "Software for Everyday Life", credit: 3 },
                                ]
                            }
                        ]
                    },
                    {
                        name: "Learning through Activities",
                        minimumCredit: 3,
                        innerSubCategories: [
                            {
                                name: "Learning through Activities",
                                requiredType: "ALL",
                                minimumCredit: 2,
                                courses: [
                                    { code: "955100", name: "Learning trough Activities1", credit: 1 },
                                    { code: "955101", name: "Learning trough Activities2", credit: 1 },
                                ]
                            },
                            {
                                name: "Exercise & Sports",
                                requiredType: "ELECTIVE",
                                minimumCredit: 1,
                                courses: [
                                    { code: "057121", name: "Football for Life and Exercise", credit: 1 },
                                    { code: "057122", name: "Swimming for Life and Exercise", credit: 1 },
                                    { code: "057123", name: "Volleyball for Life and Exercise", credit: 1 },
                                    { code: "057125", name: "Rhythmic Activities for Life and Exercise", credit: 1 },
                                    { code: "057126", name: "Basketball for Life and Exercise", credit: 1 },
                                    { code: "057127", name: "Badminton for Life and Exercise", credit: 1 },
                                    { code: "057128", name: "Tennis for Life and Exercise", credit: 1 },
                                    { code: "057129", name: "Table Tennis for Life and Exercise", credit: 1 },
                                    { code: "057130", name: "Golf for Life and Exercise", credit: 1 },
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                name: "Field of Specialization",
                minimumCredit: 97,
                subCategories: [
                    {
                        name: "Core Courses",
                        minimumCredit: 33,
                        innerSubCategories: [
                            {
                                name: "",
                                requiredType: "ALL",
                                minimumCredit: 33,
                                courses: [
                                    { code: "206171", name: "General Mathematics 1", credit: 3 },
                                    { code: "208263", name: "Elementary Statistics", credit: 3 },
                                    { code: "954100", name: "Information System for Organization Management", credit: 3 },
                                    { code: "954140", name: "Information Technology Literacy", credit: 3 },
                                    { code: "954141", name: "Information and Communication Technology", credit: 3 },
                                    { code: "954248", name: "Information and Communication Technology", credit: 3 },
                                    { code: "954142", name: "Fundamental Computer Programming for Modern Management", credit: 3 },
                                    { code: "954240", name: "Web Programming", credit: 3 },
                                    { code: "954244", name: "Structural Analysis and Design", credit: 3 },
                                    { code: "954143", name: "Data Management", credit: 3 },
                                    { code: "954246", name: "Advanced Computer Programming for Modern Management", credit: 3 },
                                    { code: "954170", name: "Elementary Business Process Modeling", credit: 3 },
                                ]
                            }
                        ]
                    },
                    {
                        name: "Major Courses",
                        minimumCredit: 64,
                        conditions: [
                            {
                                name: "Major 9543##",
                                requiredType: "ELECTIVE",
                                requiredCredit: 36,
                                courses: [
                                    { code: "954365", name: "Knowledge Management System", credit: 3 },
                                    { code: "954310", name: "Information System for ERP", credit: 3 },
                                    { code: "954340", name: "Enterprise Database Design and Applications", credit: 3 },
                                    { code: "954370", name: "Analysis and Design in MM", credit: 3 },
                                    { code: "954371", name: "Analysis and Design in PP", credit: 3 },
                                    { code: "954374", name: "Sales and Distribution for Digital Market", credit: 3 },
                                    { code: "954389", name: "Job Training", credit: 3 },
                                    { code: "954316", name: "Technology Application in Supply ", credit: 3 },
                                    { code: "954321", name: "Operations and Service for E-Service", credit: 3 },
                                    { code: "954322", name: "Technology in Call Center Management", credit: 3 },
                                    { code: "954324", name: "Information and Communication Technology for E-Touri", credit: 3 },
                                    { code: "954326", name: "Information Technology in Event Management", credit: 3 },
                                    { code: "954347", name: "E-Commerce", credit: 3 },
                                    { code: "954344", name: "Computer Networks and Database Security", credit: 3 },
                                    { code: "954375", name: "Analysis and Design in Enterprise Asset and Customer Service", credit: 3 },
                                ],
                            },
                            {
                                name: "Major 9544##",
                                requiredType: "ELECTIVE",
                                requiredCredit: 18,
                                courses: [
                                    { code: "954416", name: "Information System for SCM and CRM", credit: 3 },
                                    { code: "954477", name: "Information Technology for Production System", credit: 3 },
                                    { code: "954426", name: "Introduction to E- Service", credit: 3 },
                                    { code: "954498", name: "Information Research Methodology", credit: 1 },
                                    { code: "954499", name: "Independent Study", credit: 3 },
                                    { code: "954417", name: "Information System for Maintenance", credit: 3 },
                                    { code: "954414", name: "Preliminary Simulations on Logistics Activities", credit: 3 },
                                    { code: "954415", name: "Introduction to Quantitative Business Problems Analysis", credit: 3 },
                                    { code: "954410", name: "Information Technology Application in Lean Transformation", credit: 3 },
                                    { code: "954411", name: "Using Information Technology to Develop Key Performance Indicators for Business", credit: 3 },
                                    { code: "954412", name: "Industrial Excellence Model", credit: 3 },
                                    { code: "954413", name: "Decision Making in Information Technology Investment and Organizational Management", credit: 3 },
                                    { code: "954424", name: "Introduction to E- Tourism business", credit: 3 },
                                    { code: "954433", name: "Service and Operation in E - Tourism", credit: 3 },
                                    { code: "954421", name: "Mobile Device in Business Operation", credit: 3 },
                                    { code: "954422", name: "CRM and SRM in E - Tourism", credit: 3 },
                                    { code: "954423", name: "Service Innovation for Competitiveness", credit: 3 },
                                    { code: "954449", name: "Rapid Application Development", credit: 3 },
                                    { code: "954440", name: "Enterprise Portal Application Development", credit: 3 },
                                    { code: "954444", name: "ERP Programming", credit: 3 },
                                    { code: "954442", name: "Cloud Computing", credit: 3 },
                                    { code: "954443", name: "Multimedia for Digital Business", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954464", name: "Information Technology for Knowledge Worker Management", credit: 3 },
                                    { code: "954468", name: "Introduction to Intellectual Capital Management", credit: 3 },
                                    { code: "954461", name: "Information Technology for Knowledge Creation ", credit: 3 },
                                    { code: "954462", name: "Knowledge Engineering and Information Technology Application", credit: 3 },
                                    { code: "954463", name: "Information Technology for Learning Organization", credit: 3 },
                                    { code: "954448", name: "Web Service for Enterprise Systems", credit: 3 },
                                    { code: "954470", name: "ERP System Administration and Security", credit: 3 },
                                    { code: "954471", name: "Business Data Mining", credit: 3 },
                                    { code: "954472", name: "Business Data Visualization", credit: 3 },

                                ]
                            }
                        ],
                        innerSubCategories: [
                            {
                                name: "Required Courses",
                                requiredType: "ALL",
                                minimumCredit: 40,
                                courses: [
                                    { code: "954365", name: "Knowledge Management System", credit: 3 },
                                    { code: "954310", name: "Information System for ERP", credit: 3 },
                                    { code: "954416", name: "Information System for SCM and CRM", credit: 3 },
                                    { code: "954477", name: "Information Technology for Production System", credit: 3 },
                                    { code: "954426", name: "Introduction to E-Service", credit: 3 },
                                    { code: "954340", name: "Enterprise Database Design and Applications", credit: 3 },
                                    { code: "954370", name: "Analysis and Design in MM", credit: 3 },
                                    { code: "954371", name: "Analysis and Design in PP", credit: 3 },
                                    { code: "954230", name: "Financial Tracking in Digital Business", credit: 3 },
                                    { code: "954231", name: "Human Capital Management in Digital Business", credit: 3 },
                                    { code: "954374", name: "Sales and Distribution for Digital Market", credit: 3 },
                                    { code: "954389", name: "Job Training", credit: 3 },
                                    { code: "954498", name: "Information Research Methodology", credit: 1 },
                                    { code: "954499", name: "Independent Studey", credit: 3 },

                                ]
                            },
                            {
                                name: "Major Elective",
                                requiredType: "ELECTIVE",
                                minimumCredit: 24,
                                courses: [
                                    { code: "954417", name: "Information System for Maintenance", credit: 3 },
                                    { code: "954414", name: "Preliminary Simulations on Logistics Activities", credit: 3 },
                                    { code: "954415", name: "Introduction to Quantitative Business Problems Analysis", credit: 3 },
                                    { code: "954316", name: "Technology Application in Supply ", credit: 3 },
                                    { code: "954410", name: "Information Technology Application in Lean Transformation", credit: 3 },
                                    { code: "954411", name: "Using Information Technology to Develop Key Performance Indicators for Business", credit: 3 },
                                    { code: "954412", name: "Industrial Excellence Model", credit: 3 },
                                    { code: "954413", name: "Decision Making in Information Technology Investment and Organizational Management", credit: 3 },
                                    { code: "954321", name: "Operations and Service for E-Service", credit: 3 },
                                    { code: "954322", name: "Technology in Call Center Management", credit: 3 },
                                    { code: "954424", name: "Introduction to E-Tourism business", credit: 3 },
                                    { code: "954324", name: "Information and Communication Technology for E-Tourism", credit: 3 },
                                    { code: "954433", name: "Service and Operation in E-Tourism", credit: 3 },
                                    { code: "954326", name: "Information Technology in Event Management", credit: 3 },
                                    { code: "954347", name: "E-Commerce", credit: 3 },
                                    { code: "954421", name: "Mobile Device in Business Operation", credit: 3 },
                                    { code: "954422", name: "CRM and SRM in E-Tourism", credit: 3 },
                                    { code: "954423", name: "Service Innovation for Competitiveness", credit: 3 },
                                    { code: "954449", name: "Rapid Application Development", credit: 3 },
                                    { code: "954344", name: "Computer Networks and Database Security", credit: 3 },
                                    { code: "954440", name: "Enterprise Portal Application Development", credit: 3 },
                                    { code: "954444", name: "ERP Programming", credit: 3 },
                                    { code: "954442", name: "Cloud Computing", credit: 3 },
                                    { code: "954443", name: "Multimedia for Digital Business", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954491", name: "Selected Topic in MMIT", credit: 3 },
                                    { code: "954464", name: "Information Technology for Knowledge Worker Management", credit: 3 },
                                    { code: "954468", name: "Introduction to Intellectual Capital Management", credit: 3 },
                                    { code: "954461", name: "Information Technology for Knowledge Creation ", credit: 3 },
                                    { code: "954462", name: "Knowledge Engineering and Information Technology Application", credit: 3 },
                                    { code: "954463", name: "Information Technology for Learning Organization", credit: 3 },
                                    { code: "954375", name: "Analysis and Design in Enterprise Asset and Customer Service", credit: 3 },
                                    { code: "954448", name: "Web Service for Enterprise Systems", credit: 3 },
                                    { code: "954470", name: "ERP System Administration and Security", credit: 3 },
                                    { code: "954471", name: "Business Data Mining", credit: 3 },
                                    { code: "954472", name: "Business Data Visualization", credit: 3 },
                                ]
                            },
                        ],
                    }
                ]
            },
        ],
        freeElective: {
            name: "Free elective",
            minimumCredit: 6,
            courses: [],
        }
    }
]

export default curriculums;