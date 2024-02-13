import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

export default function LessonBreadCrumb() {
    return (
        <Breadcrumbs separator='-' maxItems={4}>
            <Link href='/' underline='hover'>Anasayfa</Link>
            <Link href='/' underline='hover'> Blog</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
            <Link href='/' underline='none' >Hakkımda</Link>
        </Breadcrumbs>
    )
}
