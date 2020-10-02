import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { ColorsEnum } from '../../enums/colors.enum';

interface CustomPickerProps {
  list: any[];
  style?: any;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: ColorsEnum.GREEN,
    borderRadius: 5,
    width: '100%',
    height: 50
  },
  picker: {
    color: ColorsEnum.DARK_GREEN,
    width: 'auto',
    height: '100%'
  }
});

const CustomPicker: FunctionComponent<CustomPickerProps> = ({ list, style }: CustomPickerProps): React.ReactElement => {
  const [category, setCategory] = useState<string | number>('All');

  return (
    <View style={{ ...styles.container, ...style }}>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue: number | string): void => setCategory(itemValue)}
        style={styles.picker}
        mode={'dialog'}
      >
        {list.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default CustomPicker;
