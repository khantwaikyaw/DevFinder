import React, { useEffect } from 'react';
import { Box, Flex, Image, Skeleton, Text, Title } from '@mantine/core';
import styles from './DevFinderUserCard.module.css';
import { DevFinderUserCardProps } from '@/types/interface';
import defaultUserData from '@/data/defaultUserData';
import { formatDate } from '@/utils/formatDate'; 
import SkeletonLoadingCard from '../SkeletonLoadingCard/SkeletonLoadingCard';

interface DetailItemProps {
  title: string;
  value: number | null;
}

const DetailItem = ({ title, value }:DetailItemProps) => (
  <Flex className={styles.gitUserDetails}>
    <Text className={styles.gitUserDetailsTitle}>{title}</Text>
    <Text className={styles.gitUserDetailsValue}>{value}</Text>
  </Flex>
);

interface LocationDetailItemProps {
  iconSrc: string;
  altText: string;
  value: string | null;
}

const LocationDetailItem = ({ iconSrc, altText, value }:LocationDetailItemProps) => (
  <Flex className={styles.gitUserLocationDetails}>
    <Image className={styles.icon} src={iconSrc} alt={altText} />
    <Text className={styles.gitUserLocationDetailsValue}>{value ?? 'Not Available'}</Text>
  </Flex>
);

const DevFinderUserCard = ({ data, loading }: DevFinderUserCardProps) => {
  const effectiveData = data ?? defaultUserData;

  useEffect(() => {
    console.log(loading)
  }
  , [loading]);

  return (
    <>
      {!loading ? <SkeletonLoadingCard /> : (
        <Box className={styles.gitUserCard}>
          <SkeletonLoadingCard />
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
              <DetailItem title="Repos" value={effectiveData.public_repos} />
              <DetailItem title="Followers" value={effectiveData.followers} />
              <DetailItem title="Following" value={effectiveData.following} />
            </Flex>
    
            <Flex className={styles.gitUserLocationDetailsContainer}>
              <LocationDetailItem iconSrc="/devfinder/icon-location.svg" altText="Location" value={effectiveData.location} />
              <LocationDetailItem iconSrc="/devfinder/icon-website.svg" altText="Website" value={effectiveData.blog} />
              <LocationDetailItem iconSrc="/devfinder/icon-twitter.svg" altText="Twitter" value={effectiveData.twitter_username} />
              <LocationDetailItem iconSrc="/devfinder/icon-company.svg" altText="Company" value={effectiveData.company} />
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DevFinderUserCard;
