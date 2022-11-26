import { ViewStyle } from 'react-native';

interface MarqueeProps {
  children: React.ReactElement | React.ReactElement[];
  duration?: number;
  delay?: number;
  style?: ViewStyle;
}
