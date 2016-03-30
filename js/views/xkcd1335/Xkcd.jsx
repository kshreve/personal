import React from 'react';
import KineticJS from 'kinetic';

import BaseComponent from './../../controls/BaseComponent.jsx';

export default class Xkcd extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            backgroundSource: '/background.png',
            foregroundSource: '/foreground.png'
        };
    }

    componentDidMount() {
        let { backgroundSource, foregroundSource } = this.state,
            stage = new KineticJS.Stage({
                container: 'kineticMount',
                width:     706,
                height:    706
            }),
            backgroundLayer = new KineticJS.Layer(),
            foregroundLayer = new KineticJS.Layer();

        let backgroundImage = new Image();
        backgroundImage.src = backgroundSource;
        backgroundImage.onload = () => {
            let backgroundKineticImage = new KineticJS.Image({
                image:  backgroundImage,
                x:      0,
                y:      0,
                width:  706,
                height: 706
            });
            backgroundLayer.add(backgroundKineticImage);
            stage.add(backgroundLayer);
        };

        let foregroundImage = new Image();

        foregroundImage.src = foregroundSource;
        foregroundImage.onload = () => {
            let foregroundKineticImage = new KineticJS.Image({
                image:  foregroundImage,
                x:      353,
                y:      353,
                width:  577,
                height: 613,
                offset: {
                    x: 288.5,
                    y: 306.5
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

    render() {
        return (
            <div>
                <a href="https://xkcd.com/1335/">Link to Original</a>
                <div id="kineticMount"></div>
            </div>
        );
    }
}
