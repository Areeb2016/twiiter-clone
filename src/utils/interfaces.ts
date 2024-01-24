export interface TweetCardProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  setDetectChange: (value: boolean) => void;
  detectChange: boolean;
}

export interface TweetInputProps {
  setDetectChange: (value: boolean) => void;
  detectChange: boolean;
}

export interface Tweet {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface TweetBody {
  author: string;
  content: string;
}
