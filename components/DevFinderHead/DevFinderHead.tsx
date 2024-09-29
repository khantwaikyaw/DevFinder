import { Flex, Title, Box, Text, Image, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import React from 'react'
import styles from './DevFinderHead.module.css'
import cx from 'clsx';

const DevFinderHead = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  
  return (
    <Flex className={styles.devFinderHead}>
      <Title className={styles.headTitile} order={1}>devfinder</Title>
      <Flex className={styles.headModeContainer}>
        <Box>
          <Text className={cx(styles.headModeName, styles.light)}>LIGHT</Text>
          <Text className={cx(styles.headModeName, styles.dark)}>DARK</Text>
        </Box>
        <Box
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        >
          <Image src={'/devfinder/icon-sun.svg'} className={cx(styles.light, styles.icon)}/>
          <Image src={'/devfinder/icon-moon.svg'} className={cx( styles.dark, styles.icon)} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default DevFinderHead