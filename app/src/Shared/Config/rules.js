import img0 from '/tap/heart-0.png';
import img1 from '/tap/heart-1.png';
import img2 from '/tap/heart-2.png';
import img3 from '/tap/heart-3.png';
import img4 from '/tap/heart-4.png';
import img5 from '/tap/heart-5.png';
import img6 from '/tap/heart-6.png';

const node_env = 'DEVELOPMENT';
const gradesProd = [
    0,
    16,
    32,
    2025,
    8177,
    24985,
    101364,
]

const gradesDev = [
    0,
    10,
    30,
    60,
    90,
    140,
    200,
]

export const grades = node_env === 'DEVELOPMENT' ? gradesDev : gradesProd;

export const imagesByGrade = {
    0: img0,
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6
}

export const windowStateByGrade = {
    0: {
        background: {
            linearGradient: ['#5e1fa5', '#250c42'],
            url: '/page/background-2.2.png'
        }
    },
    1: {
        background: {
            linearGradient: ['#B53259', '#290727'],
            url: '/page/background-2.2.png'
        }
    },
    2: {
        background: {
            linearGradient: ['#856CFF', '#191162'],
            url: '/page/background-2.2.png'
        }
    },
    3: {
        background: {
            linearGradient: ['#5e1fa5', '#250c42'],
            url: '/page/background-2.2.png',
        }
    },
    4: {
        background: {
            linearGradient: ['#F07C93', '#F07C93'],
            url: '/page/background-1.2.png',
        }
    },
    5: {
        background: {
            linearGradient: ['#FCD9EC', '#FCD9EC'],
            url: '/page/background-1.2.png',
        }
    },
    6: {
        background: {
            linearGradient: ['#FCD9EC', '#F07C93'],
            url: '/page/background-2.2.png',
        }
    }
}