import {Avatar, Card, CardContent, CardHeader, Grid, makeStyles, Table, TableBody} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import React from "react";
import {DataEntry} from "../common/dataEntry";

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: green[500]
    }
}))

export const PlanetCard = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={'planet'} className={classes.avatar}>
                                {props.name[0]}
                            </Avatar>
                        }
                        title={props.name}/>
                    <CardContent>
                        <Table aria-label={'planet table'}>
                            <TableBody>
                                <DataEntry
                                    key={'climate'}
                                    label={'Climate'}
                                    content={props.climate}/>
                                <DataEntry
                                    key={'diameter'}
                                    label={'Diameter'}
                                    content={props.diameter}/>
                                <DataEntry
                                    key={'films'}
                                    label={'No. Film Appearances'}
                                    content={props.films.length}/>
                                <DataEntry
                                    key={'gravity'}
                                    label={'Gravity'}
                                    content={props.gravity}/>
                                <DataEntry
                                    key={'orbitalperiod'}
                                    label={'Orbital Period'}
                                    content={props.orbital_period}/>
                                <DataEntry
                                    key={'population'}
                                    label={'Population'}
                                    content={props.population}/>
                                <DataEntry
                                    key={'residents'}
                                    label={'No. Notable Residents'}
                                    content={props.residents.length}/>
                                <DataEntry
                                    key={'rotationperiod'}
                                    label={'Rotation Period'}
                                    content={props.rotation_period}/>
                                <DataEntry
                                    key={'water'}
                                    label={'Surface Water'}
                                    content={props.surface_water}/>
                                <DataEntry
                                    key={'terrain'}
                                    label={'Terrain'}
                                    content={props.terrain}/>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}