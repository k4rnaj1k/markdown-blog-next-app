export type AppConfig = {
  contacts: object;
  author: string;
  authorEmail: string;
  blogName: string,
  blogDescription: string,
  domain: string,
  blogsFolder: string
};

export type BlogData = {
  blogTitle: string,
  blogContent: string,
  blogLink: string,
  blogPreview: string
  blogCreated: Date,
};
