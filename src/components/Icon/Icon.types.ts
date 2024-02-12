export interface IconProps {
  name: string;
  type?: 'solid' | 'regular' | 'brand';
  size?: '2xs' | 'xs' | 'sm' | 'normal' | 'lg' | 'xl' | '2xl';
  color?: string;
  backgroundColor?: string;
  bordered?: boolean;
  borderRadius?: number;
}