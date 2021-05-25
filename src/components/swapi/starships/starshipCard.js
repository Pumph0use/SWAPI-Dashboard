import {Avatar, Card, CardContent, CardHeader, Grid, makeStyles, Table, TableBody} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import React from "react";
import {DataEntry} from "../common/dataEntry";

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: blue[500]
    }
}))
export const StarshipCard = (props) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={'starship'} className={classes.avatar}>
                                {props.name[0]}
                            </Avatar>
                        }
                        title={props.name}/>
                    <CardContent>
                        <Table aria-label={'starship table'}>
                            <TableBody>
                                <DataEntry
                                    key={'mglt'}
                                    label={'MGLT'}
                                    content={props.mglt}/>
                                <DataEntry
                                    key={'cargo'}
                                    label={'Cargo Capacity'}
                                    content={props.cargo_capacity}/>
                                <DataEntry
                                    key={'consumables'}
                                    label={'Consumables'}
                                    content={props.consumables}/>
                                <DataEntry
                                    key={'cost'}
                                    label={'Cost in Credits'}
                                    content={props.cost_in_credits}/>
                                <DataEntry
                                    key={'crew'}
                                    label={'No. Crew'}
                                    content={props.crew}/>
                                <DataEntry
                                    key={'hyperdrive'}
                                    label={'Hyperdrive Rating'}
                                    content={props.hyperdrive_rating}/>
                                <DataEntry
                                    key={'length'}
                                    label={'Length'}
                                    content={props.length}/>
                                <DataEntry
                                    key={'manufacturer'}
                                    label={'Manufacturer'}
                                    content={props.manufacturer}/>
                                <DataEntry
                                    key={'atmosphering'}
                                    label={'Max Atmosphering Speed'}
                                    content={props.max_atmosphering_speed}/>
                                <DataEntry
                                    key={'model'}
                                    label={'Model'}
                                    content={props.model}/>
                                <DataEntry
                                    key={'passengers'}
                                    label={'No. Passengers'}
                                    content={props.passengers}/>
                                <DataEntry
                                    key={'films'}
                                    label={'No. Film Appearances'}
                                    content={props.films.length}/>
                                <DataEntry
                                    key={'pilots'}
                                    label={'No. Pilots'}
                                    content={props.pilots.length}/>
                                <DataEntry
                                    key={'starshipclass'}
                                    label={'Starship Class'}
                                    content={props.starship_class}/>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}