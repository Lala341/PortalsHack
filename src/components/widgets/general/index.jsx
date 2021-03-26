import React, { useState, Fragment,useEffect } from 'react'
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Button, CardFooter, Table, Input, Label, Form, FormGroup } from 'reactstrap'
import { Database, ShoppingBag, MessageCircle, UserPlus, Layers, ShoppingCart, DollarSign, ArrowDown, ArrowUp, CloudDrizzle } from 'react-feather';
import DatePicker from "react-datepicker";
import Clock from 'react-clock';
import Slider from "react-slick";
import CountUp from 'react-countup';
import { Earnings,Messages,NewUser,Products,New,Pending,Done,Cancel } from '../../../constant'
import {MarkJecno,TodayTotalSale,Manager,Follower,Following,TotalPost,NewOrder,Facebooks,Twitters,GooglePlus,Linkedins,Daily,Month,Week,Details,Quantity,Status,Price,Employee_Status,Designation,SkillLevel,Experience,ContactUs,YourName,Email,Name,Message,SEND_IT,Sale,Today,kolkata_India,India_Surat,RecentActivity,Profit,Loss,Post,ProductsCart,Like,Year} from "../../../constant";
import axios from 'axios'
import {Currentlysale,Monthlysales,columnCharts,totalearning,Riskfactorchart} from './../chartsData/apex-charts-data'
import ApexCharts from 'react-apexcharts'

