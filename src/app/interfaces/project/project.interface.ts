export default interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  date: string;
  github: string;
  demo?: string;
  featured: boolean;
}
