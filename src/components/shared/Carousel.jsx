import React, { Component } from 'react';

import arrow_left from '../../assets/icons/arrow_left.svg';
import arrow_right from '../../assets/icons/arrow_right.svg';
import apple from '../../assets/brands/apple.svg';
import samsung from '../../assets/brands/samsung.svg';
import lg from '../../assets/brands/lg.svg';
import sony from '../../assets/brands/sony.svg';
import dell from '../../assets/brands/dell.svg';
import bestbuy from '../../assets/brands/bestbuy.svg';

import { ImageSlider, Arrow, MobileBrandChildren } from './Helpers';

const brands = [
    {text: 'Apple', icon: apple}, 
    {text: 'Samsung', icon: samsung}, 
    {text: 'LG', icon: lg}, 
    {text: 'Sony', icon: sony}, 
    {text: 'Dell', icon: dell}, 
    {text: 'Best Buy', icon: bestbuy}
]

class Carousel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentImageIndex: 2
        };
    }

    previousBrand = () => {
        const lastIndex = brands.length;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 2;
        const index = shouldResetIndex ? lastIndex - 1 : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextBrand = () => {
        const lastIndex = brands.length;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex - 1;
        const index = shouldResetIndex ? 2 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }    
    
    render() {        
        const { styles } = this.props;
        const { currentImageIndex } = this.state;

        const carouselStyle = {
            display: 'inline-flex',
            alignItems: 'center',       
            justifyContent: styles.isMobile ? 'space-between' : 'space-around',
            maxWidth: styles.isMobile ? '90vw' : '1100px',
            height: '85px',
            paddingLeft: '20px',
            paddingRight: '20px',
            width: '100%'
        };

        return (
            <div className='carousel-container' style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
                {styles.isMobile ? (
                    <div style= { carouselStyle }>
                        <Arrow
                            direction={'left'}
                            clickFunction={this.previousBrand}
                            src={arrow_left}
                        />
                        <MobileBrandChildren styles={styles} currentImageIndex={currentImageIndex}  brands={brands} />
                        <Arrow
                            direction={'right'}
                            clickFunction={this.nextBrand}
                            src={arrow_right}
                        />
                    </div>
                ) : (
                    <div style={carouselStyle}>
                        {brands.map((brand, i) => {
                            return (<ImageSlider key={i} title={brand.text} src={brand.icon} styles={this.props.styles} style={{margin: '30px'}}/>)
                        })}
                    </div>
                )} 
            </div>
        )
    }
}

export default Carousel;