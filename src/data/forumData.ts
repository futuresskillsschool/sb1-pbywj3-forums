export interface ForumTopic {
  id: string;
  title: string;
  description: string;
  posts: number;
  lastPost?: {
    title: string;
    author: string;
    date: string;
  };
}

export interface ForumSubCategory {
  id: string;
  title: string;
  description: string;
  topics: ForumTopic[];
}

export interface ForumCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  subcategories: ForumSubCategory[];
}

export const forumData: ForumCategory[] = [
  {
    id: 'career-development',
    title: 'Career Development',
    description: 'Discussions about career growth, job searching, and professional development',
    icon: 'Briefcase',
    subcategories: [
      {
        id: 'job-search',
        title: 'Job Search Strategies',
        description: 'Tips and discussions about finding the right job opportunities',
        topics: [
          {
            id: 'resume-tips',
            title: 'Resume Writing Tips',
            description: 'Share and discuss effective resume writing strategies',
            posts: 156,
            lastPost: {
              title: 'How to highlight achievements',
              author: 'Sarah Johnson',
              date: '2024-03-14T10:30:00'
            }
          },
          {
            id: 'interview-prep',
            title: 'Interview Preparation',
            description: 'Prepare for job interviews with the community',
            posts: 243,
            lastPost: {
              title: 'Common behavioral questions',
              author: 'Michael Chen',
              date: '2024-03-14T15:45:00'
            }
          }
        ]
      },
      {
        id: 'career-transition',
        title: 'Career Transition',
        description: 'Support and advice for changing careers',
        topics: [
          {
            id: 'industry-switch',
            title: 'Switching Industries',
            description: 'Discussions about transitioning between different industries',
            posts: 89,
            lastPost: {
              title: 'From finance to tech',
              author: 'Emily Brown',
              date: '2024-03-14T09:15:00'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    description: 'Learn and share knowledge about various professional skills',
    icon: 'BookOpen',
    subcategories: [
      {
        id: 'technical-skills',
        title: 'Technical Skills',
        description: 'Discussions about programming, data analysis, and other technical topics',
        topics: [
          {
            id: 'programming',
            title: 'Programming Languages',
            description: 'Learn and discuss various programming languages',
            posts: 324,
            lastPost: {
              title: 'Python vs JavaScript',
              author: 'Alex Wong',
              date: '2024-03-14T16:20:00'
            }
          }
        ]
      },
      {
        id: 'soft-skills',
        title: 'Soft Skills',
        description: 'Improve communication, leadership, and other soft skills',
        topics: [
          {
            id: 'communication',
            title: 'Effective Communication',
            description: 'Tips and discussions about professional communication',
            posts: 167,
            lastPost: {
              title: 'Public speaking tips',
              author: 'Lisa Martinez',
              date: '2024-03-14T14:10:00'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Build and maintain professional relationships',
    icon: 'Users',
    subcategories: [
      {
        id: 'online-networking',
        title: 'Online Networking',
        description: 'Tips for networking through social media and online platforms',
        topics: [
          {
            id: 'linkedin',
            title: 'LinkedIn Strategies',
            description: 'Make the most of your LinkedIn presence',
            posts: 198,
            lastPost: {
              title: 'Profile optimization guide',
              author: 'David Kim',
              date: '2024-03-14T11:30:00'
            }
          }
        ]
      }
    ]
  }
];