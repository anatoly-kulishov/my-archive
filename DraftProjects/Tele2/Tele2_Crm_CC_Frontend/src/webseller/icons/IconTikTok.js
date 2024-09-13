import React from 'react'
import Icon from '@ant-design/icons'

const SvgTikTok = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
    <circle cx='16' cy='16' r='16' fill='#010101' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.4854 14.2204C20.4192 14.8876 21.5632 15.2801 22.7988 15.2801V12.9037C22.5649 12.9038 22.3317 12.8794 22.1029 12.8309V14.7015C20.8675 14.7015 19.7236 14.309 18.7895 13.6418V18.4913C18.7895 20.9173 16.8219 22.8838 14.3948 22.8838C13.4892 22.8838 12.6475 22.6102 11.9482 22.1409C12.7463 22.9564 13.8592 23.4624 15.0905 23.4624C17.5177 23.4624 19.4855 21.4959 19.4855 19.0698V14.2204H19.4854ZM20.3438 11.8229C19.8665 11.3018 19.5532 10.6283 19.4854 9.88376V9.57812H18.826C18.9919 10.5244 19.5581 11.3329 20.3438 11.8229ZM13.4833 20.2793C13.2167 19.9299 13.0726 19.5024 13.0733 19.0629C13.0733 17.9533 13.9733 17.0537 15.0836 17.0537C15.2905 17.0536 15.4962 17.0853 15.6935 17.1478V14.7184C15.463 14.6868 15.2304 14.6734 14.9979 14.6783V16.5693C14.8006 16.5068 14.5948 16.4751 14.3878 16.4752C13.2775 16.4752 12.3775 17.3748 12.3775 18.4845C12.3775 19.2691 12.8274 19.9484 13.4833 20.2793Z'
      fill='#EE1D52'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.7892 13.6418C19.7233 14.309 20.8671 14.7015 22.1026 14.7015V12.8309C21.413 12.6842 20.8025 12.3239 20.3434 11.8229C19.5577 11.3329 18.9916 10.5244 18.8256 9.57812H17.0936V19.0697C17.0897 20.1763 16.1912 21.0722 15.0832 21.0722C14.4303 21.0722 13.8503 20.7612 13.4829 20.2793C12.8269 19.9484 12.3771 19.2691 12.3771 18.4845C12.3771 17.3748 13.277 16.4752 14.3874 16.4752C14.6001 16.4752 14.8051 16.5083 14.9975 16.5693V14.6783C12.613 14.7276 10.6953 16.6749 10.6953 19.0698C10.6953 20.2653 11.1729 21.3491 11.9479 22.141C12.6472 22.6103 13.4889 22.8839 14.3945 22.8839C16.8216 22.8839 18.7892 20.9173 18.7892 18.4914V13.6418Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.103 12.8313V12.3255C21.4811 12.3264 20.8715 12.1524 20.3438 11.8232C20.8109 12.3343 21.4259 12.6867 22.103 12.8313ZM18.8261 9.57851C18.8102 9.48809 18.7981 9.39705 18.7896 9.30564V9H16.3981V18.4917C16.3943 19.5981 15.4959 20.4941 14.3878 20.4941C14.0625 20.4941 13.7554 20.4169 13.4834 20.2797C13.8507 20.7616 14.4307 21.0726 15.0837 21.0726C16.1915 21.0726 17.0901 20.1766 17.094 19.0701V9.57851H18.8261ZM14.998 14.6787V14.1402C14.7981 14.1129 14.5967 14.0993 14.395 14.0994C11.9676 14.0994 10 16.066 10 18.4917C10 20.0126 10.7733 21.3529 11.9484 22.1413C11.1734 21.3494 10.6958 20.2656 10.6958 19.0701C10.6958 16.6753 12.6135 14.728 14.998 14.6787Z'
      fill='#69C9D0'
    />
  </svg>
)

export default function IconTikTok (props) {
  return <Icon component={SvgTikTok} {...props} />
}
