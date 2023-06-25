import { SvgProps } from '../type';

export const BellIcon = (props: SvgProps) => {
  const { width, height, style, fill, svgClass, className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        style={style}
        viewBox="0 0 20 20"
        className={svgClass}
        fill={fill}
      >
        <path
          d="M5.30665 5.25C5.5105 3.20102 7.26705 1.75 9.36646 1.75H10.6335C12.7329 1.75 14.4895 3.20102 14.6934 5.25L15.1171 9.75C15.2707 11.294 15.9345 12.8601 17.0076 14C17.5441 14.5699 17.1319 15.75 16.3409 15.75H3.65906C2.86814 15.75 2.45593 14.5699 2.9924 14C4.06546 12.8601 4.72932 11.294 4.88294 9.75L5.30665 5.25Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7.75001 15.75H12.25V16C12.25 17.2426 11.2426 18.25 10 18.25C8.75737 18.25 7.75001 17.2426 7.75001 16V15.75Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
