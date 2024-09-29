import { Box, Flex, Image, Text, Title } from '@mantine/core';
import styles from './DevFinderUserCard.module.css';
import { DevFinderUserCardProps, DevFinderCardDetailItemProps, DevFinderCardLocationDevFinderCardDetailItemProps } from '@/types/interface';
import defaultUserData from '@/data/defaultUserData';
import { formatDate } from '@/utils/formatDate'; 
import SkeletonLoadingCard from '../SkeletonLoadingCard/SkeletonLoadingCard';

// Place In Seperate Reusable Component File as Project Grows
const DevFinderCardDetailItem = ({ title, value }:DevFinderCardDetailItemProps) => (
  <Flex className={styles.gitUserDetails}>
    <Text className={styles.gitUserDetailsTitle}>{title}</Text>
    <Text className={styles.gitUserDetailsValue}>{value}</Text>
  </Flex>
);

// Place In Seperate Reusable Component File
const DevFinderCardLocationDevFinderCardDetailItem = ({ iconSrc, altText, value, isLink }:DevFinderCardLocationDevFinderCardDetailItemProps) => (
  <Flex className={styles.gitUserLocationDetails}>
    <Image className={styles.icon} src={iconSrc} alt={altText} />
    {value ? (
      isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className={styles.gitUserLocationDetailsValue}>
          {value}
        </a>
      ) : (
        <Text className={styles.gitUserLocationDetailsValue}>
          {value}
        </Text>
      )
    ) : (
      <Text className={styles.gitUserLocationDetailsValue}>
        Not Available
      </Text>
    )}
  </Flex>
);

const DevFinderUserCard = ({ data, loading }: DevFinderUserCardProps) => {
  const effectiveData = data ?? defaultUserData;

  return (
    <>
      {loading ? (
        <SkeletonLoadingCard />
      ) : (
        <Box className={styles.gitUserCard}>
          <Flex className={styles.hiddenGitUserAvatarColumn}>
            <Image className={styles.gitUserCardAvatarDesktop} src={effectiveData.avatar_url} alt="git user"/>
          </Flex>
          <Box>
            <Flex className={styles.gitUserCardHead}>
              <Image className={styles.gitUserCardAvatar} src={effectiveData.avatar_url} alt="git user" />
              <Box className={styles.gitUserCardHeadText}>
                <Title className={styles.gitUserName} order={2}>{effectiveData.name}</Title>
                <Text className={styles.gitUserHandle}>@{effectiveData.login}</Text>
                <Text className={styles.gitDateJoined}>{formatDate(effectiveData.created_at)}</Text>
              </Box>
            </Flex>
    
            <Text className={styles.gitUserDescription}>{effectiveData.bio}</Text>
    
            <Flex className={styles.gitUserDetailsContainer}>
              <DevFinderCardDetailItem title="Repos" value={effectiveData.public_repos} />
              <DevFinderCardDetailItem title="Followers" value={effectiveData.followers} />
              <DevFinderCardDetailItem title="Following" value={effectiveData.following} />
            </Flex>
    
            <Flex className={styles.gitUserLocationDetailsContainer}>
              <DevFinderCardLocationDevFinderCardDetailItem iconSrc="/devfinder/icon-location.svg" altText="Location" value={effectiveData.location} />
              <DevFinderCardLocationDevFinderCardDetailItem iconSrc="/devfinder/icon-website.svg" altText="Website" value={effectiveData.blog} isLink={true} />
              <DevFinderCardLocationDevFinderCardDetailItem iconSrc="/devfinder/icon-twitter.svg" altText="Twitter" value={effectiveData.twitter_username} />
              <DevFinderCardLocationDevFinderCardDetailItem iconSrc="/devfinder/icon-company.svg" altText="Company" value={effectiveData.company} />
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DevFinderUserCard;
