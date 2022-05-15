import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    width={476}
    height={476}
    viewBox="0 0 476 476"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="1" rx="0" ry="0" width="477" height="192" />
    <rect x="14" y="210" rx="0" ry="0" width="80" height="21" />
    <rect x="14" y="249" rx="0" ry="0" width="441" height="42" />
    <rect x="14" y="302" rx="0" ry="0" width="441" height="114" />
    <rect x="14" y="437" rx="0" ry="0" width="141" height="30" />
    <rect x="340" y="439" rx="0" ry="0" width="113" height="29" />
  </ContentLoader>
);

export default MyLoader;
