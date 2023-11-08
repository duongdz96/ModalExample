import React, {useCallback, useMemo, useState} from "react";
import { useTranslation } from "react-i18next";
import {
    Platform, 
    StyleSheet, 
    Text,
    View,
    TextInput,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
} from "react-native";
import { Modal } from "react-native-paper";
import { useOrientation } from "./hooks/useOrientation";
import useModalManager from "./hooks/useModalManager";
import { useAppTheme } from "./resources/theme";
const CalculationModalContent = ({
    onCalculate,
    onCloseModal,
}: {
    onCalculate: (sum: Number) => void;
    onCloseModal: () => void;
}): JSX.Element => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const { isPortrait, ORIENTATION_WIDTH, ORIENTATION_HEIGH } = useOrientation();
    const { t } = useTranslation();
    const theme = useAppTheme();
    const handleCalculateSum = useCallback(async() => {
        const result = parseFloat(number1) + parseFloat(number2);
        onCalculate(result);
        onCloseModal();
    }, []);
    const modalContainer = useMemo<StyleProp<ViewStyle>>(
        () => ({
          width: isPortrait ? ORIENTATION_WIDTH / 1.2 : ORIENTATION_HEIGH / 1.2,
    
          paddingVertical: 16,
          borderRadius: 12,
        }),
        [ORIENTATION_WIDTH],
      );
    return (
        <View style={modalContainer}>
            <Text style={styles.textTitle}>Calculation Sum</Text>
            <TextInput
             style={styles.inputInformation}
             value={number1}
             onChangeText={(e) => setNumber1(e)}
            />
            <TextInput
             style={styles.inputInformation}
             value={number2}
             onChangeText={(e) => setNumber2(e)}
            />
            <TouchableOpacity onPress={handleCalculateSum}>
                <Text>Calculate</Text>
            </TouchableOpacity>
        </View>
    )
}
const CalculationModal = (): JSX.Element | null => {
    const {isOpen, closeModal, getParams} = useModalManager('CalculationModal')
    const visible = isOpen('CalculationModal');

    const onClose = (): void => {
        closeModal('CalculationModal');
    }

    const handleCalculateCallback = (sum: Number) => {
        getParams('CalculationModal')?.onCalculationCallback?.(sum);
        closeModal('CalculationModal')
    }
    return (
        <Modal
         visible={visible}
         onDismiss={onClose}
         contentContainerStyle={styles.modal}
        >
        {visible ? <CalculationModalContent onCloseModal={onClose} onCalculate={handleCalculateCallback}/>: null}
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    inputInformation: {
        height: 36,
        borderRadius: 5,
        marginHorizontal: 16,
        textAlign: 'center',
    },
    containerButton: { 
        flexDirection: 'row', 
        justifyContent: 'space-around' 
    },
})
export default CalculationModal