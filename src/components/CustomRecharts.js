import '../styles/CustomRecharts.css'
import PropTypes from 'prop-types'

/**
 * Custom tooltip of BarChart
 * @param {array} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
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

CustomTooltip.propTypes = {
    payload: PropTypes.array
}
/**
 * Custom legend for the BarChart
 * @param {string} value - Legend value
 * @returns {Component} - React component
 */
export const CustomLegendText = (value) => {
    return (
        <>
            <span style={{ color: '#74798C' }}>{value}</span>
        </>
    )
}
CustomLegendText.propTypes = {
    value: PropTypes.object
}


/**
 * Custom tooltip of LineChart
 * @param {array} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
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

CustomTooltipAverage.propTypes = {
    payload: PropTypes.array
}