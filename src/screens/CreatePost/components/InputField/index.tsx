import React from "react";
import { StyledInput } from "../../../../styles";
import { color, fonts } from "../../../../constants";
import { InputFieldProps } from "../../../../interfaces/screenProps";

const InputField: React.FC<InputFieldProps> = ({placeholder, onBlur, onChange, value, isTextArea}) => {
    return (
        <StyledInput
            br="10px"
            mb="25px"
            color={color.black}
            placeholderTextColor={color.placehlderColor}
            ph="30px"
            backgroundColor="#f2f2f3"
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            fontFamily={fonts.regular}
            fontSize="17px"
            lineHeight="24.82px"
            numberOfLines={isTextArea ? 4 : 1}
            minHeight={isTextArea ? '150px' : '60px'}
            textAlignVertical={isTextArea ? "top" : 'auto'}
            pv="16px"
            multiline = {isTextArea}
          />
    )
}

export default InputField