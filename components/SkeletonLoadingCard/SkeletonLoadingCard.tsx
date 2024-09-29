import { Box, Flex, Skeleton } from '@mantine/core'
import styles from './SkeletonLoadingCard.module.css'

const SkeletonLoadingCard = () => {
  return (
    <Box className={styles.skeletonCard}>
      <Skeleton classNames={{ root: styles.circleSkeleton }} circle/>

      <Flex className={styles.paragraphSkeleton}>
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
      </Flex>

      <Skeleton classNames={{ root: styles.boxSkeleton }} />

      <Flex className={styles.listSkeleton}>
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
        <Skeleton classNames={{ root: styles.lineSkeleton }} />
      </Flex>
    </Box>
  )
}

export default SkeletonLoadingCard