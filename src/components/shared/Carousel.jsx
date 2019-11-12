import React, { Component } from 'react';

import ReactSVG from 'react-svg';
import down_carrot from '../../assets/icons/down_carrot.svg';
import apple from '../../assets/brands/apple.svg';
import samsung from '../../assets/brands/samsung.svg';
import lg from '../../assets/brands/lg.svg';
import sony from '../../assets/brands/sony.svg';
import dell from '../../assets/brands/dell.svg';
import bestbuy from '../../assets/brands/bestbuy.svg';

const brands = [
    {text: 'Apple', icon: apple}, 
    {text: 'Samsung', icon: samsung}, 
    {text: 'LG', icon: lg}, 
    {text: 'Sony', icon: sony}, 
    {text: 'Dell', icon: dell}, 
    {text: 'Best Buy', icon: bestbuy}
]

const ImageSlide = ({ title, src, styles }) => {
    return (
        <div className={`brand-icon ${title}`}>
            <ReactSVG
                src={src}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
            />
            {!styles.isMobile ? (<span>{title}</span>) : (null)}
        </div>
    );
};

const Arrow = ({ direction, clickFunction, src }) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        <ReactSVG
            src={src}
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
        />
    </div>
);

const MobileChildren = ({ styles, currentImageIndex }) => {
    let children = [];

    brands.map((brand, i) => {        
        // current item is within +- 1 of current index
        if (
            (i + 1) === (currentImageIndex + 1) ||
            (i + 1) === (currentImageIndex) ||
            (i + 1) === (currentImageIndex - 1)
            ) {
            children.push(<ImageSlide key={i} title={brand.text} src={brand.icon} styles={styles} />);
                return(null);
        } else {
            return(null)
        };
    });
    return children;
}

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
            justifyContent: 'space-between',
            minWidth: 'calc(100vw - 40px)',
            height: '75px',
            // paddingBottom: '15px',
            paddingLeft: '20px',
            paddingRight: '20px',
        };

        const carouselStyleWeb = {
            display: 'inline-flex',
            justifyContent: 'space-around',
            width: '100%',
        };

        return (
            <div>
                {styles.isMobile ? (
                    <div style= { carouselStyle }>
                        <Arrow
                            direction={'left'}
                            clickFunction={this.previousBrand}
                            src={down_carrot}
                        />
                        <MobileChildren styles={styles} currentImageIndex={currentImageIndex} />
                        <Arrow
                            direction={'right'}
                            clickFunction={this.nextBrand}
                            src={down_carrot}
                        />
                    </div>
                ) : (
                    <div style={carouselStyleWeb}>
                        
                    </div>
                )} 
            </div>
        )
        
        // return (styles.isMobile ? 
        // (
        //     <div style={carouselStyle}>
        //         <Arrow
        //             direction={'left'}
        //             clickFunction={this.previousBrand}
        //             src={down_carrot}
        //         />
        //         <this.mobileChildren styles={styles} />
        //         <Arrow
        //             direction={'right'}
        //             clickFunction={this.nextBrand}
        //             src={down_carrot}
        //         /> 
        //     </div>
        // ) : (
        //     <div style={carouselStyle}>
        //         {brands.map((brand, i) => {
        //             return (<ImageSlide key={i} title={brand.text} src={brand.icon} styles={this.props.styles} />)
        //         })}
        //     </div>
        // )
        // )
    }
}

export default Carousel;