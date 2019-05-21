import React from 'react';
import './index.less'
export default class Counter extends React.Component {
    static defaultProps = {
        commas: true,
        timeout: 500,
        steps: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            targetValue: props.value,
            originalValue: props.value,
            currentValue: props.value
        };
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }


    getValue(percent) {
        const diff = this.state.targetValue - this.state.originalValue;
        return (diff * percent) + this.state.originalValue;
    }

    componentDidMount() {
        this.setState({
            currentStep: 0,
            originalValue: 0,
            targetValue: this.props.value || 0
        });
        clearInterval(this._interval);
        this._interval = setInterval(() => {
            if (this.state.currentStep >= this.props.steps) {
                clearInterval(this._interval);
            }
            this.setState(
                prevState => {
                    return {
                        currentValue: this.getValue(this.state.currentStep / this.props.steps),
                        currentStep: prevState.currentStep + 1
                    };
                });
        }, this.props.timeout / this.props.steps);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentStep: 0,
            originalValue: this.state.currentValue || 0,
            targetValue: nextProps.value || 0
        });
        clearInterval(this._interval);
        this._interval = setInterval(() => {
            if (this.state.currentStep >= this.props.steps) {
                clearInterval(this._interval);
            }
            this.setState({
                currentValue: this.getValue(this.state.currentStep / this.props.steps),
                currentStep: this.state.currentStep + 1
            });
        }, this.props.timeout / this.props.steps);
    }

    static commas(val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        let value = Math.round(this.state.currentValue);
        if (this.props.commas) {
            value = Counter.commas(value);
        }
        return (
            <div className='counter'>
                {value}
            </div>
        );
    }
}
