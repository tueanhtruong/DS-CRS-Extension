import { Button } from '@mui/material';
import type { UserInfo } from '@src/context';
import { useAppContext } from '@src/context';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const { user = {}, setUser } = useAppContext();
  const handleFetchEmail = () => {
    chrome.identity.getAuthToken({ interactive: true }, token => {
      if (chrome.runtime.lastError) {
        console.error('Error getting token:', chrome.runtime.lastError.message);
        return;
      }

      // Use the token to fetch user info
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => response.json())
        .then(userInfo => {
          console.log(userInfo);
          setUser?.(userInfo as UserInfo);
        })
        .catch(error => console.error('Error fetching user info:', error));
    });
  };

  useEffect(() => {
    handleFetchEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      <svg width="351" height="220" viewBox="0 0 351 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M141.492 29.0225C143.801 30.081 143.609 33.016 145.293 34.6038C146.881 36.1434 150.056 36.2397 151.307 38.0199C151.548 38.3567 151.404 38.501 151.355 38.886C150.201 40.57 147.218 41.5323 145.341 42.3983C144.283 44.4191 143.705 46.6805 142.117 48.3164C141.989 48.3164 141.861 48.3004 141.733 48.2683C139.904 47.7872 138.846 43.8899 137.835 42.3502C137.771 42.2861 137.723 42.2219 137.691 42.1578C136.055 41.2436 134.082 40.7143 132.687 39.5115C132.206 39.0784 132.11 38.886 132.062 38.2123C133.12 36.5765 136.103 35.9029 137.883 35.1811C139.375 33.2565 139.808 30.8027 141.492 29.0225Z"
          fill="black"
        />
        <path
          d="M138.846 40.7144C140.241 39.8484 142.647 40.1852 144.235 40.5701C144.299 40.6021 144.363 40.6182 144.427 40.6182C143.08 42.0616 142.454 43.7456 141.684 45.5259C140.915 43.7456 140.241 42.1097 138.846 40.7144Z"
          fill="#FADD7F"
        />
        <path
          d="M134.9 38.5491C138.99 37.3462 139.856 35.9028 141.877 32.3423C143.369 35.8065 144.764 37.1056 148.228 38.5491C146.977 39.2227 145.678 39.8963 144.427 40.618C144.363 40.618 144.299 40.602 144.235 40.5699C142.647 40.185 140.241 39.8482 138.846 40.7142C137.595 39.8001 136.296 39.1746 134.9 38.5491Z"
          fill="#FADD7F"
        />
        <path
          d="M194.996 41.869C198.652 40.8105 202.55 40.2812 206.254 39.5114C208.805 39.0302 211.355 38.2123 213.953 37.8274C214.819 37.7311 215.685 37.683 216.551 37.9236C217.321 39.5114 213.039 57.8431 213.857 61.8847C214.29 64.1461 217.658 63.4244 219.149 64.5791C219.486 64.8197 219.39 64.9159 219.486 65.3008C218.043 67.899 194.274 88.4921 190.858 91.1865C188.067 93.3998 185.132 95.5168 182.005 97.2008C173.007 101.964 165.068 103.359 155.301 100.376C151.5 103.696 147.94 107.305 144.379 110.865C142.984 112.261 141.685 113.848 140.193 115.148C139.904 115.34 139.712 115.436 139.375 115.484C138.798 115.244 138.75 115.244 138.461 114.666C138.798 112.646 151.692 100.858 153.809 98.7886C153.521 97.5376 153.264 96.2866 153.04 95.0357C151.692 86.2788 155.012 76.8964 160.113 69.9198C161.684 67.8028 163.384 65.798 165.213 63.9055C171.516 57.3138 178.348 51.1551 185.084 44.9965C186.912 43.3606 188.548 41.2916 190.473 39.752C191.05 39.3189 191.483 39.1265 192.157 38.9821C192.927 39.3189 192.975 39.5114 193.456 40.185C193.36 40.5699 193.215 40.8105 193.504 41.1473C193.889 41.5322 194.466 41.6765 194.996 41.869Z"
          fill="black"
        />
        <path
          d="M211.451 40.522L214.434 39.8003C213.279 46.9213 211.836 55.3413 211.595 62.5104C210.681 62.4142 209.767 62.2217 208.853 62.3661C208.997 62.0774 208.997 62.0774 209.141 61.6925C209.719 60.1047 211.884 41.34 211.451 40.522Z"
          fill="#F29792"
        />
        <path
          d="M194.177 50.3374C196.439 51.444 198.652 51.9252 201.058 52.6469C201.683 53.4167 201.924 53.946 202.164 54.9083C202.838 57.4584 204.762 59.9122 206.254 62.0774C202.052 62.1094 197.866 62.334 193.696 62.751C195.957 60.682 198.074 58.5169 200.288 56.3998C199.47 56.448 199.133 56.3517 198.411 56.0149C196.294 57.4904 194.322 59.1744 192.493 61.067L194.177 50.3374Z"
          fill="#FADD7F"
        />
        <path
          d="M198.411 56.0147C198.315 54.9562 198.171 53.9458 198.893 53.1279C199.614 53.0798 199.711 53.2722 200.336 53.6571C200.769 54.2826 201.01 54.5232 201.058 55.293C200.865 55.8223 200.721 56.111 200.288 56.3997C199.47 56.4478 199.133 56.3515 198.411 56.0147Z"
          fill="#F6C852"
        />
        <path
          d="M173.921 82.2373C175.845 80.1683 178.107 77.1852 180.561 75.7899C182.485 74.7314 191.675 74.0578 194.418 73.6247C197.722 73.1436 201.009 72.5341 204.281 71.7964C202.645 75.838 197.497 75.8861 196.342 77.8107C192.301 79.7353 178.829 81.4674 173.921 82.2373Z"
          fill="#F5A73F"
        />
        <path
          d="M191.002 65.3009C198.027 64.5311 205.052 64.2424 212.125 64.7235C211.259 68.1396 207.602 68.9095 205.918 71.5077C205.341 71.7001 205.629 71.7001 205.148 71.6039C205.292 71.4595 205.485 71.2671 205.581 71.1709C205.918 70.7378 205.822 70.4491 205.822 69.968C205.389 69.6793 205.244 69.5831 204.667 69.6312C202.598 69.8237 200.481 70.401 198.412 70.786C193.312 71.6039 188.212 72.47 183.063 73.1436C185.517 70.401 188.164 67.6104 191.002 65.3009Z"
          fill="url(#paint0_linear_15_11431)"
        />
        <path
          d="M193.456 40.1851C193.359 40.57 193.215 40.8105 193.504 41.1474C193.889 41.5323 194.466 41.6766 194.995 41.8691C195.236 42.4946 195.38 43.0719 195.958 43.4568C199.614 43.4087 207.505 41.3398 211.451 40.5219C211.884 41.3398 209.718 60.1045 209.141 61.6923C208.997 62.0772 208.997 62.0772 208.852 62.3659C206.447 59.3828 205.436 55.678 203.704 52.4062C202.549 50.1929 197.449 49.375 195.043 48.6532C194.658 48.8457 194.274 48.9419 193.792 49.0381C192.83 47.9796 192.974 44.2748 192.83 42.7832C192.782 41.6766 192.878 41.1955 193.456 40.1851Z"
          fill="#F6D8B4"
        />
        <path
          d="M212.125 64.7236H217.658C212.365 69.8238 206.688 74.539 201.155 79.3986C190.425 88.8291 179.455 100.184 163.914 99.9435C161.46 99.8954 159.151 99.5105 156.793 98.8369C158.333 97.4416 159.969 96.1425 161.364 94.6028C166.031 94.1698 183.737 91.1386 186.576 88.5885L186.72 88.0111C186.576 87.7705 186.528 87.4819 186.191 87.4337C185.132 87.2413 166.368 92.0046 163.529 92.582C165.021 90.7536 166.897 88.4923 168.918 87.2413C169.784 86.2309 170.891 85.4129 171.901 84.5469C179.359 84.2101 187.057 82.2855 194.37 80.6977C195.044 80.5052 195.621 80.3128 196.247 79.976C196.584 79.158 196.439 78.6769 196.343 77.8108C197.498 75.8862 202.646 75.8381 204.282 71.7965L205.148 71.604C205.629 71.7002 205.341 71.7003 205.918 71.5078C207.602 68.9096 211.259 68.1398 212.125 64.7236Z"
          fill="#F4993A"
        />
        <path
          d="M171.9 84.5469C179.358 84.2101 187.056 82.2855 194.37 80.6978L194.755 81.0827L194.658 81.4676C191.05 83.6327 183.207 84.1139 178.829 85.2686C177 85.7498 175.124 86.664 173.344 87.3857L173.151 87.2413C174.161 86.279 178.251 85.7017 178.636 84.7394L178.54 84.4507L177.963 84.2582L178.203 84.5469L178.107 84.3063C176.808 84.2101 172.477 84.595 171.515 85.413C170.89 85.9422 169.831 87.2894 169.061 87.3376L168.917 87.2413C169.783 86.2309 170.89 85.413 171.9 84.5469Z"
          fill="#F3B952"
        />
        <path
          d="M191.868 41.6284C193.696 45.2851 190.713 58.8535 189.895 63.3281C187.297 65.2527 185.036 67.8509 182.726 70.1604C183.496 66.1669 184.41 62.2215 185.276 58.228C185.709 56.3034 186.335 54.5713 186.527 52.5504C186.624 51.5881 186.768 50.0004 186.094 49.2305C186.062 49.2626 186.014 49.2947 185.95 49.3268C184.17 50.7221 180.946 69.1981 180.128 73.0473C177.722 75.2124 175.509 77.57 173.392 80.0239L176.52 66.3112C177.097 63.7611 178.107 60.8261 178.155 58.228C177.867 57.7468 177.867 57.7949 177.338 57.6025C177.241 57.6506 177.193 57.6506 177.097 57.6987C176.568 58.0836 176.327 58.661 176.087 59.2384C175.172 61.7884 174.787 64.6272 174.162 67.2735C173.039 72.4057 171.836 77.5219 170.553 82.6221L168.869 84.1617C167.041 85.8939 165.261 87.7222 163.432 89.5025C164.202 86.808 168.533 70.1123 168.244 68.8132C167.715 68.5245 167.715 68.5245 167.089 68.6207C165.213 70.3528 161.893 88.2034 160.979 92.0044C159.214 93.8007 157.434 95.5649 155.638 97.297C154.82 94.0734 154.772 90.4648 155.205 87.1448C157.322 71.7482 170.361 61.2592 181.187 51.3957C184.699 48.172 188.067 44.5153 191.868 41.6284Z"
          fill="#F6C852"
        />
        <defs>
          <linearGradient
            id="paint0_linear_15_11431"
            x1="200.961"
            y1="72.8"
            x2="198.058"
            y2="61.3372"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5992F" />
            <stop offset="1" stopColor="#FDCC60" />
          </linearGradient>
        </defs>
      </svg>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          position: 'absolute',
          top: 110,
        }}>
        {user ? <p>{`Log in as ${user?.email}`}</p> : <p>Loading...</p>}
        <Button
          variant="contained"
          onClick={() => {
            setUser?.({ ...(user as UserInfo), login: true });
            navigate('../event');
          }}>
          Login
        </Button>
      </div>
      <img alt="top-event" src="/popup/topEvents.png" style={{ maxWidth: '100%' }} />
    </div>
  );
}
