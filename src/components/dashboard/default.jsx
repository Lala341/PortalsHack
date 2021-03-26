import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import DatePicker from "react-datepicker";
import ApexCharts from 'react-apexcharts'
import ChartistChart from 'react-chartist';
import Knob from "knob";
import { Currentlysale, Marketvalue } from './chartsData/apex-charts-data'
import { smallchart1data, smallchart1option, smallchart2data, smallchart2option, smallchart3data, smallchart3option, smallchart4data, smallchart4option } from './chartsData/chartist-charts-data'
import { Send, Clock } from 'react-feather';
import {Dashboard,Summary,NewsUpdate,Appointment,Notification,MarketValue,Chat,New,Tomorrow,Yesterday,Daily,Weekly,Monthly,Store,Online,ReferralEarning,CashBalance,SalesForcasting,Purchase,Sales,SalesReturn,PurchaseRet,PurchaseOrderValue,ProductOrderValue,Pending,Yearly,Hot,Today,VenterLoren,Done,JohnLoren,Year,Month,Day,RightNow} from '../../constant'


const Default = (props) => {

  const [daytimes,setDayTimes] = useState()
  const today = new Date()
  const curHr = today.getHours()
  const curMi = today.getMinutes()
  const [meridiem,setMeridiem] = useState("AM");
  // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());
  const [series, setSeries]=useState([]);

  const handleChange = date => {
    setDate(date)
  };
  const loadData =()=>{
    var url =  "http://127.0.0.1:5000/getall/?lat=2&lon=3";
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then((response) => {
      var ress=JSON.parse(response);
 var se=[{
  name: 'series1',
  data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0]
}, {
  name: 'series2',
  data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0]
}];
console.log(ress);
console.log(ress.length);
console.log(ress[0]["v1"]);
console.log(ress[0]["SWGDN"]);
console.log(ress[0]);

var data1=[];
var data2=[];
for(var i=0;i<ress.length;i++){
  data1.push(ress[i]["v1"]);
  data2.push(ress[i]["SWGDN"]);
}

se[0]["data"]=data1;
se[1]["data"]=data2;
console.log(se);
console.log(data1);

      setSeries(se);

    });
  }

  useEffect(() => {

    loadData();


    if (curHr < 12) {
      setDayTimes('Good Morning')
    }else if (curHr < 18) {
      setDayTimes('Good Afternoon')
    }else {
      setDayTimes('Good Evening')
    }

    if(curHr >= 12){
     setMeridiem('PM')
    }else{
      setMeridiem('AM')
    }
    
    var ordervalue1 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      width: 65,
      fgColor: "#7366ff",
      readOnly: false,
      dynamicDraw: true,
      tickColorizeValues: true,
      bgColor: '#eef5fb',
      lineCap: 'round',
      displayPrevious: false
    })
    document.getElementById('ordervalue1').appendChild(ordervalue1);

    var ordervalue2 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      fgColor: "#7366ff",
      readOnly: false,
      width: 65,
      dynamicDraw: true,
      lineCap: 'round',
      displayPrevious: false
    })
    document.getElementById('ordervalue2').appendChild(ordervalue2);

    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          
          <Col xl="8 xl-100" className="dashboard-sec box-col-12">
            <Card className="earning-card">
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col xl="3" className="earning-content p-0">
                    <Row className="m-0 chart-left">
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{Dashboard}</h5>
                        <p className="font-roboto">{"Overview of last year"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$4055.56"} </h5>
                        <p className="font-roboto">{"This Month Earning"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$1004.11"}</h5>
                        <p className="font-roboto">{"This Month Profit"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"90%"}</h5>
                        <p className="font-roboto">{"This Month Sale"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left-btn"><a className="btn btn-gradient" href="#javascript">{Summary}</a></Col>
                    </Row>
                  </Col>
                  <Col xl="9" className="p-0">
                    <div className="chart-right">
                      <Row className="m-0 p-tb">
                        <Col xl="8" md="8" sm="8" className="col-12 p-0">
                          <div className="inner-top-left">
                            <ul className="d-flex list-unstyled">
                              <li className="active">{Daily}</li>
                              <li>{Monthly}</li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl="4" md="4" sm="4" className="col-12 p-0 justify-content-end">
                          <div className="inner-top-right">
                            <ul className="d-flex list-unstyled justify-content-end">
                              <li>{Online}</li>
                              <li>{Store}</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl="12">
                          <CardBody className="p-0">
                            <div className="current-sale-container">
                              <ApexCharts id="chart-currently" options={Currentlysale.options} series={series} type='area' height={240} />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </div>
                    <Row className="border-top m-0">
                      <Col xl="4" md="6" sm="6" className="pl-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-crown"></i></div>
                          <div className="media-body">
                            <h6>{ReferralEarning}</h6>
                            <p>{"$5,000.20"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="6" sm="6">
                        <div className="media p-0">
                          <div className="media-left bg-secondary"><i className="icofont icofont-heart-alt"></i></div>
                          <div className="media-body">
                            <h6>{CashBalance}</h6>
                            <p>{"$2,657.21"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="12" className="pr-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-cur-dollar"></i></div>
                          <div className="media-body">
                            <h6>{SalesForcasting}</h6>
                            <p>{"$9,478.50"}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="9 xl-100" className="chart_data_left box-col-12">
            <Card>
              <CardBody className="p-0">
                <Row className="m-0 chart-main">
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart flot-chart-container"
                            data={smallchart1data}
                            options={smallchart1option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"1001"}</h4><span>{Purchase} </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart1 flot-chart-container"
                            data={smallchart2data}
                            options={smallchart2option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"1005"}</h4><span>{Sales}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart2 flot-chart-container"
                            data={smallchart3data}
                            options={smallchart3option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"100"}</h4><span>{SalesReturn}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media border-none align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart3 flot-chart-container"
                            data={smallchart4data}
                            options={smallchart4option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"101"}</h4><span>{PurchaseRet}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" className="chart_data_right box-col-12">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>{"$95,900"}<span className="new-box">{Hot}</span></h4><span>{PurchaseOrderValue}</span>
                  </div>
                  <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" className="chart_data_right second d-none">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>{"$95,000"}<span className="new-box">{New}</span></h4><span>{ProductOrderValue}</span>
                  </div>
                  <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue2"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
}

export default Default;