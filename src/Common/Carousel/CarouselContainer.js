import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Button, Card, CardActions, CardContent } from 'material-ui'
import ImgCarousel from './imgCarousel/ImgCarousel'

class CarouselContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            showImages: [],
        }
    }
    
    componentDidMount() {
        this.loadImagesPath()
    }

    loadImagesPath() {
        fetch("https://picsum.photos/list").then(resp => resp.json()).then(
            images => {
                const showImages = []
                for(let i = 0; i < 5; i++) showImages.push(images[Math.floor(Math.random()*images.length)])
                this.setState({images, showImages})
            } 
        )
    }

    selectPic = () => {
        const {images} = this.state
        return images[Math.floor(Math.random()*images.length)];
    }

    addPic = () => {
        const {showImages} = this.state
        showImages.push(this.selectPic())        
        this.setState({showImages})
    }

    removePic = () => {
        const {showImages} = this.state
        showImages.pop()        
        this.setState({showImages})
    }


  render() {
      const {showImages} = this.state
    return (
        <Card>
        <CardContent>
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
        >
            {showImages.map( image => {
                return <ImgCarousel
                    alt={image.author}
                    legend={`Auteur: ${image.author}`}
                    src={"https://picsum.photos/500/300?image=" + image.id}
                />
            })}
        </Carousel>        
        </CardContent>
        <CardActions>
          <Button onClick={this.addPic} raised color="primary">
            Ajouter une photo
          </Button>
          <Button onClick={this.removePic} raised color="primary">
            Enlever une photo
          </Button>
        </CardActions>
        </Card>
        
    );
  }
}

export default CarouselContainer
