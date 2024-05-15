export interface TextComponentProps {
  text: string;
  textType: 'title' | 'desc' | 'time';
  margin?: {mt?: string, mb?: string, mr?: string, ml?: string}
}
