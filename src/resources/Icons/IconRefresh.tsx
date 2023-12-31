import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InjectedProps, withIcon } from '~/libs/IconDecorator';

const IconRefresh = ({
  width,
  height,
  fill,
  style,
}: InjectedProps): JSX.Element => {
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox='0 0 28 28'
      fill={fill}>
      <Path
        d='M14.667 23.833c-2.606 0-4.813-.904-6.621-2.713-1.809-1.808-2.713-4.015-2.713-6.62 0-2.606.904-4.813 2.713-6.621 1.808-1.809 4.015-2.713 6.62-2.713 1.342 0 2.626.277 3.85.83a8.88 8.88 0 013.15 2.378V6.333c0-.33.113-.608.337-.832.224-.224.5-.336.83-.335.33 0 .608.112.832.336.224.224.336.5.335.83v5.834c0 .33-.112.608-.336.832-.224.224-.5.336-.83.335H17a1.13 1.13 0 01-.832-.336 1.124 1.124 0 01-.335-.831c0-.33.112-.608.336-.832.224-.224.501-.335.831-.335h3.733a6.807 6.807 0 00-2.552-2.566 6.916 6.916 0 00-3.514-.934c-1.945 0-3.598.68-4.959 2.042-1.36 1.361-2.041 3.014-2.041 4.958 0 1.945.68 3.598 2.041 4.959 1.361 1.36 3.014 2.041 4.959 2.041a6.834 6.834 0 003.632-1.006 6.941 6.941 0 002.551-2.698c.155-.272.374-.461.657-.568.282-.107.569-.112.86-.015.31.097.534.301.67.612.137.311.127.603-.029.875a9.42 9.42 0 01-3.412 3.734c-1.478.933-3.121 1.4-4.93 1.4z'
        fill={fill || '#FAFAFA'}
      />
    </Svg>
  );
};
export default withIcon(IconRefresh);
