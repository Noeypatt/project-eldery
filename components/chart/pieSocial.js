import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const PieSocial = () => {
    const isBigScreen = useMediaQuery({ minDeviceWidth: 1281 })
    const isMobile = useMediaQuery({ maxWidth: 1280 })
    const isSmallScreen = useMediaQuery({ maxWidth: 576 })

    const [options, setOptions] = useState({
        title: { text: "สภาพบ้านพักอาศัยของประชากรผู้สูงอายุ" },
        legend: {
            position: 'bottom'
        },
        legend: {
            position: 'bottom'
        },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },
        responsive: [{
            breakpoint: 992,
            options: {
                legend: {
                    offsetY: 80,
                    itemMargin: {
                        horizontal: 1,
                        vertical: 1
                    },
                },
            },
        }],
        labels: ["เหมาะสม คงทนถาวร", "บ้านที่อยู่อาศัยทรุดโทรม สภาพเก่ามาก", "วัสดุก่อสร้างไม่ถาวร ไม่คงทน", "อื่นๆ"],
        colors: ['#7bdcb5', '#d3b3e5', '#ffd54f', '#90a4ae']
    })

    const [series, setSeries] = useState([20, 20, 20, 20])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!J98:J101')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!K98:K101')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)

            setOptions({
                labels: _.flatten(list)
            })
        } catch (err) {
            console.log(err);
        }
    }

    const listData = async (token, value) => {
        try {

            var result = await Sheetapi.getSheet(token, value)
            var data = _.flatten(result).map(Number)
            setSeries(data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <React.Fragment>
            {
                isBigScreen ?
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        width="400"
                        height="200"
                    />
                    :
                    isMobile ?
                        <Chart
                            options={options}
                            series={series}
                            type="donut"
                            width="300"
                            height="200"
                        />
                        :
                        isSmallScreen ?
                            <Chart
                                options={options}
                                series={series}
                                type="donut"
                                width="200"
                                height="100"
                            />
                            :
                            null
            }
        </React.Fragment>
    )
}
export default PieSocial;
