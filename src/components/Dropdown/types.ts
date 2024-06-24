export type Item = {
  icon?: React.ReactNode;
  label: string;
  href: string;
  clickEvent?: () => void;
};

export type DropdownProps = {
  item: Item;
  items?: Item[];
};
