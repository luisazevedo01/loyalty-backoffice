import {
  IconApps,
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/app',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'History',
    label: '3',
    href: '/app/history',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Reviews',
    label: '9',
    href: '/app/reviews',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Users',
    label: '',
    href: '/app/users',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Promotions',
    label: '',
    href: '/app/promotions',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/app/settings',
    icon: <IconSettings size={18} />,
  },
  /*   {
    title: 'Temporary',
    label: '',
    href: '/temporary',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Apps',
        label: '9',
        href: '/apps',
        icon: <IconTruck size={18} />,
      },
      {
        title: 'Extra Components',
        label: '',
        href: '/extra-components',
        icon: <IconBoxSeam size={18} />,
      },
    ],
  }, 
  {
    title: 'Error Pages',
    label: '',
    href: '',
    icon: <IconExclamationCircle size={18} />,
    sub: [
      {
        title: 'Not Found',
        label: '',
        href: '/404',
        icon: <IconError404 size={18} />,
      },
      {
        title: 'Internal Server Error',
        label: '',
        href: '/500',
        icon: <IconServerOff size={18} />,
      },
      {
        title: 'Maintenance Error',
        label: '',
        href: '/503',
        icon: <IconBarrierBlock size={18} />,
      },
    ],
  },
  {
    title: 'Authentication',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Sign In (email + password)',
        label: '',
        href: '/sign-in',
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Sign In (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Sign Up',
        label: '',
        href: '/sign-up',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Forgot Password',
        label: '',
        href: '/forgot-password',
        icon: <IconHexagonNumber4 size={18} />,
      },
      {
        title: 'OTP',
        label: '',
        href: '/otp',
        icon: <IconHexagonNumber5 size={18} />,
      },
    ],
  }, */
]
