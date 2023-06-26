import { useState } from "react";
import Swiper from "swiper";

export function useCyberDefenses() {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>(new Swiper());
    const onSwiper = (swiper: Swiper) => {
        setThumbsSwiper(swiper);
    }

    return {
        onSwiper,
        setThumbsSwiper,
        thumbsSwiper
    }
}
