import PropTypes from 'prop-types';
import { SceneSofaBlack } from '../models/scenes/SceneSofaBlack';
import { SceneTable } from '../models/scenes/SceneTable';
import { SceneSofa } from '../models/scenes/SceneSofa';
import { SceneChairGray } from '../models/scenes/SceneChairGray';
import { SceneChairWhite } from '../models/scenes/SceneChairWhite';
import { SceneGoldenLamp } from '../models/scenes/SceneGoldenLamp';
import { SceneLamp } from '../models/scenes/SceneLamp';
import { SceneTableWhite } from '../models/scenes/SceneTableWhite';
import React from 'react';


interface ItemType {
  [key: string]: any
}

export const RenderItemImage: React.FC<ItemType> = ({item}) => {
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
