import '../styles/CustomRecharts.css'

export const CustomTooltip = ({ payload, active }) => {
    if (active) {
        return (
            <>
                <div className="daily_chart_tooltip">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}Kcal</p>
                </div>
            </>
        )
    }
    return null
}

export const CustomLegendText = (value) => {
    return (
        <>
            <span style={{ color: '#74798C' }}>{value}</span>
        </>
    )
}

export const CustomTooltipAverage = ({ payload, active }) => {
    if (active) {
        return (
            <>
                <div className="average_duration_tooltip">
                    <p>{payload[0].value}min</p>
                </div>
            </>
        )
    }
    return null
}
