import React, { Component } from 'react'
import GeneratePerhitungan from '../utils/Perhitungan'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import {
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        width: '100',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        minHeight: 30,
    },
    input_nilai: {
        marginTop: theme.spacing.unit * 3,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    table: {
        minWidth: 700,
    },
    footer: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
})

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                })
            }}
            thousandSeparator="."
            decimalSeparator=","
            prefix="Rp."
        />
    )
}

class FormJakon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nilaiProyek: undefined,
            nilaiRange1: 0,
            nilaiRange2: 0,
            nilaiRange3: 0,
            nilaiRange4: 0,
            nilaiRange5: 0,
        }
    }

    handleNilaiChange = e => {
        this.setState({ nilaiProyek: e.target.value })
        this.setState(GeneratePerhitungan(e.target.value))
    }

    numberWithCommas = x => {
        var parts = x.toString().split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        parts.length > 1
            ? (parts[1] = parts[1].substring(0, 2))
            : (parts[1] = '00')
        return parts.join(',')
    }

    render() {
        const { classes } = this.props
        return (
            <main className={classes.layout}>
                <TextField
                    className={classes.input_nilai}
                    label="Nilai Proyek"
                    value={this.state.nilaiProyek}
                    onChange={this.handleNilaiChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Range Nilai Proyek</TableCell>
                                <TableCell numeric>
                                    Range Nilai yang dihitung
                                </TableCell>
                                <TableCell numeric>Premi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Rp. 1.000.000 - Rp. 110.000.000
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        this.state.nilaiRange1
                                    )}
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        (this.state.nilaiRange1 * 0.24) / 100
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Rp. 110.000.001 - Rp. 550.000.000
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        this.state.nilaiRange2
                                    )}
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        (this.state.nilaiRange2 * 0.19) / 100
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Rp. 550.000.001 - Rp. 1.100.000.000
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        this.state.nilaiRange3
                                    )}
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        (this.state.nilaiRange3 * 0.15) / 100
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Rp. 1.100.000.001 - Rp. 5.500.000.000
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        this.state.nilaiRange4
                                    )}
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        (this.state.nilaiRange4 * 0.12) / 100
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>>Rp. 5.100.000.001</TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        this.state.nilaiRange5
                                    )}
                                </TableCell>
                                <TableCell numeric>
                                    {this.numberWithCommas(
                                        Math.floor(
                                            (this.state.nilaiRange5 * 0.1) / 100
                                        )
                                    )}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <Paper className={classes.root}>
                    <Typography variant="headline">
                        Total Premi: Rp. 
                        {this.numberWithCommas(
                            Math.floor(
                                this.state.nilaiRange1 * 0.0024 +
                                    this.state.nilaiRange2 * 0.0019 +
                                    this.state.nilaiRange3 * 0.0015 +
                                    this.state.nilaiRange4 * 0.0012 +
                                    this.state.nilaiRange5 * 0.001
                            )
                        )}
                    </Typography>
                </Paper>
            </main>
        )
    }
}

FormJakon.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormJakon)
