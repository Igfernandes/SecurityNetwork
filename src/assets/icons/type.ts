import { CSSProperties } from 'react';
import { TagsProps } from 'src/src/components/shared/Globals/type';


export type SvgProps = {
    width?: string | number;
    height?: string | number;
    style?: CSSProperties;
    fill?: string;
    svgClass?:string;
    stroke?:GLfloat;
} & TagsProps;