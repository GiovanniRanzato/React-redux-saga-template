import {FOOTER_TEXT} from './text';
import {LANGUAGE}     from './text';
import {FOOTER_PATH} from './path';
export const  FooterConfig =  {
    sections: [
        {
            id: 'section1',
            text: FOOTER_TEXT.SECTION_1[LANGUAGE]
        }
    ],
    links: [
        {
            id: 'link1',
            icon: "fab fa-facebook-square",
            path: FOOTER_PATH.FACEBOOK
        },
        {
            id: 'link2',
            icon: "fab fa-twitter-square",
            path: FOOTER_PATH.INSTAGRAM
        },
        {
            id: 'link3',
            icon: "fab fa-linkedin",
            path: FOOTER_PATH.LINKEDIN
        },
        {
            id: 'link4',
            icon: "fab fa-twitter-square",
            path: FOOTER_PATH.TWITTER
        }
    ]
}
