import React from 'react';
import { 
    makeStyles,
    useTheme
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import SwiperCore, {
	Autoplay,
    Pagination,
    Navigation
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);


const icons = [
    "fab fa-html5",
    "fab fa-css3",
    "fab fa-js-square",
    "fab fa-react",
    "fab fa-node",
    "fas fa-database",
    "fab fa-java",
    "fab fa-python",
    "fab fa-atlassian"
]

const IconList = () => {
    const classes = useStyles();
    const theme = useTheme();
    const slides = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <div>
            <Swiper
                spaceBetween={30}
                speed={2500}
                slidesPerView={slides ? 5 : 6}
                loop={true}
                autoplay={{
                    "delay": 0,
                    "disableOnInteraction": false
                }} 
                watchSlidesProgress={true}
            >
                {icons.map((icon) => (
                    <SwiperSlide>
                        <div className={classes.icon}>
                            <i className={icon} />   
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: 50,
        color: '#ff0080',
        marginRight: '25px'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}));

export default IconList;