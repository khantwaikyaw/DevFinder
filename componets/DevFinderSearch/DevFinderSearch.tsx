import { Flex, TextInput, Button, Image } from '@mantine/core';
import styles from './DevFinderSearch.module.css';

interface DevFinderSearchProps {
  username: string | null;
  setUsername: (username: string) => void;
  fetchUser: () => void;
  setLoading: (loading: boolean) => void;
}

const DevFinderSearch = ({ username, setUsername, fetchUser, setLoading }: DevFinderSearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetchUser();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <TextInput
        variant="unstyled"
        className={styles.textInput}
        classNames={{
          input: styles.input,
          section: styles.section,
        }}
        leftSection={<Image className={styles.icon} src="/devfinder/icon-search.svg" alt="Search" />}
        placeholder="Search GitHub username…"
        value={username || ''}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <Button type="submit" className={styles.textInputButton}>Search</Button>
    </form>
  );
};

export default DevFinderSearch;
