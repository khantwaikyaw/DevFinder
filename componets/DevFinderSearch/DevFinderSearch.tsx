import { Flex, TextInput, Button, Image } from '@mantine/core'
import styles from './DevFinderSearch.module.css'

interface DevFinderSearchProps {
  username: string | null;
  setUsername: (username: string) => void;
  fetchUser: () => void;
}

const DevFinderSearch = ({username, setUsername, fetchUser}: DevFinderSearchProps) => {
  
  return (
    <Flex className={styles.searchContainer}>
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
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={fetchUser} className={styles.textInputButton}>Search</Button>
    </Flex>
    )
}

export default DevFinderSearch