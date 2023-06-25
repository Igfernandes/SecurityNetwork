import { SvgProps } from '../type';

export const DownloadIcon = (props: SvgProps) => {
  const { width, height, style, className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 19 19" fill="none">
        <path d="M9.5 11.75V1.25M9.5 11.75L12.75 8.75M9.5 11.75L6.25 8.75M17.75 13.25V15.75C17.75 16.8546 16.8546 17.75 15.75 17.75H3.25C2.14543 17.75 1.25 16.8546 1.25 15.75V13.25" stroke="#F59E26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
