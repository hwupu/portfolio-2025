export interface Experience {
  title: string;
  company: string;
  url: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  hide?: boolean;
}

export interface Education {
  institution: string;
  degree?: string;
  description?: string;
  url: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  status?: string;
  hide?: boolean;
}
