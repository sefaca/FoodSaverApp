import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  style?: StyleProp<ViewStyle>;
  placeholderInput?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
