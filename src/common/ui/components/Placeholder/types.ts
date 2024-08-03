/* eslint-disable prettier/prettier */
import type {
  StyleProp,
  ViewStyle,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';

export type Props = {
  style?: StyleProp<ViewStyle>;
  placeholderInput?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  onBackPress?: () => void;
};
