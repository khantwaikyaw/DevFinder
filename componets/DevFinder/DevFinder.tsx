'use client'

import DevFinderHead from "../DevFinderHead/DevFinderHead";
import DevFinderSearch from "../DevFinderSearch/DevFinderSearch";
import DevFinderUserCard from "../DevFinderUserCard/DevFinderUserCard";
import styles from './DevFinder.module.css'
import { Box } from "@mantine/core"
import { useState } from "react";
import { GitHubUser } from '@/types/interface';
import { fetchGitHubUserData } from "@/app/api/fetch-user/route";

const DevFinder = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    if (!username) return;
    setLoading(true);
    setError(null);
    try {
      const userData = await fetchGitHubUserData(username);
      setData(userData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box className={styles.devFinderContainer}>
      <DevFinderHead />
      <DevFinderSearch username={username} setUsername={setUsername} fetchUser={fetchUser} setLoading={setLoading} />
      <DevFinderUserCard data={data} loading={loading} />
    </Box>
  )
}

export default DevFinder