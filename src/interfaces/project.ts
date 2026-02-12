export interface Project {
  title: string;
  copy: {
    intro?: string;
    context?: string;
    opportunity?: string;
    goals?: string;
    creation?: string;
    manage?: string;
    retro?: string;
    [key: string]: any;
  };
  meta: {
    tags?: Record<string, string>;
    date?: string;
    dateStart?: string;
    dateEnd?: string;
    slug?: string;
    href?: string;
    [key: string]: any;
  };
  img: {
    fileName?: string;
    alt?: string;
    [key: string]: any;
  }
  company: string;
  company_url: string;
  team: string;
}
