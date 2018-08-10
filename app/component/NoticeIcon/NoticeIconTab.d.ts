import * as React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
export interface INoticeIconData {
  avatar?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  datetime?: React.ReactNode;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface INoticeIconTabProps {
  list?: INoticeIconData[];
  title?: string;
  emptyText?: React.ReactNode;
  emptyImage?: string;
  style?: React.CSSProperties;
}

export default class NoticeIconTab extends React.Component<INoticeIconTabProps, any> {}
