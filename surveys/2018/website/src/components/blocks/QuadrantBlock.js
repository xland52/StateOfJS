import React from 'react'
import QuadrantChart from '../charts/QuadrantChart'
import BlockTitle from '../elements/BlockTitle'

const legend = [
    ['Assess', 'Low usage, high satisfaction. Technologies worth keeping an eye on.'],
    ['Adopt', 'High usage, high satisfaction. Safe technologies to adopt.'],
    ['Avoid', `Low usage, low satisfaction. Technologies probably best avoided currently.`],
    [
        'Analyze',
        `High usage, low satisfaction. Reassess these technologies if you're currently using them.`
    ]
]

const QuadrantLegend = () => (
    <div className="Quadrants__Chart__Legend">
        {/* <h3 className="Quadrants__Chart__Legend__Title">Four Quadrants</h3> */}
        <div className="Quadrants__Chart__Legend__Items">
            {legend.map(([label, description]) => (
                <div className="Quadrants__Chart__Legend__Item" key={label}>
                    <strong>{label}</strong>: {description}
                </div>
            ))}
        </div>
    </div>
)

const QuadrantBlock = ({ tools, chartId, values }) => (
    <div className="Quadrants__Block block block--chart block--quadrant">
        <BlockTitle chartId={chartId} values={values} />
        <div className="Quadrants__Block__Content block__content block__content--quadrant">
            <div
                className="Quadrants__Block__Chart block__chart block__chart--quadrant"
                id={chartId}
            >
                <QuadrantChart tools={tools} />
            </div>
            <QuadrantLegend />
        </div>
    </div>
)

export default QuadrantBlock
