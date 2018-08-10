import * as React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
export interface IHeaderSearchProps {
  placeholder?: string;
  dataSource?: string[];
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onPressEnter?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

export default class HeaderSearch extends React.Component<IHeaderSearchProps, any> {}
