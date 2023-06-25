import { SvgProps } from '../type';

export const ArrowUpIcon = (props: SvgProps) => {
  const { width = 20, height = 20, fill = '#2D3640', className } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 448 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg" >
      <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
    </svg>
  );
};
