import React from 'react';
import ReactDom from 'react-dom';
import KineticJS from 'kinetic';

import BaseComponent from './../../controls/BaseComponent';

export default class Xkcd extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let backgroundSize = ReactDom.findDOMNode(this).offsetWidth / 2,
            backgroundSource = require('./../../../assets/background.png'),
            foregroundSource = require('./../../../assets/foreground.png'),
            stage = new KineticJS.Stage({
                container: 'kineticMount',
                width:     backgroundSize,
                height:    backgroundSize
            }),
            backgroundLayer = new KineticJS.Layer(),
            foregroundLayer = new KineticJS.Layer(),
            backgroundImage = new Image();

        backgroundImage.src = backgroundSource;
        backgroundImage.onload = () => {
            let backgroundKineticImage = new KineticJS.Image({
                image:  backgroundImage,
                width:  backgroundSize,
                height: backgroundSize
            });
            backgroundLayer.add(backgroundKineticImage);
            stage.add(backgroundLayer);
        };

        let foregroundImage = new Image(),
            foregroundSize = backgroundSize * 0.8;

        foregroundImage.src = foregroundSource;
        foregroundImage.onload = () => {
            let foregroundKineticImage = new KineticJS.Image({
                image:  foregroundImage,
                x:      backgroundSize / 2,
                y:      backgroundSize / 2,
                width:  foregroundSize,
                height: foregroundSize,
                offset: {
                    x: foregroundSize / 2,
                    y: foregroundSize / 2
                }
            });

            foregroundLayer.add(foregroundKineticImage);
            stage.add(foregroundLayer);

            let timeNow = new Date(),
                offset = (((timeNow.getUTCHours() * 3600) + (timeNow.getUTCMinutes() * 60) + (timeNow.getUTCSeconds())) / 86400) * 360;

            foregroundKineticImage.rotate(offset + 180);

            let angularSpeed = (Math.PI / 86400),
                animation = new KineticJS.Animation((frame) => {
                    let angleDiff = frame.timeDiff * angularSpeed / 500;
                    foregroundKineticImage.rotate(angleDiff);
                }, foregroundLayer);

            animation.start();
        };
    }

    render () {
        return (
            <div>
                <a href="https://xkcd.com/1335/">Link to Original</a>
                <div id="kineticMount"></div>
            </div>
        );
    }
}
