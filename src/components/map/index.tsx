import * as React from 'react';
import { Map, IProvidedProps, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { SiteMetadata } from '../../data';
import mapStyles from './styles';
import './index.scss';

interface MapContainerProps extends IProvidedProps {
  siteMetadata: SiteMetadata;
}

class MapContainer extends React.Component<MapContainerProps> {
  state = {
    activeMarker: {},
    showInfoWindow: false,
  };

  constructor(props: MapContainerProps) {
    super(props);
  }

  onMarkerClick = (_props: any, marker: Marker) => {
    this.setState({
      activeMarker: marker,
      showInfoWindow: true,
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showInfoWindow: false,
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        styles={mapStyles}
        draggable={false}
        containerStyle={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        zoom={this.props.siteMetadata.map.zoom}
        initialCenter={this.props.siteMetadata.map.center}
      >
        <Marker
          title={`${this.props.siteMetadata.title} tattoo studio!`}
          name={`${this.props.siteMetadata.title}`}
          position={this.props.siteMetadata.map.center}
          onClick={this.onMarkerClick}
        ></Marker>
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showInfoWindow}
        >
          <div className="aci-Map__info-window">
            <div>
              <b>Tattoo studio {this.props.siteMetadata.title}</b>
            </div>
            <div>{this.props.siteMetadata.addressLine1}</div>
            <div>{this.props.siteMetadata.addressLine2}</div>
            <div>
              <b>
                <a href={`tel:${this.props.siteMetadata.phone}`}>{this.props.siteMetadata.phone}</a>
              </b>
            </div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY as string,
})(MapContainer);
