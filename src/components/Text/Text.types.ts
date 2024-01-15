export enum TextType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    Paragraph = "p",
    Span = "span"
}

export interface TextProps {
  type: TextType;
  fontSize?: number;
  text?: string;
  fontWeight?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  color?: string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
}
