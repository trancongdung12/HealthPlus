import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import CHeaderPage from '../../components/CHeaderPage';
import { Icon, Colors } from '../../themes';
import LanguageAction  from '../../redux/Language/actions';
import { useSelector, useDispatch } from 'react-redux';
import I18n from '../../i18n/i18n';

export default function Language() {
    const dataLanguage =useSelector((state) => state.language.language.data.language);
    const [vi, setVi] = useState(dataLanguage === 'vi' ? true : false)
    const [en, setEn] = useState(dataLanguage === 'en' ? true : false)

    const dispatch = useDispatch();

    const setLanguage = (language) => {
        if(language === 'en'){
            setEn(true)
            setVi(false)
            let data = {}
            data.language = 'en'
            dispatch(LanguageAction.changeLanguage(data));

        }else{
            setEn(false)
            setVi(true)
            let data = {}
            data.language = 'vi'
            dispatch(LanguageAction.changeLanguage(data));
        }
    }
    return (
        <View>
            <CHeaderPage />
            <View style={styles.page}>
                <Text style= {styles.titlePage}> {I18n.t('Select-language')} </Text>

                <View style={styles.listLanguage}>
                    <TouchableOpacity onPress={()=>setLanguage('vi')}>
                        <View style={ vi    ? [styles.language, {borderColor: Colors.colorLightBlack}]
                                            :  styles.language} >

                            <Text  style={ vi   ? [styles.titleLanguage, {color: Colors.primary}]
                                                :  styles.titleLanguage} >
                                {I18n.t('Vietnamese')}
                            </Text>
                            {vi ?(
                                <Image source={Icon.icon_check} style={styles.iconCheck} />
                            ):(
                                <Text/>
                            )}   
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setLanguage('en')}>
                        <View style={ en    ? [styles.language, {borderColor: Colors.colorLightBlack}]
                                            :  styles.language} >

                            <Text  style={ en   ? [styles.titleLanguage, {color: Colors.primary}]
                                                :  styles.titleLanguage} >
                                {I18n.t('English')}
                            </Text>
                            {en ?(
                                <Image source={Icon.icon_check} style={styles.iconCheck} />
                            ):(
                                <Text/>
                            )}   
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


Language.options = {
    topBar: {
        visible: false,
      },
  };
const styles = StyleSheet.create({
    page: {
        marginTop: 15,
    },
    titlePage: {
        textAlign: 'center',
        color: Colors.primary,
        fontSize: 24,
    },
    listLanguage: {
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
    },
    language:{
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    },
    titleLanguage:{
        marginBottom: 10,
        fontSize: 18,
        color: Colors.black,
    },
    iconCheck:{
        marginBottom: 10,
        height: 20,
        width: 20,
        marginRight: 10
    },
})
