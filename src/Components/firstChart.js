import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

const Donut = () => {

    const [options, setOptions] = useState({})

    const [series, setSeries] = useState([])

    const [labels, setLabels] = useState(['A', 'B', 'C', 'D', 'E'])

    const [input, setInput] = useState('')

    const handleSeries = () => {
        setSeries([...series, 2])
        console.log('series', series)
    }

    const handleSubmit = (e) => {
        // setSeries([...series, e.target.value])
        setSeries([...series, parseInt(input)])
        console.log('input', input)
        setInput('')
        e.preventDefault()
    }


    return (
        <div className="donut">

            <Chart options={options} series={series} type="donut" width="380" />

            <form action="submit" onSubmit={handleSubmit}>
                <input value={input} type="text" placeholder="Enter a vote" onChange={(e) => setInput(e.target.value)} />
                <button>Add Selection</button>
            </form>
        </div>
    )
}

export default Donut

