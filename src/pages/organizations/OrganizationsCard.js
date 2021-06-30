import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

import GTranslateIcon from '@material-ui/icons/GTranslate';
import FacebookIcon from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import LineIcon from './icons/LineIcon';

import {AvatarConfig} from './icons/AvatarConfig'
import { Divider } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#ffffff",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[500],
  },
  mySvgStyle: {
    fillColor: theme.palette.secondary.main,
  },
  headerTitle: {
      fontWeight:'bold',
  },
  iconButton: {
      
  }
}));





export default function OrganizationsCard({showImg, item}) {
  const classes = useStyles();


  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader
        avatar={ AvatarConfig[item.avatar] ? 
          <Avatar 
            className={classes.avatar} 
            src={AvatarConfig[item.avatar]}
          />
          :
          <Avatar className={classes.avatar} >{item.title[0].toUpperCase()}</Avatar>
        }
        
        title={<Typography className={classes.headerTitle}>{item.title}</Typography>}
      />

      {(item.image == null || showImg === false )? <div></div> : 
        <CardMedia
            className={classes.media}
            image={item.image}
        />
      }

      <Divider variant='middle'/>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" >
          {item.description == null ? 'No description yet' : 
            item.description.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })
          }
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {item.chinese==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={`https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=zh-TW&text=${item.chinese}&op=translate`}>
                <IconButton aria-label="google translate" className={classes.iconButton}>
                    <GTranslateIcon  />
                </IconButton>
            </a>
        }
        {item.facebook==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.facebook}>
                <IconButton aria-label="facebook link" className={classes.iconButton}>
                <FacebookIcon  />
                </IconButton>
            </a>
        }
        {item.instagram==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.instagram}>
                <IconButton aria-label="instagram link" className={classes.iconButton}>
                <Instagram  />
                </IconButton>
            </a>
        }
        {item.line==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.line}>
                <IconButton aria-label="line link" className={classes.iconButton}>    
                    <LineIcon/>
                </IconButton>
            </a>
        }
        {item.website==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.website}>
                <IconButton aria-label="website link" className={classes.iconButton}>
                    <LanguageIcon  />
                </IconButton>
            </a>
        }
      </CardActions>
     
    </Card>
  );
}



