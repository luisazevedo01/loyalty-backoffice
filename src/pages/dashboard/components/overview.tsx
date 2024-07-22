import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Mon',
    total: Math.floor(Math.random() * 3000) + 500,
  },
  {
    name: 'Tue',
    total: Math.floor(Math.random() * 1000) + 500,
  },
  {
    name: 'Wed',
    total: Math.floor(Math.random() * 1000) + 500,
  },
  {
    name: 'Thu',
    total: Math.floor(Math.random() * 1000) + 500,
  },
  {
    name: 'Fri',
    total: Math.floor(Math.random() * 1000) + 500,
  },
  {
    name: 'Sat',
    total: Math.floor(Math.random() * 1000) + 500,
  },
  {
    name: 'Sun',
    total: Math.floor(Math.random() * 1000) + 500,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          tickCount={5}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='light:fill-cyan-600 fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
