import React from 'react'
import { View, requireNativeComponent } from 'react-native'
import propTypes from 'prop-types';

class BroadcastView extends React.Component {
  render () {
    return <RNBroadcastView {...this.props} />
  }
}

BroadcastView.propTypes = {
  /**
   * cameraPosition: 'front' or 'back'
   * publish: If an rtmpURL is provided, will start publishing.
              If empty string provided, will stop publishing.
   */
  ...View.propTypes,
  cameraPosition: propTypes.string,
  publish: propTypes.string
}

var RNBroadcastView = requireNativeComponent('RNBroadcastView', BroadcastView)

module.exports = BroadcastView
