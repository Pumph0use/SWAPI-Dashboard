import './App.css';
import React, {useEffect, useState} from "react";
import clsx from 'clsx';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {People} from "./components/swapi/people/people";
import {Starships} from "./components/swapi/starships/starships";
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
    Badge,
    Container,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    makeStyles,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FlightIcon from '@material-ui/icons/Flight';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import LanguageIcon from '@material-ui/icons/Language';
import MovieIcon from '@material-ui/icons/Movie'
import {ListItemLink} from "./components/listitem";
import {Films} from "./components/swapi/films/films";
import {Planets} from "./components/swapi/planets/planets";
import {Vehicles} from "./components/swapi/vehicles/vehicles";
import {Species} from "./components/swapi/species/species";
import {useDispatch} from "react-redux";
import {fetchFilms, fetchPeople, fetchPlanets, fetchSpecies, fetchStarships, fetchVehicles} from "./redux/actions";
import {Home} from "./components/swapi/common/home";

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: 'none'
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    fixedHeight: {
        height: 240
    }
}))

function App() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        //Do some thunk-ing when we start
        dispatch(fetchPeople());
        dispatch(fetchPlanets());
        dispatch(fetchSpecies());
        dispatch(fetchVehicles());
        dispatch(fetchFilms());
        dispatch(fetchStarships());
    },[dispatch])

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline/>
                <AppBar position={'absolute'} className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge={'start'}
                            color={'inherit'}
                            aria-label={'open drawer'}
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography component={'h1'} variant={'h6'} color={'inherit'} noWrap className={classes.title}>
                            SWAPI Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant={'permanent'}
                    classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <ListItemLink primary={'Dashboard'} to={'/'} icon={<AllInclusiveIcon />}/>
                        <ListItemLink primary={'People'} to={'/people'} icon={<EmojiPeopleIcon />}/>
                        <ListItemLink primary={'Starships'} to={'/starships'} icon={<FlightIcon />}/>
                        <ListItemLink primary={'Films'} to={'/films'} icon={<MovieIcon />}/>
                        <ListItemLink primary={'Species'} to={'/species'} icon={<MergeTypeIcon />}/>
                        <ListItemLink primary={'Vehicles'} to={'/vehicles'} icon={<AirportShuttleIcon />}/>
                        <ListItemLink primary={'Planets'} to={'/planets'} icon={<LanguageIcon />}/>
                    </List>
                </Drawer>
                <Switch>
                    <Route path={"/about"}>
                        <About/>
                    </Route>
                    <Route path={"/people"}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <People />
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                    <Route path={'/starships'}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <Starships/>
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                    <Route path={'/films'}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <Films/>
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                    <Route path={'/planets'}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <Planets/>
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                    <Route path={'/vehicles'}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <Vehicles/>
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                    <Route path={'/species'}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <Species/>
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                    <Route path={"/"}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer}/>
                            <Container maxWidth={'lg'} className={classes.container}>
                                <Grid container spacing={3}>
                                    <Home />
                                </Grid>
                            </Container>
                        </main>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

function About() {
    return <h2>About</h2>
}


export default App;
