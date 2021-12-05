import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon, Images} from '../../themes';
import {NavigationUtils} from '../../navigation';

export default function Doctor() {
  const Info = number => {
    var data = {};
    if (number === 1) {
      data.name = 'Dr. Nguyen Thi Xuan Mai';
      data.specialized =
        'Dental Clinic - Ho Chi Minh City Odonto-Stomatology Hospital';
      data.des =
        'Dr Nguyen Thi Xuan Mai is a leading dental specialist. She has achieved several awards for her great contribution to the field. She is available for private consultations for certain schedules';
    } else {
      data.name = 'Dr. Vo Thanh Nhan';
      data.specialized =
        'Cardiovascular Clinic - Vinmec Central International General Hospital Park';
      data.des =
        'Dr. Vo Thanh Nhan is a leading cardiologist. He has won several awards for her great contribution to the field. He is willing to give private consultations for certain schedules';
    }
    NavigationUtils.pushScreen(
      'HomeTab',
      'InfoDoctor',
      'Information Doctor',
      data,
    );
  };
  return (
    <ScrollView>
      <View style={styles.pageFinDoctor}>
        <View style={styles.content}>
          <Text style={styles.titlePage}>Find the right doctor for you!</Text>
          <View style={styles.inputSearch}>
            <TextInput placeholder="search doctor" style={styles.input} />
            <TouchableOpacity style={styles.buttonSearch}>
              <Image
                source={Icon.icSearch}
                style={styles.iconLoupe}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listFaculty}>
            <Text style={styles.titlePart}>Specialists</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.showListFaculty}>
                <TouchableOpacity>
                  <View style={styles.itemFaculty}>
                    <View style={[styles.button, {backgroundColor: '#59A0E4'}]}>
                      <Image
                        source={Icon.icTeeth}
                        style={styles.iconButton}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.titleButton}>Teeth</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.itemFaculty}>
                    <View style={[styles.button, {backgroundColor: '#FFB167'}]}>
                      <Image
                        source={Icon.icHeartIcon}
                        style={styles.iconButton}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.titleButton}>Heartbeat</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.itemFaculty}>
                    <View style={[styles.button, {backgroundColor: '#F57E71'}]}>
                      <Image
                        source={Icon.icEye}
                        style={styles.iconButton}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.titleButton}>Eyes</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.listFaculty}>
            <Text style={styles.titlePart}>Doctors</Text>
            <View style={styles.contentPart}>
              <TouchableOpacity onPress={() => Info(1)}>
                <View style={styles.item}>
                  <Image source={Images.imgDoctor} style={styles.imageItem} />
                  <View style={styles.contentItem}>
                    <Text style={styles.nameDoctor}>
                      Dr. Nguyen Thi Xuan Mai
                    </Text>
                    <Text style={styles.specialized}>
                      Dental Clinic - Ho Chi Minh City Odonto-Stomatology Hospital
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Info(2)}>
                <View style={styles.item}>
                  <Image
                    source={Images.imgDoctorMan}
                    style={styles.imageItem}
                  />
                  <View style={styles.contentItem}>
                    <Text style={styles.nameDoctor}>Dr. Vo Thanh Nhan</Text>
                    <Text style={styles.specialized}>
                      Cardiovascular Clinic - Vinmec Central International
                      General Hospital Park
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageFinDoctor: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconMenu: {
    marginTop: 10,
    width: 25,
    height: 25,
    tintColor: '#292685',
  },
  content: {
    marginTop: 5,
    flexDirection: 'column',
  },
  titlePage: {
    fontSize: 26,
    color: '#1E1C61',
    fontWeight: 'bold',
  },
  inputSearch: {
    flexDirection: 'row',
  },
  buttonSearch: {
    backgroundColor: '#4B7FFB',
    width: 60,
    height: 40,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    width: Dimensions.get('window').width - 110,
  },
  iconLoupe: {
    tintColor: '#ffff',
    height: 25,
    width: 20,
  },
  listFaculty: {
    marginTop: 40,
    flexDirection: 'column',
  },
  titlePart: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentPart: {
    marginTop: 2,
    marginLeft: 8,
    flexDirection: 'column',
  },
  titleButton: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    marginTop: 15,
    flexDirection: 'row',
  },
  imageItem: {
    width: 54,
    height: 65,
    borderRadius: 10,
  },
  contentItem: {
    marginLeft: 10,
    marginTop: 4,
    flexDirection: 'column',
    width: Dimensions.get('window').width - 90,
  },
  showListFaculty: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 10,
  },
  itemFaculty: {
    marginLeft: 15,
    marginRight: 35,
    flexDirection: 'column',
  },

  button: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 80,
    height: 70,
  },
  iconButton: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 25,
    height: 25,
    tintColor: '#ffffff',
  },
  nameDoctor: {
    fontSize: 16,
    color: '#1E1C61',
  },
  specialized: {
    marginTop: 3,
    fontSize: 11,
    color: '#1E1C61',
  },
});
