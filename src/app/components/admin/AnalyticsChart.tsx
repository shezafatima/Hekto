"use client"
import {LineChart,Line,XAxis,YAxis ,CartesianGrid,ResponsiveContainer} from 'recharts'
import {Card, CardHeader,CardTitle, CardDescription, CardContent} from '@/components/ui/card'
import analytics from '@/app/data/analytics'
function AnalyticsChart() {
  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle>Analytics For This Year</CardTitle>
            <CardDescription>
               Rating per Month
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{width:'100%',height:300}}>
                <ResponsiveContainer>
                    <LineChart width={1100} height={300} data={analytics}>
<Line type='monotone' dataKey='uv' stroke='#8884d8'/>
<CartesianGrid stroke='#ccc'/>
<XAxis dataKey='name'/>
<YAxis/>
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </CardContent>
    </Card>
    </>
  )
}

export default AnalyticsChart