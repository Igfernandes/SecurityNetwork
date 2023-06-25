import { SvgProps } from '../type';

export const FileIcon = (props: SvgProps) => {
  const { width, height, style, fill, className, svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 21 20" className={svgClass} fill={fill}>
        <path d="M11.75 1.75H6.25C5.14543 1.75 4.25 2.64543 4.25 3.75V16.25C4.25 17.3546 5.14543 18.25 6.25 18.25H14.75C15.8546 18.25 16.75 17.3546 16.75 16.25V6.75M11.75 1.75L16.75 6.75M11.75 1.75V6.75H16.75" stroke={fill} strokeLinejoin="round" />
      </svg>
    </div>
  );
};
