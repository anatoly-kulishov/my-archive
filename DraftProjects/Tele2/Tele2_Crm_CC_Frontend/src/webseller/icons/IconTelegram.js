import React from 'react'
import Icon from '@ant-design/icons'

const SvgTelegram = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
    <circle cx='16' cy='16' r='16' fill='url(#paint0_linear_10956_15399)' />
    <path
      d='M7.24237 15.8319L16.5732 11.8127C21.0166 9.96454 21.9399 9.64352 22.5417 9.63293C22.6741 9.63059 22.97 9.66339 23.1617 9.81894C23.3236 9.95027 23.3681 10.1277 23.3894 10.2522C23.4108 10.3767 23.4373 10.6604 23.4162 10.8821C23.1754 13.412 22.1335 19.5517 21.6035 22.3853C21.3791 23.5843 20.9379 23.9863 20.51 24.0257C19.5809 24.1112 18.8753 23.4116 17.9754 22.8217L14.4047 20.4232C12.825 19.3822 13.849 18.8101 14.7493 17.875C14.9849 17.6302 19.0788 13.9066 19.158 13.5688C19.1676 13.5266 19.1771 13.3691 19.0835 13.2859C18.99 13.2027 18.8518 13.2315 18.7522 13.2538C18.611 13.2859 16.3614 14.7728 12.0034 17.7146C11.3648 18.1531 10.7864 18.3668 10.2682 18.3556C9.69693 18.3432 8.59802 18.0326 7.78109 17.767C6.77907 17.4413 5.98269 17.2691 6.05206 16.7159C6.08816 16.4278 6.48493 16.1332 7.24234 15.832L7.24237 15.8319Z'
      fill='white'
    />
    <defs>
      <linearGradient
        id='paint0_linear_10956_15399'
        x1='0.118672'
        y1='0'
        x2='0.118672'
        y2='31.7627'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2AABEE' />
        <stop offset='1' stopColor='#229ED9' />
      </linearGradient>
    </defs>
  </svg>
)

export default function IconTelegram (props) {
  return <Icon component={SvgTelegram} {...props} />
}
