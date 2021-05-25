import React from "react";
import {Avatar, Card, CardContent, CardHeader, Grid, makeStyles, Table, TableBody} from "@material-ui/core";
import {DataEntry} from "../common/dataEntry";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: red[500]
    }
}))
export const PersonCard = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={'person'} className={classes.avatar}>
                                {props.name[0]}
                            </Avatar>
                        }
                        title={props.name}/>
                    <CardContent>
                        <Table aria-label={'people table'}>
                            <TableBody>
                                <DataEntry
                                    key={'birth'}
                                    label={'Birth Year'}
                                    content={props.birth_year}/>
                                <DataEntry
                                    key={'eye'}
                                    label={'Eye Color'}
                                    content={props.eye_color}/>
                                <DataEntry
                                    key={'gender'}
                                    label={'Gender'}
                                    content={props.gender}/>
                                <DataEntry
                                    key={'skin'}
                                    label={'Skin Color'}
                                    content={props.skin_color}/>
                                <DataEntry
                                    key={'height'}
                                    label={'Height'}
                                    content={props.height}/>
                                <DataEntry
                                    key={'mass'}
                                    label={'Mass'}
                                    content={props.mass}/>
                                <DataEntry
                                    key={'films'}
                                    label={'No. Film Appearances'}
                                    content={props.films.length}/>
                                <DataEntry
                                    key={'vehicles'}
                                    label={'No. Vehicles Crewed'}
                                    content={props.vehicles.length}/>
                                <DataEntry
                                    key={'starships'}
                                    label={'No. Starships Crewed'}
                                    content={props.starships.length}/>
                                <DataEntry
                                    key={'species'}
                                    label={'No. Species (Genetics)'}
                                    content={props.species.length}/>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}