import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { StyledView, StyledScrollView } from '../../styles';
import { FormDataProps } from '../../interfaces/screenProps';
import { InputField } from './components';
import { LongButton } from '../../commonComponents';
import { KeyboardAvoidingView } from 'react-native';
import { useFirestoreData } from '../../customHooks';
import { CreatePostScreenProps } from '../../interfaces/navigationProps';
import { windowHeight } from '../../constants';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const CreatePost: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataProps>({
    defaultValues: {
      title: '',
      url: '',
      link: '',
      text: '',
    },
  });

  const { sendNewPost } = useFirestoreData();
  const onSubmit = useCallback((data: FormDataProps) => {
    Keyboard.dismiss();
    sendNewPost({
      id: '',
      url: data.url,
      date: new Date().getTime(),
      text: data.text,
      title: data.title,
    });
    navigation.canGoBack() && navigation.goBack();
  }, []);
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={90} style={{marginTop: -insets.top,}}>
        <StyledScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ minHeight: windowHeight - 140 - insets.top, justifyContent: 'space-between' }}>
          <StyledView ph="30px" pt="20px" flex={1}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  placeholder="Title*"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="title"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  placeholder="Image url"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="url"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  placeholder="Link"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="link"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  placeholder="Type your message here...*"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  isTextArea
                />
              )}
              name="text"
            />
          </StyledView>
          <StyledView ph="30px">
            <LongButton
              text="Public"
              isDisabled={!isValid}
              onPress={handleSubmit(onSubmit)}
            />
          </StyledView>
        </StyledScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreatePost;
