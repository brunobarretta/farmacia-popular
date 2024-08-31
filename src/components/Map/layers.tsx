import type {LayerProps} from 'react-map-gl';

export const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  source: 'farmacias',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
};

export const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'farmacias',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};

export const unclusteredCircleLayer: LayerProps = {
  id: "unclustered-point-circle",
  type: "circle",
  source: "farmacias",
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#ff5200',
    'circle-radius': 8, 
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff', 
  },
};

// Layer para desenhar o texto
export const unclusteredTextLayer: LayerProps = {
  id: "unclustered-point-text",
  type: "symbol",
  source: "farmacias",
  filter: ['!', ['has', 'point_count']],
  layout: {
    'text-field': ['get', 'nome'], 
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-size': 12,
    'text-offset': [0, 1.5], 
    'text-anchor': 'top', 
  },
  paint: {
    'text-color': '#000000', 
    'text-halo-color': '#ffffff', 
    'text-halo-width': 2, 
  }
};