import React, { Component } from 'react'

class FormData extends Component {
    render() {
        const{forms}=this.props;
        return (
            <div>
                <h4 className='grey-text text-darken-2'>All Feedback</h4>
                <table className='highlight'>
                    <thead>
                    <tr className='blue-text'>
                        <th>Form Name</th>
                        <th>Test Field</th>
                        <th>Phone Field</th>
                        <th>Email Field</th>
                        <th>Radio Buttons</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    {
                        forms.map((form,id)=>(
                            <tbody key={id}>
                                <tr className='indigo-text'>
                                    <td>Aromatic Bar</td>
                                    <td>{form.textField}</td>
                                    <td>{form.phone}</td>
                                    <td>{form.email}</td>
                                    <td>{form.rating}</td>
                                    <td>{form.name}</td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        )
    }
}

export default FormData
