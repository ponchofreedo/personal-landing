export interface Project {
  title: string;
  copy: {
    intro?: string;
    context?: string;
    problem?: string;
    challenges?: string;
    solving?: string;
    impact?: string;
    retro?: string;
    goals?: string;
    results?: string;
    quotes?: string;
    [key: string]: any;
  };
  meta: {
    tags?: Record<string, string>;
    date?: string;
    dateStart?: string;
    dateEnd?: string;
    year?: number;
    slug?: string;
    href?: string;
    [key: string]: any;
  };
  img: {
    fileName?: string;
    fileNameZoom?: string;
    alt?: string;
    caption?: string;
    [key: string]: any;
  }
  company: string;
  company_url: string;
  team: string;
}
