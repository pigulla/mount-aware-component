import { Component } from 'react';

export default class MountAwareComponent extends Component {
    forceUpdateIfMounted() {
        if (this.__mounted) {
            this.forceUpdate();
        }
    }

    setStateIfMounted() {
        if (this.__mounted) {
            this.setState(...arguments);
        }
    }

    componentDidMount() {
        this.__mounted = true;
    }

    componentWillUnmount() {
        this.__mounted = false;
    }
}