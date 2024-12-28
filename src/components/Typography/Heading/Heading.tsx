interface HeadingProps {
  text: string;
  level?: number;
}

export const Heading = ({ text, level = 1 }: HeadingProps) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag>{text}</Tag>;
};
