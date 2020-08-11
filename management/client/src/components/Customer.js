import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Fragment } from 'react';

class Customer extends React.Component {
    render() {
        return (        
        <Fragment>
          <TableRow>
              <TableCell>{this.props.id}</TableCell>
              <TableCell><img src={this.props.image}/></TableCell>
              <TableCell>{this.props.name}</TableCell>
              <TableCell>{this.props.birthday}</TableCell>
              <TableCell>{this.props.gender}</TableCell>
              <TableCell>{this.props.job}</TableCell>
          </TableRow>
        </Fragment>)
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image}/>
                <h2>{this.props.name}(아이디:{this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;