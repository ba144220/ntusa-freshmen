
import { Container, Divider, FormControlLabel, FormLabel, makeStyles, Switch, Typography } from '@material-ui/core'
import React from 'react'
import Masonry from 'react-masonry-css'
import FormGroup from '@material-ui/core/FormGroup';

import GTranslateIcon from '@material-ui/icons/GTranslate';
import FacebookIcon from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import LineIcon from './icons/LineIcon';

import OrganizationsCard from './OrganizationsCard'
import {OrganizationsConfigs} from './OrganizationsConfigs'
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
    test: {
        border: '2px solid green',
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    innerContainer: {
       
        paddingLeft:theme.spacing(0.5),
        marginBottom:theme.spacing(10),
    },
    guide: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    guideGroup: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)
    }
}))


export default function Organizations() {
    
    const classes = useStyles()

    const [showImg, setShowImg] = useState(false)

    const breakpoints = {
        default: 3,
        1100:2,
        800:1,  
    }

    return(
        <Container >
            <FormGroup row>
                
                <FormControlLabel
                    control={
                    <Switch
                        checked={showImg}
                        onChange={()=>{setShowImg(!showImg)}}
                        name="checkedB"
                        color="secondary"
                    />
                    }
                    label="Show images"
                />
            </FormGroup>
            <FormGroup row className={classes.guideGroup}>
                <div className={classes.guide}>
                    <GTranslateIcon color='secondary'/>
                    <Typography >：中文翻譯和發音</Typography>
                </div>
                <div className={classes.guide}>
                    <FacebookIcon color='secondary'/>
                    <Typography>：Facebook link</Typography>
                </div>
                <div className={classes.guide}>
                    <Instagram color='secondary'/>
                    <Typography>：Instagram link</Typography>
                </div>
                <div className={classes.guide}>
                    <LineIcon color='secondary'/>
                    <Typography>：Line link</Typography>
                </div>
                <div className={classes.guide}>
                    <LanguageIcon color='secondary'/>
                    <Typography>：Offical website</Typography>
                </div>
            </FormGroup>
            {
                OrganizationsConfigs.map( category => (
                    <div>
                        <Typography variant='h3'>{category.category}</Typography>
                        <Divider className={classes.divider}/>
                        <Container className={classes.innerContainer}>
                            <Masonry
                            breakpointCols={breakpoints}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                            >
                                {category.organizations.map(item => (
                                    <OrganizationsCard showImg={showImg} item={item} />
                                ))}
                            </Masonry>
                        </Container>
                    </div>

                )
                )

            }
            


            
        </Container>
        
    )
}