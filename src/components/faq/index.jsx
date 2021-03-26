import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Search, Edit, Globe, BookOpen, FileText, Youtube, MessageCircle, Mail, RotateCcw, DollarSign, Check, Link, Codepen, HelpCircle, Aperture, Settings, MessageSquare } from 'react-feather';
import one from '../../assets/images/faq/1.jpg';
import two from '../../assets/images/faq/2.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import { Container, Row, Col, Card, CardBody, CardHeader, Media} from 'reactstrap';
import { Articles,Knowledgebase,Support,IntellectualProperty,SellingAndBuying,UserAccounts,SearchArticles,Navigation,AskOurCommunity,AskQuestion,Tutorials,HelpCenter,ContactUs,VideoTutorials,DavidLinner,UserChristopher,VictoriaWilson,LatestUpdates,UIDesign,UXDesign,WebDesign,FeaturedTutorials ,SeeAll,WebDevelopment} from "../../constant";
import { Accordion } from 'react-bootstrap';

const FaqComponent = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <div className="faq-wrap">
                    <Row>
                        <Col xl="4 xl-100">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Articles}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><FileText />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4 xl-50" sm="6">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Knowledgebase}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><BookOpen />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col  xl="4 xl-50" sm="6">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Support}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><Aperture />
                                    </Media>
                                </CardBody>
                            </Card>
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
                                                    <Media>
                                                        <Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Using Video"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Vel illum qu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media><Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Cum sociis natoqu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                        </Media>
                                                    </Media>
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
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Donec pede justo"}</h6>
                                                            <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Nam quam nunc"}</h6>
                                                            <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Using Video"} </h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
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
                                                    <Media>
                                                        <Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Vel illum qu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl="12" md="6">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Cum sociis natoqu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl="12">
                                            <Card>
                                                <CardBody>
                                                    <Media><Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Donec pede justo"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default FaqComponent;