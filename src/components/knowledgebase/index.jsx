import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Codepen, FileText, Youtube, BookOpen, Aperture, Archive, ArrowRight, Search } from 'react-feather';
import two from '../../assets/images/faq/2.jpg';
import one from '../../assets/images/faq/1.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import errorImg from '../../assets/images/search-not-found.png';
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, FormGroup, Input } from "reactstrap"
import axios from 'axios'
import { Articles,Knowledgebase,Support,BrowseArticles,FeaturedTutorials,WebDesign,WebDevelopment,UIDesign,UXDesign } from "../../constant";

const KnowledgebaseComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [search, setsearch] = useState([]);
    const [Data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setsearch(res.data))
    },[])

    const handleChange = event => {
        const searchByTitle = [];
        setSearchTerm(event.target.value);
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setData(res.data))
        Data.filter(data => {
            if (data.title.toLowerCase().indexOf(event.target.value) > -1) {
                searchByTitle.push(data);

            }
            return data
        })
        setsearch(searchByTitle)
      
    };

    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="Knowledgebase" />
            <Container fluid={true}>
                <Row>
                    <Col xs="12">
                        <div className="knowledgebase-bg" style={{ backgroundImage: `url(${require("../../assets/images/knowledgebase/bg_1.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",display:"block" }}>
                            <img className="bg-img-cover bg-center" src={require("../../assets/images/knowledgebase/bg_1.jpg")} alt="looginpage" style={{display:"none"}}/>
                        </div>
                            <div className="knowledgebase-search">
                            <div>
                                <h3>{"How Can I help you?"}</h3>
                            </div>
                        </div>
                    </Col>
                    
                    
                    
                    
                    
                    <Col lg="12">
                        <div className="header-faq">
                            <h5 className="mb-0">{"Features"}</h5>
                        </div>
                        <Row>
                            <Col xl="4" md="6">
                                <Row>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Using Video"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Vel illum qu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Cum sociis natoqu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. "}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl="4" md="6">
                                <Row>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><FileText className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Donec pede justo"}</h6>
                                                        <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. "}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><FileText className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Nam quam nunc"}</h6>
                                                        <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media">
                                                    <FileText className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Using Video"} </h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl="4">
                                <Row>
                                    <Col xl="12" md="6">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Vel illum qu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="12" md="6">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Cum sociis natoqu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Donec pede justo"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default KnowledgebaseComponent;