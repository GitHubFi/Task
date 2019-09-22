import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, } from 'semantic-ui-react'

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            accountAddress: ""
        };
    }

    componentWillMount() {
        this.props.history.push('/Login')

    }
    render() {
        return (
            <div style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '25%', marginRight: "25%", height: '100vh', }}>

                <Dimmer active>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>

            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {

        user_uid: state.reducer.user_uid,
    }
}
function mapDispatchToProps(dispatch) {
    return {


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);