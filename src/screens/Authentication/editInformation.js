/* eslint-disable react-native/no-inline-styles */
import React, {useState}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Icon, Colors, Images } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';
import DatePicker from 'react-native-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import  ProfileTypes  from '../../redux/Profile/actions';
import DisplayedText from '../../components/displayedText';

export default function EditInformation() {
  const dataProfile = useSelector((state) => state.profile.data);
  const dispatch=useDispatch()
  const birthDate = () =>{
    var today = new Date();
    var dayOfBirth = new Date(dataProfile.birthday);
    var age_now = today.getFullYear() - dayOfBirth.getFullYear();
    var m = today.getMonth() - dayOfBirth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dayOfBirth.getDate())) {
      age_now--;
    }
    return age_now;
  };
  var itemAge = birthDate();

  const [name, setName] = useState(dataProfile.name);
  const [date, setDate] = useState(new Date(dataProfile.birthday));
  const [height, setHeight]= useState(dataProfile.height);
  const [weight, setWeight]= useState(dataProfile.weight);
  const [email, setEmail]= useState(dataProfile.email);
  const [age, setAge] = useState(itemAge);
  const [gender, setGender] = useState(dataProfile.gender);

  const dataOutput = () => {
    const userProfile={
      weight:weight,
      height:height,
      birthday:date,
      age: age,
      name: name,
      photo: dataProfile.photo,
      email: email, 
    };
    dispatch(ProfileTypes.UpdateProfileSuccess(userProfile))
  }

  return (
    <View style={styles.page}>
      <View style={styles.headerPage}>
        <TouchableOpacity
          onPress={() => NavigationUtils.startRoot()}
          style={{ flexDirection: 'row' }}
        >
          <Image source={Icon.icon_back} style={styles.iconBack} />
          <DisplayedText i18nKey = {'Profile'} styleText={styles.title} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
      <View style={styles.backgroundUser}>
        <Image style={styles.imageUSer} source={{ uri: dataProfile.photo }} />
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Image source={Icon.icon_camera} style={styles.iconCamera} />
        </TouchableOpacity>
        <DisplayedText i18nKey = {'Change-avatar'} styleText={{ fontSize: 11 }} />
      </View>
      <View style={styles.formInput}>
        <View style={styles.input}>
        <DisplayedText i18nKey = {'full-name'} styleText={styles.titleInput} />
            <TextInput
              defaultValue={name}
              style={styles.textInput}
              onChangeText={setName}
            />
        </View> 
        <View style={styles.input}>
          <DisplayedText i18nKey = {'Year-of-birth'} styleText={styles.titleInput} />
          <DatePicker
            date = {date}
            mode="date"
            format="DD/MM/YYYY"
            minDate="10-01-1778"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                display: 'none',
                },
                dateInput: {
                marginLeft: 0,
                width:180
                },
            }}
            onDateChange={setDate}
            style={styles.textInput}
            />
        </View> 
        
        <View style={styles.input}>
          <DisplayedText i18nKey = {'Height'} styleText={styles.titleInput} />
            <TextInput
              defaultValue={height}
              style={styles.textInput}
              onChangeText={setHeight}
              maxLength={3} keyboardType={'number-pad'}
            />
        </View>
        <View style={styles.input}>
        <DisplayedText i18nKey = {'Weight'} styleText={styles.titleInput} />
            <TextInput
              defaultValue={weight}
              style={styles.textInput}
              onChangeText={setWeight}
              maxLength={3} keyboardType={'number-pad'}
            />
        </View>  
        <View style={styles.input}>
          <DisplayedText i18nKey = {'Email'} styleText={styles.titleInput} />
            <TextInput
              defaultValue={email}
              style={styles.textInput}
              onChangeText={setEmail}
            />
        </View>  
      </View>
      <View style={styles.functionSave}>
        <TouchableOpacity style={styles.buttonSave} onPress={()=> dataOutput()}>
          <DisplayedText i18nKey = {'Save'} styleText={styles.titleButton} />
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>

  );
}
const styles = StyleSheet.create({
  page: {
    marginTop: 25,
  },
  headerPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBack: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  logo: {
    width: 80,
    height: 31,
  },
  backgroundUser: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUSer: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  iconCamera: {
    height: 35,
    width: 35,
  },
  formInput: {
    marginTop: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  input: {
    backgroundColor: '#EBF7FF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  titleInput: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#525659',
  },
  textInput: {
    width: '60%',
    marginRight: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  functionSave: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
  buttonSave: {
    height: 40,
    width: 340,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  filedDate: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
  },
  label:{
    flex:3,
    fontSize: 18,
    fontFamily: 'Regular',
    alignSelf:"center"
  },

  input: {
    backgroundColor: '#EBF7FF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  titleInput: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#525659',
  },
  textInput: {
    width: '60%',
    marginRight: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
