export type Props = {
  title: string;
  state: 'new' | 'inProgress' | 'done';
  handlePress: () => void;
  handlePressIcon: () => void;
};
