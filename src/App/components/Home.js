import React, { Component } from 'react'
import { Header, Button, Form, Table, Label, Icon, Input, Modal, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendDataAction, GetBookListAction, } from '../../store/action';
import dbConfig from '../../config';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Book_Name: '',
            price: '',
            nic_num: "",
            edit: false,
            edit_name: '',
            name: '',
            exit: false,
            priceData: '',
            exit1: false,
            edit_price: '',
            page: 1,

        }
    }
    componentWillMount() {
        this.props.GetBookList();

      
    }
    componentDidMount() {
        this.props.GetBookList();

    }
    updateValue = (ev, target) => {
        let obj = {};
        obj[target] = ev.target.value;
        this.setState(obj);
    };

    submit = () => {
        const { Book_Name, price } = this.state
        if (Book_Name === '') {
            alert("please enter book name")

        } else if (price === '') {
            alert("please enter price")
        } else {
            console.log(Book_Name, price)
            this.props.sendData({
                Book_Name, price
            });
            this.setState({
                Book_Name: "",
                price: ''
            })
        }
    }
    deletebook = (Book_Name1) => {



        var ref = dbConfig.database().ref("Book_List");
        ref.orderByChild("Book_Name").equalTo(Book_Name1).once("value", function (snapshot) {
            snapshot.forEach(function (employee) {
                employee.ref.remove()
            })
        })

    }

    editeAble = (Book_Name, price) => {
        this.setState({
            exit: false,
            exit1: false,
            priceData: price,
            name: Book_Name,
            page: 1,
        })
    }

    Update = () => {
        const { name, edit_name, edit_price, priceData } = this.state;
        if (edit_name) {
            console.log("prev value", name);
            console.log("new value", edit_name);
            var ref = dbConfig.database().ref("Book_List");
            ref.orderByChild("Book_Name").equalTo(name).once("value", function (snapshot) {
                snapshot.forEach(function (employee) {
                    employee.ref.update({ Book_Name: edit_name })
                })
            }).then(() => {
                this.setState({
                    edit_name: '',
                    exit: true
                })
            })
        }
        if (edit_price) {
            console.log("prev value", name);
            console.log("new value", edit_name);
            var ref1 = dbConfig.database().ref("Book_List");
            ref1.orderByChild("price").equalTo(priceData).once("value", function (snapshot) {
                snapshot.forEach(function (employee) {
                    employee.ref.update({ price: edit_price })
                })
            }).then(() => {
                this.setState({
                    edit_price: '',
                    exit1: true
                })
            })
        }



    }

    // show = () => () => this.setState({ exit: true })
    setPageNum = (event, { activePage }) => {
        console.log(activePage)
        this.setState({ page: activePage });
    };


    render() {
        console.log(this.state.Book_Name, this.state.price)
        console.log(this.state.edit_name)
        const itemsPerPage = 5;
        const { page } = this.state;
        const totalPages = this.props.Get_Book_List.length / itemsPerPage;
        const items = this.props.Get_Book_List.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );


        const { exit, exit1 } = this.state
        return (
            <div style={{ paddingLeft: '5%', paddingTop: "3%", }}>

                <Form size={"small"} key={"small"} >
                    <Form.Group>
                        <Form.Field label='First name' control='input' placeholder='Book Name'
                            onChange={event => { this.updateValue(event, "Book_Name"); }}
                            value={this.state.Book_Name} />


                        <Form.Field label='Last name' control='input' placeholder='Price'
                            onChange={event => { this.updateValue(event, "price"); }}
                            value={this.state.price} />

                    </Form.Group>

                    {/* <Divider hidden /> */}

                    <Button type='submit' size="small" onClick={this.submit}>Submit</Button>
                </Form>

                <Table striped compact color={"grey"} style={{ width: "60%" }}>
                    <Table.Header>
                        <Table.Row>

                            <Table.HeaderCell>Book Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            items.map((value, key) => {
                                return <Table.Row key={key}>

                                    <Table.Cell>{value.Book_Name}</Table.Cell>
                                    <Table.Cell>{value.price}</Table.Cell>

                                    <Table.Cell onClick={() => this.editeAble(value.Book_Name, value.price)}>
                                        <Label as='a' style={{ backgroundColor: "#9cc6f0" }}>


                                            <Modal trigger={<Icon name='edit'>Edit</Icon>} closeIcon>
                                                <Header icon='edit' content='Edit' />
                                                <Modal.Content>
                                                    <p>


                                                        <span>
                                                            <h4>{this.state.name}</h4>
                                                            <Input placeholder='enter new value'
                                                                onChange={event => { this.updateValue(event, "edit_name"); }}
                                                                value={this.state.edit_name} />

                                                        </span>

                                                        {
                                                            exit === true ?
                                                                <h6>Successfully submited</h6>
                                                                : null
                                                        }
                                                    </p>
                                                    <p style={{ padding: 10 }}>
                                                        <span>
                                                            <h4>{this.state.priceData}</h4>
                                                            <Input placeholder='enter new value'
                                                                onChange={event => { this.updateValue(event, "edit_price"); }}
                                                                value={this.state.edit_price} />

                                                        </span>
                                                        {
                                                            exit1 === true ?
                                                                <h6>Successfully submited</h6>
                                                                : null
                                                        }

                                                    </p>
                                                </Modal.Content>
                                                <Modal.Actions>
                                                    : <Button color='green' onClick={this.Update}>
                                                        <Icon name='checkmark' /> Update
                                                         </Button>

                                                </Modal.Actions>
                                            </Modal>
                                        </Label>

                                    </Table.Cell>
                                    <Table.Cell onClick={() => this.deletebook(value.Book_Name)}>
                                        <Label as='a' style={{ backgroundColor: "#eb1a1a" }}>
                                            <Icon name='delete' /> Delete
                              </Label>
                                    </Table.Cell>
                                </Table.Row>
                            })
                            // : null
                        }
                    </Table.Body>
                </Table>

                <Pagination activePage={page} siblingRange={1}   onPageChange={this.setPageNum} totalPages={totalPages} />


            </div >
        )
    }
}

function mapStateToProps(state) {
    console.log(state.reducer.Get_Book_List, "++++++++++++++++state.reducer.notification+++++++++++++++++++")
    return {
        userListComponent: state.reducer.userList,
        notificatiom: state.reducer.notification,
        Get_Book_List: state.reducer.Get_Book_List
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sendData: (obj) => dispatch(sendDataAction(obj)),
        GetBookList: () => dispatch(GetBookListAction()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
