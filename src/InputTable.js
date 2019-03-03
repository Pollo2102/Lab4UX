import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Inputs from './Inputs';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class InputTable extends React.Component {
    constructor(props) {
        super(props);
        this.updateProps = this.updateProps.bind(this);
        this.props = Inputs.inputProps;
    }

    updateProps() {
        this.setState();
    }

    

    render() {
        return (
            <div style={{paddingLeft: 100, paddingRight: 100}}>
                <Paper className={InputTable.root}>
                <Table padding='30px' className={InputTable.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell align='center'>Nombre de Clase</TableCell>
                        <TableCell align="left">Nota del Parcial</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={0}>
                        <TableCell 
                        align='left'
                        component="th" 
                        scope="row">
                            {this.props.class1Name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {this.props.class1Grade}
                        </TableCell>
                        </TableRow>

                        <TableRow key={1}>
                        <TableCell component="th" scope="row">
                            {this.props.class2Name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {this.props.class2Grade}
                        </TableCell>
                        </TableRow>

                        <TableRow key={2}>
                        <TableCell component="th" scope="row">
                            {this.props.class3Name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {this.props.class3Grade}
                        </TableCell>
                        </TableRow>
                        

                    </TableBody>
                </Table>
            </Paper>

            </div>
        );
    }
};



export default InputTable;