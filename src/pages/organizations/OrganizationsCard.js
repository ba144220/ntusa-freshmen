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
import { red } from '@material-ui/core/colors';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Instagram } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: red[500],
  },
}));





export default function OrganizationsCard({item}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {item.avatar[0].toUpperCase()}
          </Avatar>
        }
        
        title={item.title}
        subheader={item.chinese==null? '':item.chinese}
      />
      <CardMedia
        className={classes.media}
        image={item.image}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description == null ? 'No description yet' : item.description}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {item.chinese==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={`https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=zh-TW&text=${item.chinese}&op=translate`}>
                <IconButton aria-label="google translate">
                <GTranslateIcon  />
                </IconButton>
            </a>
        }
        {item.facebook==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.facebook}>
                <IconButton aria-label="facebook link">
                <FacebookIcon  />
                </IconButton>
            </a>
        }
        {item.instagram==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.instagram}>
                <IconButton aria-label="instagram link">
                <Instagram  />
                </IconButton>
            </a>
        }
        {item.website==null? <div></div> :
            <a target="_blank" rel="noopener noreferrer"  href={item.website}>
                <IconButton aria-label="website link">
                <LanguageIcon  />
                </IconButton>
            </a>
        }

        
        
       
        
      </CardActions>
     
    </Card>
  );
}



