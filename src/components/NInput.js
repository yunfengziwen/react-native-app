import React, {
    Component
} from "react";
import {
    TextInput,
    View
} from "react-native";
class NInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <View
                style = {
                    {
                        height: 40,
                        borderColor: '#d1d1d1',
                        borderWidth: 1,
                        borderRadius: 4,
                    }
                } >
                < TextInput 
                style = {
                    {
                        marginLeft: 10,
                        height: 40
                    }
                }
                {
                    ...this.props
                }
                autoCapitalize = 'none'
                />
            </View>
        )
    }
}
export default NInput;