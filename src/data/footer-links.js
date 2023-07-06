import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { ImGoogle3 } from "react-icons/im";

export const FooterLink1 = [
  {
    title: "Company",
    links: [
      {title: "About", link: "/about"},
      {title: "Careers", link: "/careers"},
      {title: "Affilates", link: "/affilates"},
    ]
  }, 
  {
    title: "Images",
    links: [
      { logo: <BsFacebook  fontSize={'1.5rem'} className=' hover:text-richblack-200 transition-all duration-200 cursor-pointer'/>,
        link: 'https://www.facebook.com'
      },
      { logo: <ImGoogle3  fontSize={'1.5rem'} className=' hover:text-richblack-200 transition-all duration-200 cursor-pointer'/>,
        link: 'https://www.google.com'
      },
      { logo: <BsTwitter  fontSize={'1.5rem'} className=' hover:text-richblack-200 transition-all duration-200 cursor-pointer'/>,
        link: 'https://www.twitter.com'
      },
      { logo: <BsYoutube  fontSize={'1.5rem'} className=' hover:text-richblack-200 transition-all duration-200 cursor-pointer'/>,
        link: 'https://www.youtube.com'
      },
    ]
  },
  {
    title: "Resources",
    links: [ 
      { title: "Articles", link: "/articles" },
      { title: "Blogs", link: "/blogs" },
      { title: "Chart Sheet", link: "/chart-sheet" },
      { title: "Code Challenges", link: "/code-challenges" },
      { title: "Docs", link: "/docs" },
      { title: "Projects", link: "/projects" },
      { title: "Videos", link: "/videos" },
      { title: "Workspaces", link: "/workspaces" },
    ]
  },
  {
    title: "Plans",
    links: [
      { title: "Paid Memberships", link: "/paid-memberships" },
      { title: "For Students", link: "/for-students" },
      { title: "Business Solutions", link: "/business-solutions" },
    ]
  },
  {
    title: "Community",
    links: [
      { title: "Forums", link: "/forums" },
      { title: "Chapters", link: "/chapters" },
      { title: "Events", link: "/events" },
    ]
  }
]

export const FooterLink2 = [
  {
    title: "Subjects",
    links: [
      { title: "AI", link: "/ai" },
      { title: "Cloud Computing", link: "/cloud-computing" },
      { title: "Code Foundations", link: "/code-foundations" },
      { title: "Computer Science", link: "/computer-science" },
      { title: "Cybersecurity", link: "/cybersecurity" },
      { title: "Data Analytics", link: "/data-analytics" },
      { title: "Data Science", link: "/data-science" },
      { title: "Data Visualization", link: "/data-visualization" },
      { title: "Developer Tools", link: "/developer-tools" },
      { title: "DevOps", link: "/devops" },
      { title: "Game Development", link: "/game-development" },
      { title: "IT", link: "/it" },
      { title: "Machine Learning", link: "/machine-learning" },
      { title: "Math", link: "/math" },
      { title: "Mobile Development", link: "/mobile-development" },
      { title: "Web Design", link: "/web-design" },
      { title: "Web Development", link: "/web-development" },
    ],
  },
  {
    title: "Languages",
    links: [
      { title: "Bash", link: "/bash" },
      { title: "C++", link: "/c++" },
      { title: "C#", link: "/csharp" },
      { title: "Go", link: "/go" },
      { title: "HTML & CSS", link: "/html-css" },
      { title: "Java", link: "/java" },
      { title: "JavaScript", link: "/javascript" },
      { title: "Kotlin", link: "/kotlin" },
      { title: "PHP", link: "/php" },
      { title: "Python", link: "/python" },
      { title: "R", link: "/r" },
      { title: "Ruby", link: "/ruby" },
      { title: "SQL", link: "/sql" },
      { title: "Swift", link: "/swift" },
    ],
  },
  {
    title: "Career building",
    links: [
        {title: "Career paths", link: "/career-paths"},
        {title: "Career services", link: "/career-services"},
        {title: "Interview prep", link: "/interview-prep"},
        {title: "Professional certification", link: "/professional-certification"},
        {title: "Full Catalog", link: "/full-catalog"},
        {title: "Beta Content", link: "/beta-content"}
    ]
  }
];