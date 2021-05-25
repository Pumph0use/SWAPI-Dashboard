import React from "react";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
    Table,
    TableBody,
    Typography
} from "@material-ui/core";
import {DataEntry} from "../common/dataEntry";
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: green[500]
    }
}))
export const FilmCard = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={'film'} className={classes.avatar}>
                                {props.title[0]}
                            </Avatar>
                        }
                        title={props.title}/>
                    <CardContent>
                        <Table aria-label={'film table'}>
                            <TableBody>
                                <DataEntry
                                    key={'characters'}
                                    label={'No. Notable Characters'}
                                    content={props.characters.length}/>
                                <DataEntry
                                    key={'director'}
                                    label={'Director'}
                                    content={props.director}/>
                                <DataEntry
                                    key={'episode_id'}
                                    label={'Episode #'}
                                    content={props.episode_id}/>
                                <DataEntry
                                    key={'No. Notable Plantes'}
                                    label={'Planets'}
                                    content={props.planets.length}/>
                                <DataEntry
                                    key={'producer'}
                                    label={'Producer'}
                                    content={props.producer}/>
                                <DataEntry
                                    key={'release_date'}
                                    label={'Release Date'}
                                    content={props.release_date}/>
                                <DataEntry
                                    key={'species'}
                                    label={'No. Notable Species'}
                                    content={props.species.length}/>
                                <DataEntry
                                    key={'starships'}
                                    label={'No. Notable Starships'}
                                    content={props.starships.length}/>
                                <DataEntry
                                    key={'vehicles'}
                                    label={'No. Notable Vehicles'}
                                    content={props.vehicles.length}/>
                            </TableBody>
                        </Table>
                        <Divider/>
                        <Typography style={{fontWeight: 'bold'}}><br/>Opening Crawl</Typography>
                        <Divider/>
                        <Typography><br/>{props.opening_crawl}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}