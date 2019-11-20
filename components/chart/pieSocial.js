import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class PieSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: {},
            datalist: [],
            series: [],
            data: [],
        }
    }


    async componentDidMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!N102:N106')
        await this.listData()
    }

    listName = async (value) => {
        try {
            this.list = await Sheetapi.getSheet(this.access_token, value)
            for (let i = 0; i < this.list.length; i++) {

                this.setState(prevState => ({
                    datalist: [...prevState.datalist, this.list[i][0]],
                }))
            }

            this.setState({
                options: {
                    labels: this.state.datalist,
                    title: { text: "สภาพบ้านพักอาศัย" },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 100
                            },
                            legend: {
                                position: 'bottom'
                            },


                        }
                    }],

                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " คน"
                            }
                        }
                    },

                    colors: ['#7bdcb5', '#d3b3e5', '#ffd54f', '#90a4ae']
                }
            })

        } catch (err) {
            console.log(err);
        }
    }

    listData = async () => {
        try {

            this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!O102:O106')

            for (let i = 0; i < this.list.length; i++) {

                this.setState(prevState => ({
                    data: [...prevState.data, parseInt(this.list[i][0])],
                }))
            }

            this.setState({
                series: this.state.data,
            })

        } catch (err) {
            console.log(err);
        }

    }

    render() {

        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="pie"
                width="500"
                height="250"
            />
        );
    }
}

export default PieSocial;
