import React, { useState } from 'react';
import Chart from 'react-apexcharts'

const Donut = () => {

    // Figure out how to change series label names
    // Once labels can change

    // Figure out how to change the series values from numbers to strings and add counts to each name for a voting system
    // Center Pie chart

    const defaultValues = [45, 34, 23, 23]

    const [options, setOptions] = useState({})

    const [series, setSeries] = useState(defaultValues)

    const [newSeries, setnewSeries] = useState([])

    const [labels, setLabels] = useState(['A', 'B', 'C', 'D'])

    const [input, setInput] = useState()

    console.log(input)


    const handleSubmit = (e) => {

        if (input == undefined) {
            alert('Please enter a number')
            e.preventDefault()
        } else {
            setSeries([...series, parseInt(input)])
            setInput('')
            e.preventDefault()
        }
    }

    return (
        <div className="donut">

            <Chart options={options} labels={labels} series={series} type="donut" width="380" />

            <form action="submit" onSubmit={handleSubmit}>
                <input value={input} type="text" placeholder="Enter a vote" onChange={(e) => setInput(e.target.value)} />
                <button>Add Selection</button>
            </form>
        </div>
    )
}

export default Donut

