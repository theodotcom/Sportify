import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts'
import '../styles/Performance.css'
import Api from '../api'

import PropTypes from 'prop-types'

/** Component to display User's radar performances
 * @returns {Component} - React component
 */
function Performance() {
    const [performances, setPerformances] = useState([])
    let { userId } = useParams()

    useEffect(() => {
        /** Get Performance datas */
        const api = new Api()
        api.getPerformance(userId).then((data) => {
            /** Let kind matches with it's corresponding number */
            const perf = data.data.data.map((d) => {
                let kind = data.data.kind[d.kind]
                kind = kind.charAt(0).toUpperCase() + kind.slice(1)
                return { ...d, kind }
            })
            setPerformances(perf)
        })
    }, [userId])

    if(!performances){
        return 'Impossible de recuperer vos données personnelles'
    }
    return (
        performances && (
            <>
                <div className="radar_bar_chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart
                            cx="50%"
                            cy="50%"
                            outerRadius="80%"
                            data={performances}
                        >
                            <PolarGrid />
                            <PolarAngleAxis
                                tickLine={false}
                                stroke="white"
                                dataKey="kind"
                                tick={{ fontSize: 8 }}
                            />

                            <Radar
                                dataKey="value"
                                fill="#FF0101"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </>
        )
    )
}

Performance.propTypes = {
    performances: PropTypes.object
}

export default Performance