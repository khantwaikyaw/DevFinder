import { GitHubUser } from '@/types/interface';

export const fetchGitHubUserData = async (username: string): Promise<GitHubUser> => {
  const endpoint = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: GitHubUser = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
