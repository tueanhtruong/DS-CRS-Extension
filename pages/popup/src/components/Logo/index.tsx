import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <svg width="95" height="30" viewBox="0 0 338 89" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.0942 9.39167C18.4019 8.52905 18.9691 7.78278 19.7178 7.25526C20.4665 6.72774 21.36 6.44482 22.2759 6.44531H45.1829C45.886 6.44528 46.5789 6.6123 47.2048 6.9326C47.8306 7.25289 48.3713 7.7173 48.7825 8.28757C49.1936 8.85783 49.4634 9.51762 49.5695 10.2126C49.6757 10.9075 49.6152 11.6178 49.393 12.2848L44.2387 27.7443H58.296C62.2115 27.7443 64.2065 32.4549 61.4802 35.2699L22.2156 75.7947C18.474 79.657 12.0205 76.171 13.1954 70.9244L17.7037 50.804L12.1305 50.7827C11.1378 50.7783 10.1606 50.5362 9.28071 50.0765C8.40085 49.6167 7.64398 48.9529 7.0735 48.1404C6.50302 47.328 6.13556 46.3907 6.00189 45.407C5.86822 44.4233 5.97224 43.4219 6.30523 42.4867L18.0942 9.39167ZM22.9007 11.7701L11.3211 44.2758C11.2742 44.4091 11.2598 44.5517 11.2791 44.6917C11.2984 44.8317 11.3509 44.9651 11.4321 45.0807C11.5134 45.1964 11.6211 45.2909 11.7463 45.3565C11.8714 45.4221 12.0105 45.4569 12.1518 45.4579L21.0335 45.4934C21.4317 45.4949 21.8245 45.5858 22.183 45.7592C22.5415 45.9327 22.8564 46.1843 23.1048 46.4957C23.3531 46.807 23.5284 47.1701 23.6178 47.5581C23.7072 47.9462 23.7084 48.3494 23.6213 48.738L18.3924 72.0887L56.1981 33.069H40.5433C40.122 33.0681 39.7069 32.9673 39.3321 32.7747C38.9574 32.5822 38.6337 32.3034 38.3876 31.9614C38.1416 31.6193 37.9802 31.2238 37.9168 30.8073C37.8534 30.3907 37.8898 29.9651 38.0229 29.5653L43.9512 11.7701H22.9007Z"
        fill="#F6BD10"
      />
      <path
        d="M290.107 41.3563L290.023 33.6604L298.884 32.7452L300.34 39.0683L306.705 32.0796H311.655L313.735 41.8139C313.735 41.8139 311.558 42.2853 307.204 43.2283C305.124 43.672 302.975 44.1573 300.756 44.6843L300.174 73.1383L290.772 73.9703L290.107 41.3563Z"
        fill="#656565"
      />
      <path
        d="M251.299 45.9325C251.299 42.2163 251.687 40.067 252.464 39.4846C253.24 38.9022 254.114 38.3198 255.084 37.7374C256.055 37.1273 257.123 36.531 258.288 35.9486C259.452 35.3662 260.659 34.8116 261.907 34.2846C263.182 33.7577 264.43 33.2862 265.651 32.8702C268.258 31.9828 270.199 31.5391 271.475 31.5391C272.778 31.5391 273.832 31.6084 274.636 31.7471C275.44 31.858 276.175 32.0521 276.841 32.3295C278.366 32.9673 279.226 33.8964 279.42 35.1166C280.335 40.9128 280.793 47.8184 280.793 55.8332V58.2876L260.867 58.5372V63.9451C263.03 64.472 265.609 64.9574 268.604 65.4011L275.759 66.5659C277.59 66.8432 279.462 67.1621 281.375 67.5227L278.921 76.633C271.294 75.4405 263.196 73.513 254.627 70.8506C252.658 70.2128 251.645 69.0619 251.59 67.3979L251.299 45.9325ZM271.433 49.3437C271.433 46.7368 271.17 43.9912 270.643 41.107C269.533 41.107 268.646 41.1624 267.98 41.2734C267.315 41.3843 266.649 41.5368 265.983 41.731C265.318 41.9251 264.638 42.1469 263.945 42.3965C262.309 42.9789 261.227 43.4781 260.7 43.8941V51.382L271.433 50.2173V49.3437Z"
        fill="#656565"
      />
      <path
        d="M214.573 71.5991C213.214 71.3218 212.382 70.1154 212.077 67.9799C211.578 64.3746 211.328 60.5475 211.328 56.4984C211.328 49.7039 211.897 43.3253 213.034 37.3627C213.311 35.9205 214.004 35.0053 215.114 34.6171L219.274 33.6187C223.739 32.5371 228.051 31.7328 232.211 31.2059V14.1501L241.862 12.3613L242.112 31.5387L241.238 60.7832L232.461 61.6152L232.128 40.233C228.772 40.4826 225.625 41.1621 222.685 42.2714C221.881 47.2356 221.478 51.3401 221.478 54.5849C221.478 59.2163 221.589 62.3363 221.811 63.9448C225.278 64.86 229.41 65.6365 234.208 66.2743C239.033 66.9122 242.348 67.3837 244.15 67.6887L241.571 76.6326C230.811 74.9409 224.169 73.8316 221.645 73.3047C219.149 72.7777 216.792 72.2092 214.573 71.5991Z"
        fill="#656565"
      />
      <path
        d="M173.352 45.9325C173.352 42.2163 173.74 40.067 174.516 39.4846C175.293 38.9022 176.166 38.3198 177.137 37.7374C178.108 37.1273 179.175 36.531 180.34 35.9486C181.505 35.3662 182.711 34.8116 183.959 34.2846C185.235 33.7577 186.483 33.2862 187.703 32.8702C190.31 31.9828 192.252 31.5391 193.527 31.5391C194.831 31.5391 195.885 31.6084 196.689 31.7471C197.493 31.858 198.228 32.0521 198.894 32.3295C200.419 32.9673 201.279 33.8964 201.473 35.1166C202.388 40.9128 202.846 47.8184 202.846 55.8332V58.2876L182.919 58.5372V63.9451C185.083 64.472 187.662 64.9574 190.657 65.4011L197.812 66.5659C199.642 66.8432 201.514 67.1621 203.428 67.5227L200.974 76.633C193.347 75.4405 185.249 73.513 176.68 70.8506C174.71 70.2128 173.698 69.0619 173.643 67.3979L173.352 45.9325ZM193.486 49.3437C193.486 46.7368 193.222 43.9912 192.695 41.107C191.586 41.107 190.699 41.1624 190.033 41.2734C189.367 41.3843 188.702 41.5368 188.036 41.731C187.371 41.9251 186.691 42.1469 185.998 42.3965C184.362 42.9789 183.28 43.4781 182.753 43.8941V51.382L193.486 50.2173V49.3437Z"
        fill="#BD0F72"
      />
      <path
        d="M132.05 33.8683L140.911 32.7451L142.366 39.0682L149.688 32.7451H159.921C160.448 32.7451 161.183 33.1472 162.126 33.9515C163.707 35.255 164.497 36.4197 164.497 37.4459L163.041 73.7207L153.765 74.4695L153.598 42.3546C153.266 42.2437 152.808 42.1882 152.226 42.1882C151.643 42.1882 151.102 42.2159 150.603 42.2714C150.132 42.3269 149.619 42.4101 149.064 42.521C147.761 42.7429 146.693 43.0063 145.861 43.3114L142.782 44.4346L141.659 73.3047L132.799 73.9703L132.05 33.8683Z"
        fill="#BD0F72"
      />
      <path
        d="M101.978 49.0106C101.978 55.6942 102.324 61.4904 103.018 66.3992L111.213 65.9832C112.71 60.0483 113.459 54.2521 113.459 48.5946C113.459 46.3205 113.307 44.296 113.001 42.521C111.338 41.6891 105.458 41.2731 95.3633 41.2731H93.2417C92.6593 41.2731 92.0215 41.3008 91.3281 41.3563L93.1169 31.7052C93.5884 31.6774 94.0182 31.6497 94.4065 31.622C94.8225 31.5665 95.2385 31.5388 95.6545 31.5388L96.9025 31.4556C97.3185 31.4556 98.4832 31.4556 100.397 31.4556C105.888 31.4556 111.906 32.1905 118.451 33.6603C120.531 34.1873 121.807 35.1163 122.278 36.4475C122.999 38.4998 123.36 41.8416 123.36 46.473C123.36 54.9316 122.07 63.1128 119.491 71.0167C119.269 71.7378 119.006 72.3479 118.701 72.8471C118.423 73.3463 117.924 73.6652 117.203 73.8039C116.482 73.9703 115.636 74.1228 114.665 74.2615C113.695 74.4002 112.738 74.525 111.795 74.6359C109.743 74.83 108.328 74.9271 107.552 74.9271C106.775 74.9271 105.943 74.9132 105.056 74.8855C104.169 74.8855 103.198 74.8578 102.144 74.8023C99.3707 74.6636 97.4987 74.414 96.5281 74.0535C95.5574 73.7207 94.8918 73.1383 94.5313 72.3063C94.1985 71.4743 93.8657 70.1431 93.5329 68.3128C92.7564 64.0419 92.3681 59.1747 92.3681 53.7113C92.3681 51.6313 92.4236 49.5652 92.5345 47.513L101.978 45.641V49.0106Z"
        fill="#BD0F72"
      />
      <path
        d="M30.8495 55.7492L23.6943 22.0952L34.5518 19.5576L40.6254 55.0836L41.4989 66.1491L43.3709 66.2323L50.734 42.271L47.5725 26.3383L58.3468 24.4664L63.5467 48.7605L66.4587 65.9827L68.705 65.8163C68.9824 64.0414 69.2874 61.9337 69.6202 59.4932C70.6464 52.1717 71.3674 46.8469 71.7834 43.519L72.9066 34.3255C73.6554 27.9191 74.1546 23.0242 74.4042 19.6408L85.9689 21.3464C85.9689 21.3464 85.5945 23.7037 84.8457 28.4183C83.2094 39.3729 81.4622 48.4277 79.6041 55.5828L74.945 73.637L60.2187 74.3026L55.6428 56.082H54.5612L49.7773 73.637L34.635 74.3026L30.8495 55.7492Z"
        fill="#656565"
      />
      <g clipPath="url(#clip0_44_2859)">
        <path
          d="M18.0913 9.39167C18.399 8.52905 18.9661 7.78278 19.7148 7.25526C20.4635 6.72774 21.3571 6.44482 22.273 6.44531H45.18C45.883 6.44528 46.576 6.6123 47.2018 6.9326C47.8276 7.25289 48.3684 7.7173 48.7795 8.28757C49.1907 8.85783 49.4605 9.51762 49.5666 10.2126C49.6728 10.9075 49.6123 11.6178 49.3901 12.2848L44.2358 27.7443H58.2931C62.2085 27.7443 64.2035 32.4549 61.4773 35.2699L22.2126 75.7947C18.4711 79.657 12.0175 76.171 13.1925 70.9244L17.7008 50.804L12.1276 50.7827C11.1349 50.7783 10.1576 50.5362 9.27778 50.0765C8.39792 49.6167 7.64105 48.9529 7.07057 48.1404C6.50009 47.328 6.13263 46.3907 5.99896 45.407C5.86529 44.4233 5.96931 43.4219 6.3023 42.4867L18.0913 9.39167ZM22.8977 11.7701L11.3182 44.2758C11.2713 44.4091 11.2569 44.5517 11.2762 44.6917C11.2955 44.8317 11.348 44.9651 11.4292 45.0807C11.5105 45.1964 11.6182 45.2909 11.7433 45.3565C11.8685 45.4221 12.0075 45.4569 12.1489 45.4579L21.0305 45.4934C21.4288 45.4949 21.8216 45.5858 22.1801 45.7592C22.5385 45.9327 22.8535 46.1843 23.1018 46.4957C23.3501 46.807 23.5255 47.1701 23.6149 47.5581C23.7042 47.9462 23.7054 48.3494 23.6184 48.738L18.3895 72.0887L56.1951 33.069H40.5404C40.1191 33.0681 39.704 32.9673 39.3292 32.7747C38.9544 32.5822 38.6307 32.3034 38.3847 31.9614C38.1387 31.6193 37.9773 31.2238 37.9139 30.8073C37.8505 30.3907 37.8869 29.9651 38.02 29.5653L43.9482 11.7701H22.8977Z"
          fill="#F6BD10"
        />
      </g>
      <defs>
        <clipPath id="clip0_44_2859">
          <rect width="56.7972" height="24.8488" fill="white" transform="translate(12.1562 58.5098)" />
        </clipPath>
      </defs>
    </svg>
  );
};
