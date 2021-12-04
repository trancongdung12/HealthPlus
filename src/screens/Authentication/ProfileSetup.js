import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Colors } from '../../themes/index';
import DatePicker from 'react-native-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import  ProfileTypes  from '../../redux/Profile/actions';
import CheckBox from '@react-native-community/checkbox';


export default function ProfileSetup() {
  const user = useSelector(state => state.login.dataUser)
  const dichpatch=useDispatch()
  console.log(user);
  const [date, setDate] = useState(new Date())
  const [height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [isMale,setIsMale]=useState(false)
  const [isFemale,setIsFemale]=useState(false)
  const [name, setName] = useState(user.user.name)
  const [image, setImage] = useState(user.user.photo)
  const [email, setEmail] = useState(user.user.email)

  const setup=()=> {
    const userProfile={
      weight:weight,
      height:height,
      gender:isMale?1:0,
      birthday: date,
      age: birthDate(),
      name: name,
      photo: image,
      email: email,
    }
    dichpatch(ProfileTypes.SetUpProfileSuccess(userProfile))
  }

  const birthDate = () =>{
    var today = new Date();
    var dayOfBirth = new Date(date);
    var age_now = today.getFullYear() - dayOfBirth.getFullYear();
    var m = today.getMonth() - dayOfBirth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dayOfBirth.getDate())) {
      age_now--;
    }
    return age_now;
  };

  const onCheckBoxChange=(a)=>{
      if(a=="male"){
        setIsMale(true)
        setIsFemale(false)
      }else{
        setIsMale(false)
        setIsFemale(true)
      }
  }
  const onChangeHeight = (value) => {
    if (Number.isNaN(value)) {
      setHeight(0)
    } else if (value > 250) {
      setHeight(0)
    } else {
      setHeight(value)
    }
  }
  const onChangeWeight = (value) => {
    if (Number.isNaN(value)) {
        setWeight(0)
    } else if (value > 300) {
        setWeight(0)
    } else {
        setWeight(value)
    }
  }
  const message = () =>{
    alert('vui lòng để trống thông tin')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.titlePage}> HỒ SƠ THÔNG TIN </Text>
        <Image source={{ uri: user.user.photo  }} style={styles.imageUser} />
        <Text style={[styles.titlePage, styles.name]}>{user.user.name.toUpperCase()}</Text>
      </View>
      <View  style={styles.content}>
        <View style={styles.filed}>
            <Text style={styles.label}>Chều cao *</Text>
            <TextInput value={height} onChangeText={onChangeHeight} maxLength={3} keyboardType={'number-pad'} style={styles.input} />
            <Text style={styles.unit}> Cm </Text>
        </View>
        <View style={styles.filed}>
            <Text style={styles.label}>Cân nặng *</Text>
            <TextInput value={weight} onChangeText={onChangeWeight} maxLength={3} keyboardType={'number-pad'} style={styles.input} />
            <Text style={styles.unit}> Kg </Text>
        </View>
        <View style={styles.filedDate}>
            <Text style={styles.label}>Ngày sinh </Text>
            <DatePicker
            date={date}
            mode="date"
            format="DD/MM/YYYY"
            minDate="10-01-1778"
            maxDate={date}
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
            style={{ marginLeft: 20, flex: 5, marginTop: 10 }}
            />
        </View>
        <View style={styles.formCheckBox}>
            <Text style={styles.label}>Giới tính </Text>
            <View style={styles.checkboxContainer}>
                <View style={styles.checkboxGroup}>
                    <CheckBox
                    value={isMale}
                    onValueChange={()=>onCheckBoxChange('male')}
                    style={styles.checkbox}
                    disabled={false}
                    />
                    <CheckBox
                    value={isFemale}
                    onValueChange={()=>onCheckBoxChange('female')}
                    style={styles.checkbox}
                    />
                </View>
                <View style={styles.labelGroup}>
                    <Text style={styles.labelCheckBox}>Nam</Text>
                    <Text style={styles.labelCheckBox}>Nữ</Text>
                </View>
            </View>
        </View>
      </View> 
      {weight === '' || height === '' ? (
        <TouchableOpacity style={[styles.button, {backgroundColor: Colors.colorLightBlack}]} onPress={()=>message()} >
          <Text style={styles.titleButton}>Lưu</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={()=>setup()} >
          <Text style={styles.titleButton}>Lưu</Text>
        </TouchableOpacity>
      )}
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    margin:30
  },
  header: {
    flex:0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content:{
    flex:5,
  },
  button: {
    marginTop: 60,
    marginBottom: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  name:{
      color:"#000000"
  },
  filed: {
    marginTop:10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderBottomColor: '#DADADA',
    justifyContent: 'space-between',
  },
  filedDate: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
  },
  formCheckBox:{
      marginTop:30,
      flexDirection:"row",
      alignItems:"stretch"
  },
  checkboxContainer:{
      flex:5,
      flexDirection:"row",
      justifyContent:"space-around"
  },
  checkboxGroup:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between"
  },
  labelGroup:{
    flexDirection:"column",
    justifyContent:"center"
  },
  checkbox:{
    width:18,
    height:18,
    borderRadius:3
  },
  input:{
    flex:3,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Regular',
    color:"#000000"
  },
  label:{
    flex:3,
    fontSize: 18,
    fontFamily: 'Regular',
    alignSelf:"center"
  },
  labelCheckBox:{
    fontSize: 18,
    fontFamily: 'Regular',
  },
  titlePage: {
    fontSize: 20,
    color: Colors.primary,
    alignSelf:"center",
    textAlign:"center"
  },
  imageUser: {
    height: 172,
    width: 172,
    borderRadius: 100,
    marginTop: 10,
  },
  unit: {
    flex:2,
    fontFamily: 'Regular',
    fontSize: 18,
    textAlign: "right",
    alignSelf:"center"
  },
  titleButton: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
});
