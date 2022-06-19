/* eslint-disable no-undef */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Info.modules.css';
import Order from './Order';
const Payment = () => {
  const [addres, setAddres] = useState({});
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem('address'));
    setAddres(getdata);
    console.log(addres);
  }, []);
  const placed = (e) => {
    e.preventDefault();
    alert(
      `Congratulation your order of price ${addres.subtotal} is placed and deliver in 2 days`
    );
  };
  return (
    <div className="main_page">
      <div className="left">
        {/* logo */}
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?187404"
            alt="logo"
          />
        </div>
        {/* link for trace */}
        <div className="trace">
          <ul className="list">
            <li>Cart </li>&#x3e;
            <li>Information</li>&#x3e;
            <li>Payment</li>
          </ul>
        </div>
        {/* express payment */}
        <div className="addres">
          <div>
            <span>Contact :-</span> {addres.email}
          </div>
          <hr />
          <div>
            <span>Ship to :-</span>
            {addres.add},{addres.city},{addres.country},{addres.zip}
          </div>
          <hr />
          <div>
            <span>Method :- </span>Standerd: free
          </div>
        </div>
        <div className="payment">
          <label
            htmlFor="form"
            style={{ color: '#0c32f3ef', fontWeight: '600' }}
          >
            {' '}
            Payment Through Credit Card/Debit Card
          </label>
          <form>
            <div>
              <input type="text" placeholder="Input Card number" />
            </div>
            <div>
              <input type="text" placeholder="Name on Card " />
            </div>
            <div className="security">
              <div>
                <span className="expiration">
                  <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    maxLength="2"
                    size="2"
                  />

                  <input
                    type="text"
                    name="year"
                    placeholder="YY"
                    maxLength="2"
                    size="2"
                  />
                </span>
              </div>
              <div>
                <input type="numer" placeholder="security code" />
              </div>
            </div>
          </form>
        </div>
        <div className="container">
          <hr className="hr-text" data-content="OR" />
        </div>
        <div className="expres">
          <fieldset>
            <legend style={{ textAlign: 'center' }}>Checkout</legend>
            <ul>
              <li>
                <span style={{ paddingBottom: '3rem' }}>
                  <input type="radio" name="pay" />
                </span>
                <span>
                  <svg
                    width="150"
                    height="50"
                    viewBox="0 0 4317 1037"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M1105.96 326.186C1071.34 253.553 1005.7 206.635 906.786 206.635C876.426 207.164 846.593 214.661 819.588 228.543C792.584 242.427 769.128 262.328 751.032 286.711L747.422 291.109V6.44337C747.422 4.7982 746.77 3.22051 745.606 2.05722C744.443 0.8939 742.864 0.240234 741.219 0.240234H601.367C599.742 0.269795 598.194 0.936325 597.055 2.09644C595.914 3.25656 595.277 4.81756 595.277 6.44337V822.999C595.277 824.614 595.92 826.162 597.062 827.304C598.204 828.447 599.752 829.089 601.367 829.089H751.145C752.771 829.089 754.331 828.452 755.492 827.311C756.651 826.172 757.318 824.624 757.348 822.999V474.835C757.348 407.165 802.461 359.231 874.643 359.231C953.591 359.231 973.555 424.195 973.555 490.398V822.999C973.555 824.614 974.196 826.162 975.338 827.304C976.48 828.447 978.03 829.089 979.645 829.089H1129.08C1130.71 829.089 1132.27 828.452 1133.43 827.311C1134.59 826.172 1135.26 824.624 1135.29 822.999V470.549C1135.29 458.481 1135.29 446.638 1133.71 435.135C1131.14 397.437 1121.74 360.519 1105.96 326.186Z"
                        fill="#5A31F4"
                      />
                      <path
                        d="M358.093 447.206C358.093 447.206 281.851 429.273 253.768 422.055C225.684 414.837 176.623 399.498 176.623 362.392C176.623 325.286 216.21 313.443 256.362 313.443C296.513 313.443 341.176 323.143 344.672 367.693C344.813 369.299 345.552 370.791 346.742 371.879C347.933 372.965 349.488 373.563 351.1 373.558L498.734 372.994C499.603 372.996 500.463 372.819 501.26 372.474C502.057 372.129 502.774 371.623 503.367 370.987C503.96 370.353 504.416 369.602 504.705 368.783C504.994 367.963 505.113 367.093 505.05 366.226C495.915 223.668 370.837 172.69 255.459 172.69C118.652 172.69 18.6132 262.917 18.6132 362.392C18.6132 435.025 39.1399 503.147 200.533 550.516C228.842 558.749 267.302 569.463 300.912 578.825C341.288 590.104 363.055 607.134 363.055 633.976C363.055 665.104 317.942 686.758 273.618 686.758C209.444 686.758 163.879 662.961 160.157 620.215C159.963 618.652 159.202 617.212 158.016 616.172C156.831 615.132 155.305 614.564 153.728 614.576L6.43255 615.253C5.569 615.253 4.71432 615.426 3.91928 615.764C3.12425 616.101 2.40528 616.594 1.80527 617.216C1.20527 617.836 0.736446 618.572 0.426968 619.378C0.11749 620.185 -0.0263401 621.045 0.00395994 621.908C6.77099 756.459 136.698 828.978 257.829 828.978C438.283 828.978 519.825 727.474 519.825 632.397C520.051 587.734 509.787 486.003 358.093 447.206Z"
                        fill="#5A31F4"
                      />
                      <path
                        d="M2257.37 206.409C2182.38 206.409 2119.55 247.913 2079.06 297.991V212.274C2079.06 210.678 2078.43 209.145 2077.31 208.007C2076.21 206.868 2074.68 206.213 2073.08 206.185H1933.01C1931.4 206.185 1929.84 206.825 1928.7 207.967C1927.56 209.11 1926.91 210.66 1926.91 212.274V1013.04C1926.95 1014.63 1927.61 1016.16 1928.75 1017.27C1929.89 1018.39 1931.42 1019.02 1933.01 1019.02H2082.9C2084.48 1019.02 2086 1018.39 2087.12 1017.27C2088.24 1016.15 2088.87 1014.62 2088.87 1013.04V749.802H2091.13C2114.92 786.117 2180 829.653 2265.05 829.653C2424.96 829.653 2558.28 697.019 2558.28 517.806C2558.4 345.811 2425.76 206.409 2257.37 206.409ZM2243.5 677.057C2211.94 677.841 2180.83 669.2 2154.2 652.238C2127.57 635.274 2106.58 610.759 2093.93 581.82C2081.29 552.88 2077.55 520.829 2083.21 489.757C2088.85 458.685 2103.64 430.002 2125.66 407.369C2147.69 384.733 2175.96 369.175 2206.87 362.679C2237.77 356.183 2269.91 359.042 2299.18 370.893C2328.46 382.743 2353.53 403.048 2371.22 429.215C2388.9 455.383 2398.38 486.224 2398.47 517.806C2398.79 538.449 2395.03 558.955 2387.42 578.145C2379.81 597.335 2368.47 614.831 2354.07 629.628C2339.68 644.425 2322.5 656.232 2303.51 664.371C2284.54 672.511 2264.15 676.821 2243.5 677.057Z"
                        fill="#5A31F4"
                      />
                      <path
                        d="M1483.34 171.229C1343.6 171.229 1273.9 218.711 1217.95 256.72L1216.26 257.847C1213.38 259.821 1211.35 262.813 1210.58 266.221C1209.8 269.63 1210.34 273.204 1212.09 276.231L1267.36 371.419C1268.39 373.201 1269.81 374.732 1271.5 375.901C1273.2 377.071 1275.13 377.852 1277.17 378.187C1279.16 378.546 1281.2 378.459 1283.15 377.932C1285.1 377.405 1286.91 376.454 1288.45 375.141L1292.84 371.533C1321.6 347.397 1367.73 315.14 1479.39 306.343C1541.53 301.382 1595.22 317.622 1634.81 354.615C1678.34 394.767 1704.4 459.617 1704.4 528.077C1704.4 654.057 1630.18 733.23 1510.97 734.81C1412.73 734.246 1346.75 683.042 1346.75 607.364C1346.75 567.212 1364.91 541.047 1400.33 514.881C1403.03 512.947 1404.94 510.1 1405.71 506.866C1406.48 503.632 1406.05 500.229 1404.5 497.287L1354.88 403.45C1353.96 401.771 1352.72 400.289 1351.23 399.089C1349.74 397.889 1348.03 396.995 1346.19 396.458C1344.31 395.899 1342.34 395.741 1340.4 395.992C1338.45 396.245 1336.58 396.903 1334.91 397.925C1279.2 430.97 1210.85 491.422 1214.57 607.59C1219.08 755.449 1342.02 868.345 1501.83 872.97H1509.84H1520.78C1710.7 866.766 1847.85 725.787 1847.85 534.619C1847.85 359.126 1719.95 171.229 1483.34 171.229Z"
                        fill="#5A31F4"
                      />
                      <path
                        d="M3148.93 261.455H3053.73C3051.51 261.484 3049.37 262.385 3047.79 263.964C3046.2 265.544 3045.3 267.679 3045.29 269.914V469.653C3045.3 471.878 3046.21 473.999 3047.8 475.561C3049.38 477.123 3051.51 478 3053.73 478H3148.93C3206.9 478 3249.65 432.322 3249.65 369.727C3249.65 307.132 3206.9 261.455 3148.93 261.455Z"
                        fill="#5A31F4"
                      />
                      <path
                        d="M3441.38 614.802C3441.38 643.787 3465.85 659.915 3508.48 659.915C3566.45 659.915 3600.73 628.561 3600.73 572.958V556.944L3513.9 561.455C3468.1 563.71 3441.38 582.772 3441.38 614.802Z"
                        fill="#5A31F4"
                      />
                      <path
                        d="M4146.27 2.04983H2867.3C2846.33 2.04981 2825.54 6.18442 2806.17 14.2172C2786.78 22.25 2769.17 34.0237 2754.35 48.8653C2739.51 63.707 2727.75 81.3258 2719.73 100.715C2711.7 120.104 2707.59 140.883 2707.61 161.865V862.026C2707.61 904.392 2724.43 945.025 2754.38 974.992C2784.33 1004.96 2824.95 1021.81 2867.3 1021.84H4146.27C4167.28 1021.9 4188.1 1017.82 4207.53 1009.83C4226.95 1001.84 4244.61 990.093 4259.5 975.273C4274.37 960.45 4286.2 942.839 4294.28 923.445C4302.35 904.052 4306.51 883.258 4306.55 862.252V162.09C4306.58 141.042 4302.47 120.192 4294.43 100.74C4286.39 81.2884 4274.58 63.6179 4259.69 48.7448C4244.8 33.8719 4227.11 22.0899 4207.65 14.0763C4188.19 6.06265 4167.33 1.97545 4146.27 2.04983ZM3153.77 556.609H3053.17C3050.93 556.609 3048.79 557.499 3047.19 559.085C3045.61 560.672 3044.71 562.824 3044.71 565.068V708.302C3044.71 710.545 3043.82 712.697 3042.24 714.283C3040.65 715.87 3038.51 716.761 3036.26 716.761H2965.42C2963.2 716.732 2961.05 715.831 2959.47 714.25C2957.89 712.672 2957.01 710.537 2956.97 708.302V191.639C2956.97 189.397 2957.86 187.245 2959.46 185.658C2961.04 184.072 2963.18 183.181 2965.42 183.181H3153.77C3260.47 183.181 3336.82 260.889 3336.82 369.951C3336.82 479.013 3261.03 556.833 3154.35 556.833L3153.77 556.609ZM3683.86 708.19C3683.88 709.31 3683.68 710.421 3683.25 711.461C3682.83 712.5 3682.21 713.447 3681.43 714.244C3680.63 715.041 3679.7 715.675 3678.66 716.107C3677.64 716.538 3676.52 716.761 3675.4 716.761H3608.52C3607.4 716.761 3606.29 716.538 3605.26 716.107C3604.22 715.675 3603.28 715.041 3602.5 714.244C3601.72 713.447 3601.09 712.5 3600.68 711.461C3600.26 710.421 3600.05 709.31 3600.07 708.19V692.739C3600.17 691.382 3599.85 690.026 3599.12 688.874C3598.41 687.72 3597.34 686.829 3596.06 686.334C3594.8 685.84 3593.41 685.769 3592.1 686.131C3590.78 686.491 3589.62 687.266 3588.79 688.34C3568.82 710.107 3536.34 725.896 3484.57 725.896C3408.34 725.896 3357.91 686.197 3357.91 617.624C3357.18 600.904 3360.63 584.265 3367.96 569.216C3375.28 554.17 3386.26 541.19 3399.88 531.458C3427.39 510.818 3470.02 500.104 3533.29 497.622L3600.4 495.367V475.741C3600.4 436.154 3573.78 419.35 3531.03 419.35C3488.29 419.35 3461.33 434.463 3455.03 459.163C3454.52 460.907 3453.45 462.433 3451.97 463.496C3450.51 464.56 3448.72 465.098 3446.9 465.027H3380.7C3379.48 465.058 3378.27 464.82 3377.15 464.334C3376.05 463.846 3375.04 463.12 3374.23 462.206C3373.43 461.291 3372.83 460.214 3372.49 459.044C3372.14 457.875 3372.05 456.646 3372.24 455.441C3382.17 396.793 3430.66 352.243 3534.09 352.243C3643.94 352.243 3683.52 403.335 3683.52 500.892L3683.86 708.19ZM4100.49 372.995L3951.62 770.108C3917.78 862.364 3858.57 886.05 3793.71 886.05C3781.5 886.348 3769.3 884.866 3757.51 881.652C3755.67 881.157 3754.06 880.073 3752.88 878.563C3751.73 877.056 3751.1 875.208 3751.08 873.305V812.965C3751.08 811.703 3751.35 810.455 3751.88 809.311C3752.42 808.167 3753.19 807.154 3754.16 806.347C3755.14 805.538 3756.27 804.955 3757.49 804.637C3758.71 804.319 3759.99 804.274 3761.23 804.506C3771.46 806.446 3781.84 807.428 3792.25 807.44C3810.18 808.339 3827.9 803.193 3842.57 792.825C3857.22 782.457 3867.98 767.467 3873.11 750.258L3877.52 736.385C3878.2 734.529 3878.2 732.491 3877.52 730.633L3738.34 373.109C3737.91 371.831 3737.79 370.469 3738 369.137C3738.2 367.804 3738.71 366.537 3739.47 365.439C3740.26 364.341 3741.29 363.442 3742.48 362.814C3743.67 362.187 3745 361.849 3746.34 361.83H3814.02C3815.75 361.847 3817.43 362.381 3818.86 363.367C3820.29 364.351 3821.39 365.741 3822.02 367.357L3916.54 619.542C3917.17 621.189 3918.27 622.608 3919.72 623.609C3921.18 624.612 3922.9 625.147 3924.66 625.147C3926.41 625.147 3928.15 624.612 3929.59 623.609C3931.04 622.608 3932.16 621.189 3932.77 619.542L4014.78 368.034C4015.32 366.319 4016.41 364.825 4017.87 363.77C4019.33 362.714 4021.08 362.153 4022.88 362.169H4092.26C4093.59 362.163 4094.91 362.475 4096.12 363.073C4097.31 363.673 4098.36 364.545 4099.16 365.62C4099.96 366.695 4100.49 367.942 4100.72 369.263C4100.96 370.582 4100.88 371.938 4100.49 373.221V372.995Z"
                        fill="#5A31F4"
                      />
                    </g>
                  </svg>
                </span>
              </li>
              <li>
                <span>
                  <input type="radio" name="pay" />
                </span>
                <span>
                  <svg
                    role="presentation"
                    width="145px"
                    height="37px"
                    fill="#A1A1A1"
                    className="main-header__logo-image"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 435.97 173.13"
                  >
                    <path
                      d="M206.2,84.58v50.75H190.1V10h42.7a38.61,38.61,0,0,1,27.65,10.85A34.88,34.88,0,0,1,272,47.3a34.72,34.72,0,0,1-11.55,26.6q-11.2,10.68-27.65,10.67H206.2Zm0-59.15V69.18h27a21.28,21.28,0,0,0,15.93-6.48,21.36,21.36,0,0,0,0-30.63,21,21,0,0,0-15.93-6.65h-27Z"
                      fill="#5f6368"
                    ></path>
                    <path
                      d="M309.1,46.78q17.85,0,28.18,9.54T347.6,82.48v52.85H332.2v-11.9h-.7q-10,14.7-26.6,14.7-14.17,0-23.71-8.4a26.82,26.82,0,0,1-9.54-21q0-13.31,10.06-21.17t26.86-7.88q14.34,0,23.62,5.25V81.25A18.33,18.33,0,0,0,325.54,67,22.8,22.8,0,0,0,310,61.13q-13.49,0-21.35,11.38l-14.18-8.93Q286.17,46.78,309.1,46.78Zm-20.83,62.3a12.86,12.86,0,0,0,5.34,10.5,19.64,19.64,0,0,0,12.51,4.2,25.67,25.67,0,0,0,18.11-7.52q8-7.53,8-17.67-7.53-6-21-6-9.81,0-16.36,4.73C290.46,100.52,288.27,104.41,288.27,109.08Z"
                      fill="#5f6368"
                    ></path>
                    <path
                      d="M436,49.58,382.24,173.13H365.62l19.95-43.23L350.22,49.58h17.5l25.55,61.6h.35l24.85-61.6Z"
                      fill="#5f6368"
                    ></path>
                    <path
                      d="M141.14,73.64A85.79,85.79,0,0,0,139.9,59H72V86.73h38.89a33.33,33.33,0,0,1-14.38,21.88v18h23.21C133.31,114.08,141.14,95.55,141.14,73.64Z"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M72,144c19.43,0,35.79-6.38,47.72-17.38l-23.21-18C90.05,113,81.73,115.5,72,115.5c-18.78,0-34.72-12.66-40.42-29.72H7.67v18.55A72,72,0,0,0,72,144Z"
                      fill="#34a853"
                    ></path>
                    <path
                      d="M31.58,85.78a43.14,43.14,0,0,1,0-27.56V39.67H7.67a72,72,0,0,0,0,64.66Z"
                      fill="#fbbc04"
                    ></path>
                    <path
                      d="M72,28.5A39.09,39.09,0,0,1,99.62,39.3h0l20.55-20.55A69.18,69.18,0,0,0,72,0,72,72,0,0,0,7.67,39.67L31.58,58.22C37.28,41.16,53.22,28.5,72,28.5Z"
                      fill="#ea4335"
                    ></path>
                  </svg>
                </span>
              </li>
              <li>
                <span>
                  <input type="radio" name="pay" />
                </span>
                <span>
                  <label htmlFor="paypal">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      width="133px"
                      height="33px"
                      viewBox="0 0 124 33"
                      enableBackground="new 0 0 124 33"
                      // xml:space="preserve"
                    >
                      <path
                        fill="#253B80"
                        d="M46.211,6.749h-6.839c-0.468,0-0.866,0.34-0.939,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.564,0.658
	h3.265c0.468,0,0.866-0.34,0.939-0.803l0.746-4.73c0.072-0.463,0.471-0.803,0.938-0.803h2.165c4.505,0,7.105-2.18,7.784-6.5
	c0.306-1.89,0.013-3.375-0.872-4.415C50.224,7.353,48.5,6.749,46.211,6.749z M47,13.154c-0.374,2.454-2.249,2.454-4.062,2.454
	h-1.032l0.724-4.583c0.043-0.277,0.283-0.481,0.563-0.481h0.473c1.235,0,2.4,0,3.002,0.704C47.027,11.668,47.137,12.292,47,13.154z"
                      />
                      <path
                        fill="#253B80"
                        d="M66.654,13.075h-3.275c-0.279,0-0.52,0.204-0.563,0.481l-0.145,0.916l-0.229-0.332
	c-0.709-1.029-2.29-1.373-3.868-1.373c-3.619,0-6.71,2.741-7.312,6.586c-0.313,1.918,0.132,3.752,1.22,5.031
	c0.998,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.562,0.66h2.95
	c0.469,0,0.865-0.34,0.939-0.803l1.77-11.209C67.271,13.388,67.004,13.075,66.654,13.075z M62.089,19.449
	c-0.316,1.871-1.801,3.127-3.695,3.127c-0.951,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.668-1.391-0.514-2.301
	c0.295-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C62.034,17.721,62.232,18.543,62.089,19.449z"
                      />
                      <path
                        fill="#253B80"
                        d="M84.096,13.075h-3.291c-0.314,0-0.609,0.156-0.787,0.417l-4.539,6.686l-1.924-6.425
	c-0.121-0.402-0.492-0.678-0.912-0.678h-3.234c-0.393,0-0.666,0.384-0.541,0.754l3.625,10.638l-3.408,4.811
	c-0.268,0.379,0.002,0.9,0.465,0.9h3.287c0.312,0,0.604-0.152,0.781-0.408L84.564,13.97C84.826,13.592,84.557,13.075,84.096,13.075z
	"
                      />
                      <path
                        fill="#179BD7"
                        d="M94.992,6.749h-6.84c-0.467,0-0.865,0.34-0.938,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.562,0.658
	h3.51c0.326,0,0.605-0.238,0.656-0.562l0.785-4.971c0.072-0.463,0.471-0.803,0.938-0.803h2.164c4.506,0,7.105-2.18,7.785-6.5
	c0.307-1.89,0.012-3.375-0.873-4.415C99.004,7.353,97.281,6.749,94.992,6.749z M95.781,13.154c-0.373,2.454-2.248,2.454-4.062,2.454
	h-1.031l0.725-4.583c0.043-0.277,0.281-0.481,0.562-0.481h0.473c1.234,0,2.4,0,3.002,0.704
	C95.809,11.668,95.918,12.292,95.781,13.154z"
                      />
                      <path
                        fill="#179BD7"
                        d="M115.434,13.075h-3.273c-0.281,0-0.52,0.204-0.562,0.481l-0.145,0.916l-0.23-0.332
	c-0.709-1.029-2.289-1.373-3.867-1.373c-3.619,0-6.709,2.741-7.311,6.586c-0.312,1.918,0.131,3.752,1.219,5.031
	c1,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.564,0.66h2.949
	c0.467,0,0.865-0.34,0.938-0.803l1.771-11.209C116.053,13.388,115.785,13.075,115.434,13.075z M110.869,19.449
	c-0.314,1.871-1.801,3.127-3.695,3.127c-0.949,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.666-1.391-0.514-2.301
	c0.297-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C110.816,17.721,111.014,18.543,110.869,19.449z"
                      />
                      <path
                        fill="#179BD7"
                        d="M119.295,7.23l-2.807,17.858c-0.055,0.346,0.213,0.658,0.562,0.658h2.822c0.469,0,0.867-0.34,0.939-0.803
	l2.768-17.536c0.055-0.346-0.213-0.659-0.562-0.659h-3.16C119.578,6.749,119.338,6.953,119.295,7.23z"
                      />
                      <path
                        fill="#253B80"
                        d="M7.266,29.154l0.523-3.322l-1.165-0.027H1.061L4.927,1.292C4.939,1.218,4.978,1.149,5.035,1.1
	c0.057-0.049,0.13-0.076,0.206-0.076h9.38c3.114,0,5.263,0.648,6.385,1.927c0.526,0.6,0.861,1.227,1.023,1.917
	c0.17,0.724,0.173,1.589,0.007,2.644l-0.012,0.077v0.676l0.526,0.298c0.443,0.235,0.795,0.504,1.065,0.812
	c0.45,0.513,0.741,1.165,0.864,1.938c0.127,0.795,0.085,1.741-0.123,2.812c-0.24,1.232-0.628,2.305-1.152,3.183
	c-0.482,0.809-1.096,1.48-1.825,2c-0.696,0.494-1.523,0.869-2.458,1.109c-0.906,0.236-1.939,0.355-3.072,0.355h-0.73
	c-0.522,0-1.029,0.188-1.427,0.525c-0.399,0.344-0.663,0.814-0.744,1.328l-0.055,0.299l-0.924,5.855l-0.042,0.215
	c-0.011,0.068-0.03,0.102-0.058,0.125c-0.025,0.021-0.061,0.035-0.096,0.035H7.266z"
                      />
                      <path
                        fill="#179BD7"
                        d="M23.048,7.667L23.048,7.667L23.048,7.667c-0.028,0.179-0.06,0.362-0.096,0.55
	c-1.237,6.351-5.469,8.545-10.874,8.545H9.326c-0.661,0-1.218,0.48-1.321,1.132l0,0l0,0L6.596,26.83l-0.399,2.533
	c-0.067,0.428,0.263,0.814,0.695,0.814h4.881c0.578,0,1.069-0.42,1.16-0.99l0.048-0.248l0.919-5.832l0.059-0.32
	c0.09-0.572,0.582-0.992,1.16-0.992h0.73c4.729,0,8.431-1.92,9.513-7.476c0.452-2.321,0.218-4.259-0.978-5.622
	C24.022,8.286,23.573,7.945,23.048,7.667z"
                      />
                      <path
                        fill="#222D65"
                        d="M21.754,7.151c-0.189-0.055-0.384-0.105-0.584-0.15c-0.201-0.044-0.407-0.083-0.619-0.117
	c-0.742-0.12-1.555-0.177-2.426-0.177h-7.352c-0.181,0-0.353,0.041-0.507,0.115C9.927,6.985,9.675,7.306,9.614,7.699L8.05,17.605
	l-0.045,0.289c0.103-0.652,0.66-1.132,1.321-1.132h2.752c5.405,0,9.637-2.195,10.874-8.545c0.037-0.188,0.068-0.371,0.096-0.55
	c-0.313-0.166-0.652-0.308-1.017-0.429C21.941,7.208,21.848,7.179,21.754,7.151z"
                      />
                      <path
                        fill="#253B80"
                        d="M9.614,7.699c0.061-0.393,0.313-0.714,0.652-0.876c0.155-0.074,0.326-0.115,0.507-0.115h7.352
	c0.871,0,1.684,0.057,2.426,0.177c0.212,0.034,0.418,0.073,0.619,0.117c0.2,0.045,0.395,0.095,0.584,0.15
	c0.094,0.028,0.187,0.057,0.278,0.086c0.365,0.121,0.704,0.264,1.017,0.429c0.368-2.347-0.003-3.945-1.272-5.392
	C20.378,0.682,17.853,0,14.622,0h-9.38c-0.66,0-1.223,0.48-1.325,1.133L0.01,25.898c-0.077,0.49,0.301,0.932,0.795,0.932h5.791
	l1.454-9.225L9.614,7.699z"
                      />
                    </svg>
                  </label>
                </span>
              </li>
            </ul>
          </fieldset>
          <div className="sippingbtn_flex">
            <div className="return_btn">&#60; Return to shop more</div>
            <div className="shipping_btn">
              <button className="placedBtn" onClick={placed}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <Order />
      </div>
    </div>
  );
};

export default Payment;
