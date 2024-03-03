import { Box, Flex, Image, Text, Title } from '@mantine/core'
import styles from './DevFinderUserCard.module.css'
import { DevFinderUserCardProps } from '@/types/interface';

const DevFinderUserCard = ({data, formatDate}:DevFinderUserCardProps) => {

  const effectiveData = data ?? {
    avatar_url: '/devfinder/user.svg', 
    name: 'The Octocat',
    login: 'octocat',
    created_at: '2020-01-01T00:00:00Z',
    bio: 'Hello. I am the Octocat. I am a cat that likes to code. I am the mascot for GitHub.',
    public_repos: 8,
    followers: 3398,
    following: 9,
    location: 'San Francisco',
    blog: 'https://github.blog',
    twitter_username: 'Not Available',
    company: '@github',
  };

  return (
    <Box className={styles.gitUserCard}>
      <Flex className={styles.hiddenGitUserAvatarColumn}>
        <Image className={styles.gitUserCardAvatarDesktop} src={effectiveData.avatar_url} alt="git user" />
      </Flex>
      <Box>
        <Flex className={styles.gitUserCardHead} >
          <Image className={styles.gitUserCardAvatar} src={effectiveData.avatar_url} alt="git user" />
          <Box className={styles.gitUserCardHeadText}>
            <Title className={styles.gitUserName} order={2}>{effectiveData.name}</Title>
            <Text className={styles.gitUserHandle}>@{effectiveData.login}</Text>
            <Text className={styles.gitDateJoined}>{formatDate(effectiveData.created_at)}</Text>
          </Box>
        </Flex>

        <Text className={styles.gitUserDescription}>
          {effectiveData.bio}
        </Text>

        <Flex className={styles.gitUserDetailsContainer}>
          <Flex className={styles.gitUserDetails}>
            <Text className={styles.gitUserDetailsTitle}>Repos</Text>
            <Text className={styles.gitUserDetailsValue}>{effectiveData.public_repos}</Text>
          </Flex>
          
          <Flex className={styles.gitUserDetails}>
            <Text className={styles.gitUserDetailsTitle}>Followers</Text>
            <Text className={styles.gitUserDetailsValue}>{effectiveData.followers}</Text>
          </Flex>
          
          <Flex className={styles.gitUserDetails}>
            <Text className={styles.gitUserDetailsTitle}>Following</Text>
            <Text className={styles.gitUserDetailsValue}>{effectiveData.following}</Text>
          </Flex>
        </Flex>

        <Flex className={styles.gitUserLocationDetailsContainer}>
          <Flex className={styles.gitUserLocationDetails}>
            <Image className={styles.icon} src={'/devfinder/icon-location.svg'} alt={'Location'} />
            <Text className={styles.gitUserLocationDetailsValue}>{effectiveData.location}</Text>
          </Flex>
          
          <Flex className={styles.gitUserLocationDetails}>
            <Image className={styles.icon} src={'/devfinder/icon-website.svg'} alt={'website'} />
            <Text className={styles.gitUserLocationDetailsValue}>{effectiveData.blog}</Text>
          </Flex>
          
          <Flex className={styles.gitUserLocationDetails}>
            <Image className={styles.icon} src={'/devfinder/icon-twitter.svg'} alt={'twitter'} />
            <Text className={styles.gitUserLocationDetailsValue}>{effectiveData.twitter_username}</Text>
          </Flex>
          
          <Flex className={styles.gitUserLocationDetails}>
            <Image className={styles.icon} src={'/devfinder/icon-company.svg'} alt={'company'} />
            <Text className={styles.gitUserLocationDetailsValue}>{effectiveData.company}</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default DevFinderUserCard