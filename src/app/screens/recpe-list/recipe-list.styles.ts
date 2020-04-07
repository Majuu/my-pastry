import {StyleSheet} from 'react-native';
import {ColorsEnum} from '../../enums/colors.enum';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        flex: 0.25,
        backgroundColor: ColorsEnum.LIGHT_GREEN,
        borderBottomColor: ColorsEnum.DARK_GREEN,
        borderBottomWidth: 2
    },
    itemList: {
        backgroundColor: ColorsEnum.MARBLE,
        display: 'flex',
        flexDirection: 'column',
        flex: 30
    }
});
