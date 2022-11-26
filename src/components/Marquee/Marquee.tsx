import React, { useRef, useState, useEffect, useMemo } from 'react';

import { Animated, StyleSheet, View } from 'react-native';

import { useLayout } from '@/hooks';

const Marquee = ({
  children,
  duration = 3000,
  delay = 0,
  style,
}: MarqueeProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { layout, onLayout } = useLayout();

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (layout.width > 0) {
      setIsMounted(true);
      prepare();
    }
  }, [layout]);

  const prepare = () => {
    initPosY();
    playMarquee();
  };

  const marqueeAnimation = useMemo(
    () =>
      Animated.timing(translateX, {
        toValue: -layout.width,
        duration,
        delay,
        useNativeDriver: true,
      }),
    [layout, duration, delay],
  );

  const initPosY = () => {
    translateX.setValue(layout.width);
  };

  const playMarquee = () => {
    Animated.loop(marqueeAnimation).start();
  };

  const animatedStyles = {
    marqueeContainer: {
      transform: [{ translateX }],
      opacity: +isMounted,
    },
  };

  return (
    <View style={styles.container}>
      <Animated.View
        onLayout={onLayout}
        style={[animatedStyles.marqueeContainer]}>
        <View style={style}>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Marquee;
