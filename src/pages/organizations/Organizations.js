import React from 'react'

import OrganizationsCard from './OrganizationsCard'
import OrganizationsConfigs from './OrganizationsConfigs'

const item = {
    title: 'NTU Student Association (NTUSA)',
    chinese: '臺大學生會',
    avatar: 'NTUSA',
    image: 'https://i.imgur.com/GU6IHJM.png',
    description: null,
    facebook: 'https://www.facebook.com/NTUSA',
    instagram: 'https://www.instagram.com/ntusa_33rd/',
    line: null,
    website: 'https://ntusa.ntu.edu.tw/',
}



export default function Organizations() {
    return(
        <OrganizationsCard item = {item}></OrganizationsCard>
    )
}