export interface Topic {
  createdAt: Date;
  name: string;
  avatar: string;
  id: string;
}

export interface TopicList {
  data: Topic[];
}