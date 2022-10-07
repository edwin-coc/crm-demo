import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Divider from '@mui/material/Divider'

import ListDataLead from '../../../../components/ListDataLead'
import ListStatusLead from '../../../../components/ListStatusLead'
import ListTagsLead from '../../../../components/ListTagsLead'
import ListSurveyLead from '../../../../components/ListSurveyLead'
import ListHistoryLead from '../../../../components/ListHistoryLead'
import ListUtmsLead from '../../../../components/ListUtmsLead'

import useStatesHairTransplant from '../hooks/useStateHairTranplant'
import useTagsHairTransplant from '../hooks/useTagsHairTransplant'

import { modalTheme } from '../../../../theme/modalTheme'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Lead({ handleCloseModal, open, data }) {

    const [value, setValue] = useState(0)
    const { checked, setChecked, submitToogleChecked } = useStatesHairTransplant()
    const { myTags, handleChangeTags, submitAddTags, tagsList, setTagsList, deleteTag } = useTagsHairTransplant()

    const handleChange = (_, newValue) => setValue(newValue)

    useEffect(() => {
        setChecked(data.status)
        setTagsList(data.tags)
    }, [data])

    return (
        <Modal
          open={open}
          onClose={handleCloseModal}
        >
            <Box sx={modalTheme}>
                <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="primary">
                    <Tab label="Lead" />
                    <Tab label="Survey" />
                    <Tab label="Photos" />
                    <Tab label="History" />
                    <Tab label="Utms" />
                    <Tab label="Agent" />
                </Tabs>
                <Box sx={{ flex: 1 }}>
                    {value === 0 && (
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography variant="h6" component="h6" align="center">Data</Typography>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    <ListDataLead primary="First Name" data={data.firstName} />
                                    <ListDataLead primary="Last Name" data={data.lastName} />
                                    <ListDataLead primary="Phone Number" data={`${data.countryCode} ${data.phoneNumber}`} />
                                    <ListDataLead primary="Email" data={data.email} />
                                    <ListDataLead primary="Create In" data={data.createIn} />
                                </List>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={2.9}>
                                <ListStatusLead
                                    checked={checked}
                                    submitToogleChecked={submitToogleChecked}
                                    dataId={data._id}
                                />
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={5}>
                                <ListTagsLead
                                    myTags={myTags}
                                    handleChangeTags={handleChangeTags}
                                    submitAddTags={submitAddTags}
                                    dataId={data._id}
                                    tagsList={tagsList}
                                    deleteTag={deleteTag}
                                />
                            </Grid>
                        </Grid>
                    )}
                    {value === 1 && <ListSurveyLead survey={data.survey} />}
                    {value === 2 && (
                        <ImageList
                        sx={{ width: '100%', height: 450 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={121}
                      >
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                              {...srcset(item.img, 121, item.rows, item.cols)}
                              alt={item.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    )
                    }
                    {value === 3 && <ListHistoryLead history={data.history} />}
                    {value === 4 && <ListUtmsLead utms={data.utmData} />}
                </Box>
            </Box>
        </Modal>
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
]