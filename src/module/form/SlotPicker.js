import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { Component } from 'react'
export default class SlotPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          slot: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
      }
handleChange = (e) => {
  this.setState({slot:e});
}
      render() {
        return (
            <DayTimePicker timeSlotSizeMinutes={15} onConfirm={(e)=>{
              console.log(e);
             this.handleChange(e);
              this.props.triggerNextStep({value:this.state.slot})
            }}/>

        )}

}