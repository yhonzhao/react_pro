import * as React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
export interface IGlobalFooterProps {
  links?: Array<{
    key?: string;
    title: React.ReactNode;
    href: string;
    blankTarget?: boolean;
  }>;
  copyright?: React.ReactNode;
  keepOnRecord?: {
    href: string;
    title: string;
  };
  style?: React.CSSProperties;
}

export default class GlobalFooter extends React.Component<IGlobalFooterProps, any> {}
