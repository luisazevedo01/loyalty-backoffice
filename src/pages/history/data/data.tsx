import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const mock_type_of_loyalty = [
  {
    value: 'standard',
    label: 'Standard',
    icon: CircleIcon,
  },
  {
    value: 'premium',
    label: 'Premium',
    icon: CheckCircledIcon,
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: StopwatchIcon,
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircledIcon,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CrossCircledIcon,
  },
]

export const mock_shops = [
  {
    label: 'Loja do Cabo',
    value: 'cabo',
    icon: ArrowDownIcon,
  },
  {
    label: 'Loja da Praia',
    value: 'praia',
    icon: ArrowRightIcon,
  },
  {
    label: 'Loja de Angra',
    value: 'angra',
    icon: ArrowUpIcon,
  },
]
