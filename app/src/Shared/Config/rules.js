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
    132,
    533,
    2025,
    8177,
    24985,
    100000,
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
        },
        postcard: {
            header: "Just to tap ❤️",
            description: [
                "A simple touch can create",
                "something magical",
                "Love is waiting!",
            ]
        }
    },
    1: {
        background: {
            linearGradient: ['#B53259', '#290727'],
            url: '/page/background-2.2.png'
        },
        postcard: {
            header: "Gentle warmth",
            description: [
                "The spark of something special",
                "a quiet reminder",
                "that someone cares"
            ]
        }
    },
    2: {
        background: {
            linearGradient: ['#856CFF', '#191162'],
            url: '/page/background-2.2.png'
        },
        postcard: {
            header: "Tender admiration",
            description: [
                "It’s soft glow of admiration,",
                "respect and quiet affection"
            ]
        }
    },
    3: {
        background: {
            linearGradient: ['#5e1fa5', '#250c42'],
            url: '/page/background-2.2.png',
        },
        postcard: {
            header: "Passionate affection",
            description: [
                "A deep, fiery love",
                "that ignites every moment"
            ]
        }
    },
    4: {
        background: {
            linearGradient: ['#F07C93', '#F07C93'],
            url: '/page/background-1.2.png',
        },
        postcard: {
            header: "Irresistible love",
            description: [
                "A magnetic pull", 
                "a love that stays with you",
                "no matter what"
            ]
        }
    },
    5: {
        background: {
            linearGradient: ['#FCD9EC', '#FCD9EC'],
            url: '/page/background-2.2.png',
        },
        postcard: {
            header: "Unbreakable bond",
            description: [
                "An eternal connection",
                "beyond time and distance"
            ]
        }
    },
    6: {
        background: {
            linearGradient: ['#FCD9EC', '#F07C93'],
            url: '/page/background-2.2.png',
        },
        postcard: {
            header: "Pure devotion",
            description: [
                "A promise, a forever, a love",
                "that asks for nothing in return",
                "but gives everything"
            ]
        }
    }
}

export const pagesText = {
    archive: {
        header: "Sent Gifts",
        text: [
            "There's nothing to see here...",
            "Keep tapping, send gifts, and soon you will see the sent gifts here!",
        ]
    },
    about: {
        header: "About TonCœur",
        text: "Sometimes, words are too much, and silence is too little. Share your feelings — exchange your taps for valentines.",
        sub: "The rules are simple:",
        list: [
            "❤️ Tap as many times as the heart you want to send",
            "❤️ Each heart represents a feeling, growing deeper with every tap",
            "❤️ Reach the next level of emotions and unlock a new connection!"
        ]
    }
}