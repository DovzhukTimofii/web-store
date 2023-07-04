import PropTypes from 'prop-types';
import { SceneSofaBlack } from '../models/scenes/SceneSofaBlack';
import { SceneTable } from '../models/scenes/SceneTable';
import { SceneSofa } from '../models/scenes/SceneSofa';
import { SceneChairGray } from '../models/scenes/SceneChairGray';
import { SceneChairWhite } from '../models/scenes/SceneChairWhite';
import { SceneGoldenLamp } from '../models/scenes/SceneGoldenLamp';
import { SceneLamp } from '../models/scenes/SceneLamp';
import { SceneTableWhite } from '../models/scenes/SceneTableWhite';

export const RenderItemImage = ({item}) => {
    switch (item.img) {
        case 'SceneSofaBlack':
          return <SceneSofaBlack />;
        case 'SceneTableWhite':
          return <SceneTableWhite />;
        case 'SceneLamp':
          return <SceneLamp />;
        case 'SceneGoldenLamp  ':
          return <SceneGoldenLamp  />;
        case 'SceneChairWhite':
          return <SceneChairWhite />;
        case 'SceneChairGray':
          return <SceneChairGray />;
        case 'SceneSofa':
          return <SceneSofa/>;
        case 'SceneTable':
          return <SceneTable />;
        default:
          return <SceneGoldenLamp />;
    }
}

RenderItemImage.propTypes = {
    item: PropTypes.shape({
      img: PropTypes.string.isRequired,
    }).isRequired,
  };