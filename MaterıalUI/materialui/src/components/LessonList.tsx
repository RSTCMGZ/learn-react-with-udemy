import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

export default function LessonList() {
    return (
        <Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                            <ListItemText primary='inbox' />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                            <ListItemText primary='drafts' />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider>
                <ListItem>
                    <ListItemButton>
                        <DraftsIcon />
                        <ListItemText primary='drafts' />
                    </ListItemButton>
                </ListItem>
            </Divider>
            <ListItem>
                <ListItemButton>
                    <DraftsIcon />
                    <ListItemText primary='drafts' />
                </ListItemButton>
            </ListItem>
        </Box>
    )
}
