import { ImagePlus, Plus, Check, Copy, User, LogOut } from "lucide-react";

/**
 * lucide-react
 * ↓ see details:
 * https://lucide.dev/icons
 */

export const Icons: any = {
    Logo: () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120.97999572753906 100"
                className="w-6 h-6 mr-2"
            >
                <path
                    fill="#3d3d6b"
                    d="M87.02 22.31l-47 77.69h27.81l33.12-54.64-13.93-23.05z"
                ></path>
                <path
                    fill="#17b0dd"
                    d="M94.42 56.09L60.49 0 0 100h27.81l32.68-54.03 20.03 33.1 13.9-22.98zM99.8 64.98L85.89 87.96 93.17 100h27.81L99.8 64.98z"
                ></path>
            </svg>
        );
    },
    Star: () => (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-100"
            >
                <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </>
    ),
    Step1: () => (
        <>
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:text-white"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                <path d="M10 10l2 -2v8"></path>
            </svg>
        </>
    ),
    Step2: () => (
        <>
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:text-white"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
            </svg>
        </>
    ),
    Step3: () => (
        <>
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:text-white"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
            </svg>
        </>
    ),
    Step4: () => (
        <>
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:text-white"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
                <path d="M14 8v8"></path>
            </svg>
        </>
    ),
    CreditsIcon: () => (
        <svg
            className="flex-shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
        >
            <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
        </svg>
    ),
    ShareXIcon: () => (
        <svg viewBox="-2 -2 24 24" className="w-5 h-5">
            <title>x</title>
            <path d="M 0.16 0.759 L 7.256 10.9 L 0.533 18.759 L 3.174 18.759 L 8.437 12.59 L 12.754 18.759 L 19.664 18.759 L 12.242 8.134 L 18.533 0.759 L 15.934 0.759 L 11.064 6.447 L 7.092 0.759 L 0.16 0.759 Z M 4 2.759 L 6.049 2.759 L 15.826 16.759 L 13.795 16.759 L 4 2.759 Z"></path>
        </svg>
    ),
    ShareLinkedinIcon: () => (
        <svg viewBox="0 -2 44 44" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <g stroke="none" strokeWidth="1">
                <g transform="translate(-702.000000, -265.000000)">
                    <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"></path>
                </g>
            </g>
        </svg>
    ),
    ShareFacebookIcon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" className="w-5 h-5">
            <g>
                <path
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                ></path>
            </g>
        </svg>
    ),
    ShareInstagramIcon: () => (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
             className="w-5 h-5"
        >
            <g stroke="none" strokeWidth="1">
                <g transform="translate(-340.000000, -7439.000000)">
                    <g transform="translate(56.000000, 160.000000)">
                        <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"></path>
                    </g>
                </g>
            </g>
        </svg>
    ),
    ShareRedditIcon: () => (
        <svg viewBox="0 0 20 20" version="1.1" aria-labelledby="title" className="w-5 h-5">
            <title>reddit</title>
            <path d="M19.549 9.103A2.087 2.087 0 0 0 16.018 7.674a10.179 10.179 0 0 0-5.504-1.758L11.443 1.455 14.503 2.098a1.43 1.43 0 1 0 .186-.872L11.186.526a.443.443 0 0 0-.529.343L9.599 5.83a10.208 10.208 0 0 0-5.576 1.758A2.087 2.087 0 1 0 1.722 11.005a4.103 4.103 0 0 0 0 .629c0 3.202 3.731 5.804 8.335 5.804s8.335-2.602 8.335-5.804a4.103 4.103 0 0 0 0-.629A2.087 2.087 0 0 0 19.549 9.103Zm-14.296 1.43a1.43 1.43 0 1 1 1.43 1.43A1.43 1.43 0 0 1 5.253 10.533Zm8.306 3.931a5.49 5.49 0 0 1-3.531 1.101 5.49 5.49 0 0 1-3.531-1.101.386 .386 0 0 1 .543-.543A4.675 4.675 0 0 0 10.014 14.822a4.689 4.689 0 0 0 2.988-.872A.386.386 0 1 1 13.559 14.522Zm-.257-2.445a1.43 1.43 0 1 1 1.43-1.43A1.43 1.43 0 0 1 13.288 12.077Z"></path>
        </svg>
    ),
    SharePinterestIcon: () => (
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <title>pinterest</title>
            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
        </svg>
    ),
    ImagePlus,
    Plus,
    Check,
    Copy,
    user: User,
    logout: LogOut,
};
