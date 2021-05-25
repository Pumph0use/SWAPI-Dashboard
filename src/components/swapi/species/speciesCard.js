import {Avatar, Card, CardContent, CardHeader, Grid, makeStyles, Table, TableBody} from "@material-ui/core";
import {orange} from "@material-ui/core/colors";
import React from "react";
import {DataEntry} from "../common/dataEntry";

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: orange[500]
    }
}))
export const SpeciesCard = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={'species'} className={classes.avatar}>
                                {props.name[0]}
                            </Avatar>
                        }
                        title={props.name}/>
                    <CardContent>
                        <Table aria-label={'species table'}>
                            <TableBody>
                                <DataEntry
                                    key={'average_height'}
                                    label={'Average Height'}
                                    content={props.average_height}/>
                                <DataEntry
                                    key={'average_lifespan'}
                                    label={'Average Height'}
                                    content={props.average_lifespan}/>
                                <DataEntry
                                    key={'classificaiton'}
                                    label={'Classification'}
                                    content={props.classification}/>
                                <DataEntry
                                    key={'designation'}
                                    label={'Designation'}
                                    content={props.designation}/>
                                <DataEntry
                                    key={'eye_colors'}
                                    label={'Possible Eye Colors'}
                                    content={props.eye_colors}/>
                                <DataEntry
                                    key={'hair_colors'}
                                    label={'Possible Hair Colors'}
                                    content={props.hair_colors}/>
                                <DataEntry
                                    key={'homeworld'}
                                    label={'Homeworld'}
                                    content={props.homeworld}/>
                                <DataEntry
                                    key={'language'}
                                    label={'Language'}
                                    content={props.language}/>
                                <DataEntry
                                    key={'people'}
                                    label={'No. Notable People'}
                                    content={props.people.length}/>
                                <DataEntry
                                    key={'films'}
                                    label={'No. Film Appearances'}
                                    content={props.films.length}/>
                                <DataEntry
                                    key={'skin_colors'}
                                    label={'Possible Skin Colors'}
                                    content={props.skin_colors}/>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}