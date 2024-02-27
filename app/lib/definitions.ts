export type Post = {
  title: string;
  userId: number;
  id: number;
  body: string;
};

export type User = {
  id: number;
  name: string;
};

export type Loading = {
  loadingWindo: boolean;
  loadingSubmit: boolean;
};
