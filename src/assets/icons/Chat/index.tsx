import { SvgProps } from '../type';

export const ChatIcon = (props: SvgProps) => {
  const { width, height, style, fill, className,svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 20 20" className={svgClass} fill={fill}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 2.5C4.8346 2.5 2.5 4.63191 2.5 7C2.5 7.83835 2.94759 8.80494 3.66808 9.58907L3.67378 9.59527C4.22307 10.1931 4.642 10.649 4.93787 10.982C5.08625 11.149 5.20964 11.2918 5.30572 11.41C5.39295 11.5174 5.48832 11.6412 5.55335 11.7602C5.56608 11.7835 5.57912 11.8071 5.59181 11.8302C5.61617 11.8744 5.63926 11.9163 5.65645 11.9488C5.68655 12.0057 5.72152 12.0758 5.75135 12.1606C5.78118 12.2453 5.79777 12.3219 5.80993 12.3851C5.81688 12.4212 5.82512 12.4683 5.83381 12.5181C5.83834 12.544 5.84299 12.5706 5.84764 12.5967C5.88016 12.7792 5.88457 12.9754 5.87958 13.1795C6.22019 12.8195 6.57467 12.4555 6.87215 12.174C7.02692 12.0275 7.17901 11.8912 7.31245 11.7873C7.37795 11.7362 7.45495 11.6804 7.5361 11.6337L7.53891 11.632C7.58848 11.6035 7.76786 11.5 8 11.5C11.1654 11.5 13.5 9.36809 13.5 7C13.5 4.63191 11.1654 2.5 8 2.5ZM1 7C1 3.5691 4.26184 1 8 1C11.7382 1 15 3.5691 15 7C15 10.3694 11.854 12.9076 8.20049 12.9975C8.12585 13.0584 8.02599 13.1473 7.90316 13.2635C7.62164 13.5299 7.26885 13.8926 6.91794 14.2646C6.56892 14.6346 6.22951 15.0056 5.97685 15.2846C5.85066 15.424 5.74645 15.5401 5.6739 15.6212L5.59011 15.715L5.56157 15.7471C5.34881 15.9871 5.00664 16.0657 4.71074 15.942C4.41483 15.8183 4.23033 15.5201 4.25166 15.2001L4.32969 14.0296C4.35474 13.6539 4.37214 13.3913 4.37862 13.1919C4.38526 12.9875 4.37797 12.8995 4.3709 12.8598C4.36313 12.8163 4.35734 12.783 4.35262 12.7559C4.34615 12.7188 4.3417 12.6932 4.33694 12.6684C4.33623 12.6648 4.3356 12.6616 4.33504 12.6588C4.33375 12.6563 4.33224 12.6534 4.3305 12.6501C4.31872 12.6279 4.30617 12.6051 4.28798 12.5721C4.27481 12.5483 4.25867 12.519 4.23771 12.4807C4.23892 12.4829 4.23848 12.4823 4.2357 12.4783C4.22789 12.4672 4.2016 12.4298 4.14159 12.356C4.06621 12.2632 3.95985 12.1396 3.81653 11.9783C3.53004 11.6559 3.11967 11.2092 2.56355 10.604C1.67483 9.63675 1 8.32461 1 7ZM16.6053 7.89703C16.9085 7.61484 17.3831 7.63188 17.6653 7.93509C18.4894 8.82061 19 9.96297 19 11.2222C19 12.2361 18.5555 13.2327 17.9475 14.0186C17.3979 14.729 16.9902 15.2561 16.7079 15.6304C16.5666 15.8179 16.4612 15.9612 16.3869 16.067C16.3321 16.1452 16.3062 16.1862 16.297 16.201C16.2924 16.2082 16.2918 16.2091 16.2938 16.2049C16.2656 16.2646 16.2396 16.318 16.2228 16.3523C16.2201 16.358 16.2176 16.3631 16.2153 16.3677C16.2146 16.3727 16.2138 16.3784 16.213 16.3846C16.2076 16.4228 16.1993 16.4824 16.1892 16.5483C16.1721 16.6606 16.1812 16.8744 16.2272 17.5738L16.2684 18.2008C16.2895 18.5217 16.1037 18.8203 15.8065 18.9431C15.5094 19.066 15.167 18.9857 14.9554 18.7436L14.954 18.7421L14.9312 18.7161L14.861 18.6364C14.8002 18.5674 14.7128 18.4687 14.607 18.3502C14.3951 18.1128 14.1105 17.7975 13.8181 17.483C13.5237 17.1666 13.2291 16.8595 12.9951 16.6349C12.9099 16.5532 12.8393 16.4887 12.7839 16.4411C11.7131 16.4081 10.7083 16.1311 9.8451 15.6667C9.48033 15.4705 9.34371 15.0157 9.53996 14.6509C9.7362 14.2861 10.191 14.1495 10.5558 14.3457C11.2554 14.7221 12.0931 14.9444 13 14.9444C13.2301 14.9444 13.4055 15.0473 13.4502 15.0735L13.4535 15.0754C13.5286 15.1193 13.5983 15.1707 13.6553 15.2157C13.7718 15.3078 13.9027 15.427 14.0337 15.5526C14.2407 15.7513 14.4797 15.9971 14.7172 16.2488C14.7202 16.2281 14.7227 16.2103 14.7251 16.1931C14.7278 16.1741 14.7303 16.1559 14.7333 16.1354C14.74 16.0893 14.7513 16.0134 14.7772 15.9285C14.8031 15.8437 14.8361 15.7745 14.8563 15.7325C14.8653 15.7138 14.8734 15.6972 14.8818 15.68C14.897 15.6488 14.9134 15.6154 14.9382 15.5628C14.9927 15.4474 15.0807 15.317 15.1591 15.2053C15.2482 15.0784 15.3658 14.919 15.5102 14.7274C15.7988 14.3446 16.2122 13.8102 16.7571 13.1059L16.761 13.1008C17.2299 12.4947 17.5 11.8124 17.5 11.2222C17.5 10.3837 17.1628 9.59688 16.5673 8.95701C16.2851 8.6538 16.3021 8.17923 16.6053 7.89703Z" fill={fill} />
      </svg>
    </div>
  );
};
