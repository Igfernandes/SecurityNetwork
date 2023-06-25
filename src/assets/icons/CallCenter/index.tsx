import { SvgProps } from '../type';

export const CallCenterIcon = (props: SvgProps) => {
  const { width, height, style, fill, className, svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} className={svgClass} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
          <path d="M2359 5105 c-167 -27 -288 -65 -424 -132 -108 -54 -251 -147 -265 -173 -16 -31 -12 -75 10 -95 33 -30 69 -22 156 36 117 79 208 125 327 164 259 85 549 84 805 -1 377 -125 691 -439 816 -816 44 -130 57 -216 62 -403 l6 -180 -24 32 c-12 18 -39 42 -59 55 l-36 23 -7 113 c-31 549 -403 985 -936 1098 -115 24 -344 24 -455 0 -338 -74 -615 -273 -784 -565 -93 -159 -151 -370 -151 -545 0 -95 0 -96 -29 -110 -16 -9 -46 -35 -66 -58 l-38 -43 6 155 c4 85 13 193 22 240 34 181 108 361 208 507 32 45 57 93 57 105 -1 50 -56 84 -102 64 -49 -20 -167 -209 -231 -372 -77 -192 -107 -386 -107 -690 0 -171 0 -172 -31 -238 -54 -115 -55 -252 -3 -361 28 -60 106 -152 147 -174 15 -8 38 -38 52 -67 19 -39 39 -62 76 -85 27 -18 49 -40 49 -48 0 -9 16 -50 36 -91 48 -102 149 -201 259 -254 55 -27 100 -59 144 -103 35 -34 101 -88 147 -120 l84 -57 0 -67 0 -68 -97 -67 -97 -67 -350 -104 c-193 -57 -371 -116 -397 -129 -108 -59 -191 -158 -234 -277 -12 -34 -57 -240 -100 -458 -75 -380 -78 -399 -66 -451 23 -105 102 -191 201 -218 20 -6 202 -10 428 -10 l393 0 24 25 c32 31 32 69 0 100 -21 22 -33 25 -100 25 l-75 0 0 175 c0 189 -6 218 -50 233 -32 11 -84 -7 -94 -33 -3 -9 -6 -97 -6 -196 l0 -179 -238 0 c-270 0 -289 5 -326 75 l-20 39 78 395 c85 432 103 489 174 558 22 21 62 50 89 65 44 24 640 205 647 197 2 -2 36 -96 76 -209 40 -113 81 -217 91 -231 46 -66 147 -76 224 -21 l44 31 26 -72 26 -72 -49 -375 -48 -375 -103 -5 c-93 -5 -105 -7 -122 -29 -26 -32 -24 -67 6 -96 l24 -25 1039 0 c1196 0 1110 -6 1204 90 57 58 88 125 88 190 0 34 -48 278 -60 308 -20 48 -97 51 -127 5 -15 -23 -15 -34 12 -172 l28 -148 -19 -39 c-10 -21 -34 -49 -53 -61 -33 -22 -41 -23 -272 -23 l-239 0 0 188 c0 177 -1 190 -20 207 -28 25 -76 23 -103 -4 -21 -20 -22 -32 -25 -206 l-4 -185 -319 0 c-175 0 -319 3 -319 8 0 4 -22 174 -49 377 l-48 370 26 72 25 71 44 -30 c75 -52 166 -47 215 11 13 16 57 121 97 235 40 114 77 209 81 212 12 7 588 -166 642 -193 62 -31 127 -96 155 -155 13 -25 34 -97 47 -160 26 -120 43 -148 92 -148 29 0 73 41 73 70 0 55 -51 253 -80 311 -42 83 -137 177 -221 218 -35 17 -212 74 -394 127 l-330 97 -102 69 -103 68 1 68 0 67 85 55 c194 125 357 341 420 556 14 48 18 53 34 44 30 -16 121 -11 165 9 47 21 89 66 104 114 6 18 24 40 39 49 48 29 113 101 143 160 62 121 62 257 0 383 l-29 60 -5 265 c-4 219 -9 282 -26 362 -62 284 -190 519 -395 723 -208 208 -443 336 -724 395 -129 27 -374 35 -493 15z m351 -420 c386 -58 696 -322 820 -697 25 -75 50 -230 50 -309 0 -49 -3 -59 -25 -73 -13 -9 -26 -16 -28 -16 -2 0 -84 63 -183 140 -231 181 -276 196 -414 145 -165 -61 -470 -157 -615 -193 -205 -53 -352 -79 -542 -97 l-152 -15 -36 23 -36 22 4 125 c9 244 102 459 277 643 226 238 556 352 880 302z m373 -947 c27 -14 339 -257 350 -272 4 -6 6 -186 4 -401 l-3 -390 -27 -88 c-62 -203 -186 -374 -350 -486 -67 -45 -199 -105 -277 -126 -107 -27 -278 -31 -391 -7 -97 20 -230 75 -305 126 l-39 26 113 0 c89 0 112 -3 112 -14 0 -23 80 -95 119 -107 21 -6 97 -9 187 -7 147 3 152 4 192 32 62 42 97 119 89 193 -7 71 -45 128 -107 163 -42 24 -54 25 -195 25 -176 0 -207 -10 -265 -88 l-35 -47 -136 0 c-174 0 -237 11 -267 47 -35 43 -120 221 -137 287 -28 110 -35 220 -35 522 l0 301 98 7 c284 21 755 134 1117 270 128 48 154 53 188 34z m-1571 -275 c17 -15 18 -40 18 -366 0 -312 -2 -352 -17 -369 -20 -22 -61 -23 -85 -1 -17 15 -18 40 -18 365 0 335 1 349 20 368 24 24 57 26 82 3z m2180 0 c17 -15 18 -40 18 -373 0 -263 -3 -359 -12 -368 -7 -7 -27 -12 -44 -12 -63 0 -64 5 -64 387 0 330 1 344 20 363 24 24 57 26 82 3z m-2434 -460 l-3 -88 -28 56 c-43 87 -39 190 10 266 l18 27 3 -87 c1 -48 1 -126 0 -174z m2643 206 c41 -81 31 -203 -21 -269 l-20 -25 0 173 c0 183 4 193 41 121z m-2313 -704 c0 -5 -6 4 -13 20 -8 17 -14 37 -14 45 0 8 7 -1 14 -20 7 -19 13 -39 13 -45z m1102 -265 c24 -24 26 -57 3 -82 -14 -15 -33 -18 -136 -18 -98 0 -124 3 -139 17 -24 21 -23 58 2 83 18 18 33 20 135 20 102 0 117 -2 135 -20z m-350 -417 c127 -33 420 -21 533 22 15 6 17 1 17 -38 0 -34 -24 -101 -101 -286 l-102 -241 -126 0 -126 0 -102 245 c-74 176 -103 257 -103 286 0 38 2 41 23 35 12 -4 51 -14 87 -23z m-138 -381 c42 -97 80 -184 83 -193 5 -12 -10 -29 -53 -62 -33 -26 -65 -47 -72 -49 -8 -2 -38 71 -85 202 l-72 204 51 37 c28 21 56 38 61 38 6 0 45 -79 87 -177z m863 142 c30 -20 55 -38 55 -39 0 -10 -143 -401 -148 -407 -10 -10 -138 89 -134 104 2 7 30 74 62 148 32 74 68 156 79 183 11 26 23 47 26 47 3 0 30 -16 60 -36z m-381 -476 c-4 -13 -15 -45 -24 -73 l-17 -50 -80 -3 -81 -3 -25 76 -26 75 130 0 130 0 -7 -22z m-50 -305 c3 -16 21 -154 41 -308 19 -154 37 -295 40 -312 l6 -33 -156 0 c-154 0 -155 0 -155 23 0 12 18 160 40 330 22 169 40 311 40 317 0 6 30 10 69 10 68 0 70 -1 75 -27z" />
        </g>
      </svg>
    </div>
  );
};
