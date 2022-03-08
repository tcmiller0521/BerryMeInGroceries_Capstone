import React, { useCallback, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { useSelector } from "react-redux";
import { selectBudgetList } from '../../state/budgetSlice';


const HomepageBudget = () => {

    const windowWidth = Dimensions.get('window').width

    const [activeIndex, setActiveIndex] = useState(0);
    const allBudgets = useSelector(selectBudgetList)
    const ref = useRef(null)

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View>
                <View style={homepageBudget.headerContainer}>
                    <Text style={homepageBudget.headerText}>
                        {item.budgetName}
                    </Text>
                </View>
                <View style={homepageBudget.budgetContainer}>
                    <View style={[homepageBudget.budgetBox, homepageBudget.budgetOne]}>
                        <Text style={homepageBudget.budgetText}>
                            Spent
                        </Text>
                        {item.spent === null ?
                            <Text style={homepageBudget.amountText}>
                                $0
                            </Text> :
                            <Text style={homepageBudget.amountText}>
                                ${item.spent}
                            </Text>
                        }
                    </View>
                    <View style={[homepageBudget.budgetBox, homepageBudget.budgetTwo]}>
                        <Text style={homepageBudget.budgetText}>
                            Remaining
                        </Text>
                        <Text style={homepageBudget.amountText}>
                            ${item.remaining - item.spent}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }, []);

    return (
        <>
            <View style={homepageBudget.container}>
                <Carousel
                    layout="default"
                    ref={ref}
                    data={allBudgets}
                    sliderWidth={windowWidth}
                    itemWidth={325}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            </View>
        </>
    )
}

const homepageBudget = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 10,

    },
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    headerContainer: {
        marginBottom: 8,
    },
    budgetContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    budgetBox: {
        width: 150,
        height: 100,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
    },
    budgetOne: {
        backgroundColor: "#A75889",
    },
    budgetTwo: {
        backgroundColor: "#7B6A9B",
    },
    budgetText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Coolvetica-Regular"
    },
    amountText: {
        color: "#fff",
        fontFamily: "Roboto-Regular"
    }
})


export default HomepageBudget;
