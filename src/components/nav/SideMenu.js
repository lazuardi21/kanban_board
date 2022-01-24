import { Drawer, Grow, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import colors from '../../utils/Color';
import { getImages } from '../../utils/ImageApi';
// import TopBar from './TopBar';


const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '400px'
    },
    menu: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
    },
    box: {
        width: '45%',
        height: '90px',
        backgroundColor: 'blue',
        borderRadius: '9px',
        marginBottom: theme.spacing(2),
        fontSize:40,
        textAlign:'center',
        padding: '20px',
        
    },
    optionContainer: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
}));

const SideMenu = ({ openSideMenu, setOpenSideMenu, setBackgroundImage }) => {
    const classes = useStyles();
    const [openOptionColor, setOpenOptionColor] = useState(false);
    const [openOptionImage, setOpenOptionImage] = useState(false);
    const [images, setImages] = useState([]);
    const getlistImages = async () => {
        const listImages = await getImages()
        console.log(listImages);
        setImages(listImages)
    }

    useEffect(() => {
        getlistImages();
    }, []);

    return (
        <div>
            <Drawer open={openSideMenu}
                anchor='right'
                onClose={() => setOpenSideMenu(false)}>
                <div className={classes.drawer}>
                    <div className={classes.menu}>
                        <div className={classes.box}
                            style={{
                                backgroundImage: 'url(https://awsimages.detik.net.id/community/media/visual/2021/12/14/natural-landscape-photography-awards-2021-2.jpeg?w=750&q=90)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                
                            }}
                            onClick={() => setOpenOptionImage(true)}
                        > Image
                        </div>
                        <div className={classes.box}
                            style={{
                                backgroundImage: 'blue',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                            onClick={() => {
                                setOpenOptionColor(true)
                                setOpenOptionImage(false)
                            }}
                        >
                            Color
                        </div>
                    </div>
                    {openOptionImage ?
                        <Grow in={openOptionImage}>
                            <div className={classes.optionContainer}>
                                {images.map((image, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={classes.box}
                                            style={{
                                                backgroundImage: `url(${image.thumb})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover'
                                            }}
                                            onClick={() => setBackgroundImage(image.full)}
                                        ></div>
                                    )
                                })}
                            </div>
                        </Grow>
                        :
                        <Grow in={openOptionColor}>
                            <div className={classes.optionContainer}>
                                {colors.map((color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={classes.box}
                                            style={{
                                                backgroundColor: color,
                                            }}
                                            onClick={() => setBackgroundImage(color)}
                                        ></div>
                                    )
                                })}
                            </div>
                        </Grow>
                    }


                </div>
            </Drawer>
        </div>
    );
}

export default SideMenu;
