import {ReactNode} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
