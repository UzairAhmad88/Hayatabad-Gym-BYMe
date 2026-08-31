export type Program = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
};

export type Trainer = {
  id: string;
  name: string;
  specialization: string;
  experience?: string;
  image?: string;
};
