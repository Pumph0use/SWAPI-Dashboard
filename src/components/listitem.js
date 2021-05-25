import React, {forwardRef, useMemo} from "react";
import {Link as RouterLink} from 'react-router-dom'
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import PropTypes from 'prop-types';

export const ListItemLink = (props) => {
    const {icon, primary, to} = props;

    const renderLink = useMemo(() =>
        forwardRef((itemProps, ref) =>
            <RouterLink to={to} ref={ref} {...itemProps} />), [to])

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    )
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

