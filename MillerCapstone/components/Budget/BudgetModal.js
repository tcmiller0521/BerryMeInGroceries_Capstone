import React, { useEffect, useState } from "react";
import { Alert, 
        Modal, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity, 
        TextInput, 
        Keyboard
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createBudget } from "../../actions/budget";
import { selectBudgetList } from "../../state/budgetSlice";


const BudgetModal = ({ setCurrentBudgetId, currentBudgetId }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [budgetData, setBudgetData] = useState({ budgetName: "", remaining: "", spent: "" });
    const dispatch = useDispatch();  

    const allBudgets = useSelector(selectBudgetList);
    const foundBudget = (currentBudgetId ? budgetModal.find((budget) => budget._id === currentBudgetId) : null)

    useEffect(() => {
        if (foundBudget) setText(foundBudget)
    }, [foundBudget])

    const clear = () => {
        selectBudgetList({ budgetName: "", remaining: "", spent: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBudget(budgetData))
        setModalVisible(!modalVisible)
        clear();
    }

    console.log(budgetData)
    
    return (
        <View style={budgetModal.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={budgetModal.centeredView}>
                    <View style={budgetModal.modalView}>
                        <Text style={budgetModal.modalText}>New Budget</Text>
                        <View style={budgetModal.inputView}>
                        <TextInput
                                placeholder="Budget Name"
                                name="budgetName"
                                style={budgetModal.input}
                                value={budgetData.budgetName}
                                onChangeText={(text) => setBudgetData({...budgetData, budgetName: text})}
                            />
                            <TextInput
                                placeholder="Budget Amount"
                                name="remaining"
                                keyboardType="numeric"
                                style={budgetModal.input}
                                value={budgetData.remaining}
                                onChangeText={(text) => setBudgetData({...budgetData, remaining: text})}
                            />
                            
                            <TouchableOpacity
                               
                               onPress={handleSubmit}
                                style={[budgetModal.button, budgetModal.buttonClose]}
                            >
                                <Text style={budgetModal.textStyle}>
                                    Create Budget
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[budgetModal.button, budgetModal.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={budgetModal.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[budgetModal.button, budgetModal.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={budgetModal.textStyle}>+ Add Budget</Text>
            </TouchableOpacity>
        </View>
    );
};

const budgetModal = StyleSheet.create({
    centeredView: {
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#1B1F22",
        width: 325,
        height: 340,
        borderRadius: 100 / 2,
        alignItems: "center",
        elevation: 5
    },
    dropDownMenu: {
        width: 275,
        marginBottom: 20,
    },
    dropDownContainerStyle: {
        backgroundColor: "#fff",
        width: 275
    },
    labelStyle: {
        fontFamily: "Roboto-Regular",
        color: "#1B1F22"
    },
    button: {
        borderRadius: 100 / 2,
        justifyContent: "center",
        marginBottom: 20
    },
    buttonOpen: {
        backgroundColor: "#363E44",
        width: 300,
        height: 50,
    },
    buttonClose: {
        backgroundColor: "#363E44",
        width: 275,
        height: 45,
        marginBottom: 15
    },
    textStyle: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
        borderRadius: 100 / 2
    },
    modalText: {
        marginBottom: 15,
        marginTop: 20,
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 25,
        borderRadius: 100 / 2
    },
    inputView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        marginBottom: 15,
        textAlign: "center",
        height: 40,
        width: 275,
        backgroundColor: "#fff",
        borderRadius: 100 / 5,
    },
});

export default BudgetModal;