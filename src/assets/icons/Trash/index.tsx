import { SvgProps } from '../types';

export const TrashIcon = (props: SvgProps) => {
  const { width, height, fill, className } = props;

  return (
    <svg
      width={width ? width : '20'}
      height={height ? height : '20'}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 4.75H17.25M6.75 4.75V3.75C6.75 2.64543 7.64543 1.75 8.75 1.75H11.25C12.3546 1.75 13.25 2.64543 13.25 3.75V4.75M12.25 8.75V14.25M7.75 8.75V14.25M3.75 4.75H16.25L15.6049 16.3609C15.5461 17.4208 14.6695 18.25 13.608 18.25H6.39197C5.3305 18.25 4.45393 17.4208 4.39505 16.3609L3.75 4.75Z"
        stroke={fill ? fill : '#BA1A1E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
