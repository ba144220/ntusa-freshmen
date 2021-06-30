import React from 'react';

import PropTypes from 'prop-types';

// @material-ui/core
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// @material-ui/icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

// config
import { PageConfig } from '../config/PageConfig'
import { useHistory, useLocation } from 'react-router';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
        backgroundColor: theme.palette.secondary.main
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
    },
    toolbarTitle:{
        fontSize: theme.typography.fontSize*1.6,
        
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    test: {
        backgroundColor: 'green',
        border: '2px solid red',
    },
    drawerTitle: {
        padding: theme.spacing(2),
    },
    active: {
        backgroundColor: theme.palette.action.selected,
    },
    
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation()
  const history = useHistory()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer_items = (
    <div>
        <Typography variant='h5' className={classes.drawerTitle}>
            NTU FRESHMEN
        </Typography>
        {/* <Divider /> */}
        <List>
            {PageConfig.map(item => (
                <ListItem 
                    button 
                    key={item.title} 
                    className = {location.pathname == item.url ? classes.active : null}
                    onClick = {() => history.push(item.url)}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText  >
                        <Typography  >
                        {item.title}
                        </Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
        
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>


    {/* app-bar */}
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography noWrap className={classes.toolbarTitle}>
                    {PageConfig.filter(item => location.pathname===item.url)[0].title}
                </Typography>
            </Toolbar>
        </AppBar>

    {/* drawer */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            

            
            {drawer_items}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer_items}
          </Drawer>
        </Hidden>
      </nav>



      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        {PageConfig.filter(item => location.pathname===item.url)[0].jsx}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
