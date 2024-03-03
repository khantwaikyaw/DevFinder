export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
}

export interface DevFinderUserCardProps {
  data: GitHubUser | null;
  loading: boolean;
}

export interface DevFinderCardDetailItemProps {
  title: string;
  value: number | null;
}

export interface DevFinderCardLocationDevFinderCardDetailItemProps {
  iconSrc: string;
  altText: string;
  value: string | null;
  isLink?: boolean;
}
