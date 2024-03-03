'use client'

import { Box } from "@mantine/core"
import styles from './DevFinder.module.css'
import { useState } from "react";
import DevFinderHead from "../DevFinderHead/DevFinderHead";
import DevFinderSearch from "../DevFinderSearch/DevFinderSearch";
import DevFinderUserCard from "../DevFinderUserCard/DevFinderUserCard";
import { GitHubUser } from '@/types/interface';

const DevFinder = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Failed to fetch user data');
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    return `Joined ${month} ${day}, ${year}`;
  };

  return (
    <Box className={styles.devFinderContainer}>
      <DevFinderHead />
      <DevFinderSearch username={username} setUsername={setUsername} fetchUser={fetchUser} />
      <DevFinderUserCard data={data} formatDate={formatDate} />
    </Box>
  )
}

export default DevFinder