const General = () => {

  const [date, setDate] = useState({ date: new Date() });
  const [generalData, setGeneralData] = useState([]);
  const {clients,cartProducts, employeeStatus} = generalData;
  const [series, setSeries]=useState([]);

  const handleChange = date => {
    setDate(date)
  };
  const loadData =()=>{
    var url =  "https://aqueous-gorge-10288.herokuapp.com/getall/?lat=2&lon=3";
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then((response) => {
      var ress=JSON.parse(response);
 var se=[{
  name: 'v1',
  data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0]
}, {
  name: 'v1',
  data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0]
}];

var data1=[];
var data2=[];
for(var i=0;i<ress.length;i++){
  data1.push(ress[i]["v1"]);
  data2.push(ress[i]["v2"]);
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
    axios.get(`${process.env.PUBLIC_URL}/api/general.json`).then(res => setGeneralData(res.data.result))
  },[])


  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());


  const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var d = new Date();
  let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

  // eslint-disable-next-line 
  const [settings, setSettings] = useState({
    className: "center",
    centerMode: true,
    speed: 500,
    arrows: false,
    centerPadding: "5px",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  });

  return (
    <Fragment>
      <Breadcrumb parent="Widgets" title="Simulation AR and Web" />
      
      {clients && cartProducts &&  employeeStatus ?
      <Container fluid={true}>
        <Row>
       
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><Database /></div>
                  <div className="media-body"><span className="m-0">ecommerce (MW)</span>
                    <h4 className="mb-0 counter"><CountUp end={8741.0} /></h4><Database className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <div className="bg-secondary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><CloudDrizzle /></div>
                  <div className="media-body"><span className="m-0">V1 [m/s]</span>
                    <h4 className="mb-0 counter"><CountUp end={8.534} /></h4><CloudDrizzle className="icon-bg" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><CloudDrizzle /></div>
                  <div className="media-body"><span className="m-0">V2 [m/s]</span>
                    <h4 className="mb-0 counter"><CountUp end={2.546} /></h4><CloudDrizzle className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xl="3" lg="6">
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><CloudDrizzle /></div>
                  <div className="media-body"><span className="m-0">T [K] </span>
                    <h4 className="mb-0 counter"><CountUp end={74.558} />{"1"}</h4><CloudDrizzle className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
                        <div className="knowledgebase-bg" style={{ backgroundImage: `url(${require("../../../assets/images/knowledgebase/bg_1.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",display:"block" }}>
                            <img className="bg-img-cover bg-center" src={require("../../../assets/images/knowledgebase/bg_1.jpg")} alt="looginpage" style={{display:"none"}}/>
                        </div>
                            <div className="knowledgebase-search">
                            <div>
                               
                            </div>
                        </div>
                    </Col>
          
          
          
                    <Col xl="6"  className="box-col-6" md="6">
                    <Card className="o-hidden">
                      <CardHeader className="card-no-border">
                        <div className="card-header-right">
                          <ul className="list-unstyled card-option">
                            <li><i className="fa fa-spin fa-cog"></i></li>
                            <li><i className="view-html fa fa-code"></i></li>
                            <li><i className="icofont icofont-maximize full-card"></i></li>
                            <li><i className="icofont icofont-minus minimize-card"></i></li>
                            <li><i className="icofont icofont-refresh reload-card"></i></li>
                            <li><i className="icofont icofont-error close-card"></i></li>
                          </ul>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <p><span className="f-w-500 font-roboto">ecommerce (MW)</span><span className="f-w-700 font-primary ml-2">{"89.21%"}</span></p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody className="p-0">
                        <div className="media">
                          <div className="media-body">
                            <div className="profit-card">
                            <ApexCharts id="chart-currently" options={Currentlysale.options} series={series} type='area' height={240} />
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
          <Col xl="3" className="xl-50 col-sm-6 box-col-6">
            <Card>
              <div className="weather-widget-two">
                <CardBody>
                  <div className="media">
                    <svg className="climacon climacon_cloudDrizzleMoonAlt" id="cloudDrizzleMoonAlt" version="1.1" viewBox="15 15 70 70">
                      <clippath id="cloudFillClip">
                        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                      </clippath>
                      <clippath id="moonCloudFillClip">
                        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                      </clippath>
                      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoonAlt">
                        <g clipPath="url(#cloudFillClip)">
                          <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud" clipPath="url(#moonCloudFillClip)">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                          </g>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"></path>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud" clipPath="url(#cloudFillClip)">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"></path>
                        </g>
                      </g>
                    </svg>
                    <div className="media-body align-self-center text-white">
                      <h4 className="m-0 f-w-600 num">{"8.534"}</h4>
                      <p className="m-0 f-14">{"V1 (velocity [m/s])"}</p>
                    </div>
                  </div>
                  <div className="media">
                    <svg className="climacon climacon_cloudRainMoon" id="cloudRainMoon" version="1.1" viewBox="15 15 70 70">
                      <clippath id="cloudFillClip1">
                        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                      </clippath>
                      <clippath id="moonCloudFillClip1">
                        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                      </clippath>
                      <g className="climacon_iconWrap climacon_iconWrap-cloudRainMoon">
                        <g clipPath="url(#cloudFillClip1)">
                          <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud" clipPath="url(#moonCloudFillClip1)">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                          </g>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"></path>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud" clipPath="url(#cloudFillClip1)">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"></path>
                        </g>
                      </g>
                    </svg>
                    <div className="media-body align-self-center text-white">
                      <h4 className="m-0 f-w-600 num">{"0.1585"}</h4>
                      <p className="m-0 f-14">{"SWTDN (total top-of-the-atmosphere horizontal radiation [W/m²])"}</p>
                    </div>
                  </div>
                  <div className="media">
                    <svg className="climacon climacon_cloudDrizzle" id="cloudDrizzle" version="1.1" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"></path>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"></path>
                        </g>
                      </g>
                    </svg>
                    <div className="media-body align-self-center text-white">
                      <h4 className="m-0 f-w-600 num">{"74.558"}</h4>
                      <p className="m-0 f-14">{"T (Temperature [K]"}</p>
                    </div>
                  </div>
                  <div className="top-bg-whether">
                    <svg className="climacon climacon_cloudHailAltFill" id="cloudHailAltFill" version="1.1" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudHailAltFill">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                            <circle cx="42" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                            <circle cx="49.999" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                            <circle cx="57.998" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                            <circle cx="42" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                            <circle cx="49.999" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                            <circle cx="57.998" cy="65.498" r="2"></circle>
                          </g>
                        </g>
                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                          <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </CardBody>
              </div>
            </Card>
          </Col>
         
        
      
      
          
          
        </Row>
      </Container>
      :""}
    </Fragment>
  )
}

export default General
