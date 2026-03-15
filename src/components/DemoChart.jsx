import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { useThemeMode } from '../contexts/ThemeContext'

const data = [
  { name: 'Mon', value: 42 },
  { name: 'Tue', value: 58 },
  { name: 'Wed', value: 51 },
  { name: 'Thu', value: 66 },
  { name: 'Fri', value: 72 },
  { name: 'Sat', value: 68 },
  { name: 'Sun', value: 82 },
]

export const DemoChart = () => {
  const { mode } = useThemeMode()
  const axisColor = mode === 'dark' ? '#94a3b8' : '#64748b'
  const tooltipStyles = {
    background: mode === 'dark' ? 'rgba(11, 6, 23, 0.9)' : 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    border:
      mode === 'dark'
        ? '1px solid rgba(99,102,241,0.3)'
        : '1px solid rgba(99,102,241,0.25)',
    color: mode === 'dark' ? '#fff' : '#0f172a',
  }
  const lineColor = mode === 'dark' ? '#3b82f6' : '#5a38f0'

  return (
    <div className="h-36 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke={axisColor} tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip contentStyle={tooltipStyles} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
