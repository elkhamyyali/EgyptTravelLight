import Image from "next/image";
import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { PiWhatsappLogoLight } from "react-icons/pi";
import Logo from "../../../public/assets/srayaLogo.png";
import useFetch from "@/hooks/UseFetch";
type Props = {};

const Footer = (props: Props) => {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["settings?collection=contact"],
    endpoint: `settings?collection=contact`,
  });
  return (
    <footer className="bg-white py-10 px-10 font-sans tracking-wide mt-4">
      <div className="max-w-2xl mx-auto text-center">
        <Link href="/" className="inline-block">
          <Image src={Logo} alt="logo" className="w-48" />
        </Link>
        <p
          className="text-sm mt-8 text-black"
          dangerouslySetInnerHTML={{ __html: data?.data[3]?.value?.footerDesc }}
        />

        {/* <Link href="/" className="text-sm font-semibold text-black">
            Read more...
          </Link> */}
        <ul className="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                className="w-10 h-10 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 items-center justify-items-center">
        <li className="flex items-center">
          <div className="rounded-full flex items-center justify-center shrink-0">
            <CiPhone size={25} color="#000000" />
          </div>
          <Link href="/" className="text-black text-sm ml-3">
            <small className="block">Tel</small>
            <strong>{data?.data[3]?.value?.phone}</strong>
          </Link>
        </li>
        <li className="flex items-center">
          <div className="rounded-full flex items-center justify-center shrink-0">
            <CiMail size={25} color="#000000" />
          </div>
          <Link href="/" className="text-black text-sm ml-3">
            <small className="block">Mail</small>
            <strong>{data?.data[3]?.value?.email}</strong>
          </Link>
        </li>
        <li className="flex items-center">
          <div className="rounded-full flex items-center justify-center shrink-0">
            <LiaMapMarkerAltSolid size={25} color="#000000" />
          </div>
          <Link href="/" className="text-black text-sm ml-3">
            <small className="block">Address</small>
            <strong>{data?.data[3]?.value?.address}</strong>
          </Link>
        </li>
        <li className="flex items-center">
          <div className="rounded-full flex items-center justify-center shrink-0">
            <PiWhatsappLogoLight size={25} color="#000000" />
          </div>
          <Link href="/" className="text-black text-sm ml-3">
            <small className="block">Whatsapp</small>
            <strong>{data?.data[3]?.value?.whatsApp}</strong>
          </Link>
        </li>
      </ul>
      <hr className="my-10 border-gray-500" />
      <div className="flex max-md:flex-col gap-4">
        <ul className="flex flex-wrap gap-4">
          <li className="text-sm">
            <Link
              href="/terms"
              className="text-black font-semibold hover:underline"
            >
              Terms Condation
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="/privacy"
              className="text-black font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="/contact"
              className="text-black font-semibold hover:underline"
            >
              Contact
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="/about"
              className="text-black font-semibold hover:underline"
            >
              About Us
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="/faq"
              className="text-black font-semibold hover:underline"
            >
              FAQ
            </Link>
          </li>
        </ul>
        <p className="text-sm text-black md:ml-auto">
          © SaryaEl-nile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
