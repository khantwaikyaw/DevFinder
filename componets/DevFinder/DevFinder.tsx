'use client'

import DevFinderHead from "../DevFinderHead/DevFinderHead";
import DevFinderSearch from "../DevFinderSearch/DevFinderSearch";
import DevFinderUserCard from "../DevFinderUserCard/DevFinderUserCard";
import styles from './DevFinder.module.css'
import { Box } from "@mantine/core"
import { useState } from "react";
import { GitHubUser } from '@/types/interface';
import NotificationCard from "../NotificationCard/NotificationCard";

const DevFinder = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  const fetchUser = async () => {
    if (!username) return;
    setLoading(true);
    setNotification(null);
    try {
      const response = await fetch(`/api/fetch-user?username=${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData: GitHubUser = await response.json();
      setData(userData);
      setNotification({ message: "User found!", type: 'success' });
    } catch (error: any) {
      setNotification({ message: error.message, type: 'error' });
    } finally {
      setTimeout(() => {
        setLoading(false);
        setNotification(null);
      }, 1000);
    }
  };  

  return (
    <>
      <Box className={styles.notificationContainer}>
        {notification && 
          <NotificationCard 
            error={notification.type === 'error' ? notification : undefined} 
            success={notification.type === 'success' ? notification : undefined} 
        />}
      </Box>

      <Box className={styles.devFinderContainer}>
        <DevFinderHead />
        <DevFinderSearch username={username} setUsername={setUsername} fetchUser={fetchUser} setLoading={setLoading} />
        <DevFinderUserCard data={data} loading={loading} />
      </Box>
    </>
  )
}

export default DevFinder