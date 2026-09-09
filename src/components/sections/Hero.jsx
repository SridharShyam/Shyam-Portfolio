import HeroCreative from './HeroCreative';
import HeroData from './HeroData';

const Hero = ({ mode = 'D' }) => {
    return mode === 'S' ? <HeroCreative /> : <HeroData />;
};

export default Hero;
