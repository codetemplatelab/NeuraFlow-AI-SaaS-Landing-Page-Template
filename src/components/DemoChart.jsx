import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Mon', value: 42 },
  { name: 'Tue', value: 58 },
  { name: 'Wed', value: 51 },
  { name: 'Thu', value: 66 },
  { name: 'Fri', value: 72 },
  { name: 'Sat', value: 68 },
  { name: 'Sun', value: 82 },
]

export const DemoChart = () => (
  <div className="h-36 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
        <YAxis hide />
        <Tooltip
          contentStyle={{
            background: 'rgba(15, 23, 42, 0.9)',
            borderRadius: 12,
            border: '1px solid rgba(148,163,184,0.2)',
            color: '#fff',
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#7c88ff"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

