import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const CheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
    color='#8d1b3c'
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckBox;