import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HouseIcon from '@material-ui/icons/House';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CasinoIcon from '@material-ui/icons/Casino';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import BusinessIcon from '@material-ui/icons/Business';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import CheckIcon from '@material-ui/icons/Check';



import Organizations from '../pages/organizations/Organizations'
import { OrganizationsConfigs } from '../pages/organizations/OrganizationsConfigs';

const PageConfig = [
    {
        title: 'About NTU', 
        url: '/about-ntu', 
        icon:<AccountBalanceIcon color="secondary"/>, 
        jsx:(<div>About NTU</div>)
    },
    {
        title: 'NTU Life', 
        url: '/ntu-life', 
        icon:<HouseIcon  color="secondary"/>, 
        jsx:(<div>NTU Life</div>)
    },
    {
        title: 'Food & Shopping', 
        url: '/food-and-shopping', 
        icon:<FastfoodIcon color="secondary"/>, 
        jsx:(<div>Food and Shopping</div>)
    },
    {
        title: 'Course Select', 
        url: '/course-select', 
        icon:<CasinoIcon color="secondary"/>, 
        jsx:(<div>Course Select</div>)
    },
    {
        title: 'Transportation', 
        url: '/transportation', 
        icon:<DirectionsBusIcon color="secondary"/>, 
        jsx:(<div>Transportation</div>)
    },
    {
        title: 'Campus Facilities', 
        url: '/campus-facilities', 
        icon:<BusinessIcon color="secondary"/>, 
        jsx:(<div>Campus Facilities</div>)
    },
    {
        title: 'Legal Documents', 
        url: '/legal-documents', 
        icon:<DescriptionIcon color="secondary"/>, 
        jsx:(<div>Legal Documents</div>)
    },
    {
        title: 'Organizations', 
        url: '/organizations', 
        icon:<PeopleIcon color="secondary"/>, 
        jsx:(<Organizations></Organizations>)
    },
    {
        title: 'Contacts', 
        url: '/contacts', 
        icon:<ContactSupportIcon color="secondary"/>, 
        jsx:(<div>Contacts</div>)
    },
    {
        title: 'Miscellaneous', 
        url: '/miscellaneous', 
        icon:<FormatListBulletedIcon color="secondary"/>, 
        jsx:(<div>Miscellaneous</div>)
    },
    {
        title: 'Test', 
        url: '/test', 
        icon:<CheckIcon color="secondary"/>, 
        jsx:(<Organizations></Organizations>)
    },



]


export {PageConfig}