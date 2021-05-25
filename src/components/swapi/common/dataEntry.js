import {TableCell, TableRow, withStyles} from "@material-ui/core";
import React from "react";

const StyledLabelCell = withStyles(theme => ({
    body: {
        fontSize: 14,
        fontWeight: 'bold',
        alignContent: 'left'
    }
}))(TableCell);
const StyledContentCell = withStyles(theme => ({
    body: {
        fontSize: 14,
        textTransform: 'capitalize',
        fontStyle: 'italic',
        alignContent: 'right'
    }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);
export const DataEntry = (props) => {
    return (
        <React.Fragment>
            <StyledTableRow key={props.key}>
                <StyledLabelCell>
                    {props.label}
                </StyledLabelCell>
                <StyledContentCell>
                    {props.content}
                </StyledContentCell>
            </StyledTableRow>
        </React.Fragment>
    )
}