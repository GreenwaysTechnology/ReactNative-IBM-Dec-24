import React from "react";
import { produce } from "immer"

class Customer extends React.Component {
 
    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    mobileNo: '9000000'
                }
            }
        }
    }
    render() {
        return <div>
            <h1>Customer info</h1>
            <h2>Name : {this.state.customer.name}</h2>
            <h2>Phone : {this.state.customer.contact.communcation.mobileNo}</h2>
            {/* <button onClick={() => {
                this.setState((prevState) => {
                    return {
                        ...prevState, // leve-0 copy
                        customer: {
                            ...prevState.customer, // level-1 copy
                            contact: {
                                ...prevState.customer.contact, // level-2 copy
                                communcation: {
                                    ...prevState.customer.communcation,
                                    mobileNo: '9003706368'
                                }
                            }
                        }
                    };

                })

            }}>Update Mobile No</button> */}
            <button onClick={() => {
                this.setState(produce(this.state, (draft) => {
                    draft.customer.contact.communcation.mobileNo = '9003706368'
                }))
            }}>Update Mobile No</button>
        </div>
    }
}

export default function App() {
    return <Customer />
}