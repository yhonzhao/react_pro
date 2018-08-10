import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const GlobalFooter = ({ className, links, copyright, keepOnRecord }) => {
  const clsString = classNames(styles.globalFooter, className);
  return (
    <div className={clsString}>
      {links && (
        <div className={styles.links}>
          {links.map(link => (
            <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className={styles.copyright}>{copyright}</div>}
      {keepOnRecord && (
        <div className={styles.keep_on_record}>
          <img style={{marginRight: "5px"}} src="http://img1.h.pop-fashion.com/global/images/common/safty.png" />
          <a target="_blank" href={keepOnRecord.href}>
            {keepOnRecord.title}
          </a>
        </div>
      )}
    </div>
  );
};

export default GlobalFooter;
