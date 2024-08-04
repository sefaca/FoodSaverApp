export type Props = {
  image: string;
  title: string;
  nutriScore?: string;
  description?: string;
  onPress: () => void;
  selected: boolean;
};
