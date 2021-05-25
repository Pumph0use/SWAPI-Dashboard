import React from "react";
import {useSelector} from "react-redux";
import {Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import {DataEntry} from "./dataEntry";

export const Home = (props) => {
    const planets = useSelector(state => state.planets.all)
    const people = useSelector(state => state.people.all)
    const films = useSelector(state => state.films.all)
    const vehicles = useSelector(state => state.vehicles.all)
    const starships = useSelector(state => state.starships.all)
    const species = useSelector(state => state.species.all)

    return(
        <Paper>
            <Box>
                <Typography style={{fontWeight: 'bold', alignSelf: 'center'}}>SWAPI Statistics</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>Entries</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <DataEntry
                                key={'planets'}
                                label={'Planets'}
                                content={planets.length}
                            />
                            <DataEntry
                                key={'people'}
                                label={'People'}
                                content={people.length}
                            />
                            <DataEntry
                                key={'films'}
                                label={'Films'}
                                content={films.length}
                            />
                            <DataEntry
                                key={'vehicles'}
                                label={'Vehicles'}
                                content={vehicles.length}
                            />
                            <DataEntry
                                key={'starships'}
                                label={'Starships'}
                                content={starships.length}
                            />
                            <DataEntry
                                key={'species'}
                                label={'Species'}
                                content={species.length}
                            />
                        </TableBody>
                </Table>
            </Box>
        </Paper>
    )
}