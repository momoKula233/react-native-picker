# A Picker Component for React Native

usage:

```
class DemoPicker extends React.Component {
  render(){
    return (
      <Picker onChange={this.onChange}>
        <Picker.Item label='foo' value='foo' />
        <Picker.Item label='bar' value='bar' />        
      </Picker>
    )
  }
  onChange = ({value}) => {
    // use your value here
  }
}
```
