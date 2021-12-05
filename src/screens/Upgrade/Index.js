/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CHeaderPage from '../../components/CHeaderPage';
import {Colors} from '../../themes/index';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import PaymentType from '../../redux/Payment/actions';
import I18n from '../../i18n/i18n';

export default function Upgrade() {
  const dataPack = useSelector(state => state.payment);
  const [visible, setVisible] = useState(false);
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();

  const merchantname = 'App Health+';
  const merchantcode = 'MOMOIQXQ20210323';
  const merchantNameLabel = 'Nhà cung cấp';
  const billdescription = 'Thanh toán nâng cấp Gói Health+';
  const enviroment = '0'; //"0": SANBOX , "1": PRODUCTION

  const showDialog = money => {
    setVisible(true);
    setMoney(money);
  };

  const handleOk = () => {
    var millisecond = Math.round(new Date().getTime() / 1000);
    var id = 'Health' + millisecond + '';
    let jsonData = {};
    jsonData.enviroment = enviroment;
    jsonData.action = 'gettoken';
    jsonData.merchantname = merchantname;
    jsonData.merchantcode = merchantcode;
    jsonData.merchantnamelabel = merchantNameLabel;
    jsonData.description = billdescription;
    jsonData.amount = money;
    jsonData.orderId = id;
    jsonData.orderLabel = 'Mã đơn hàng';
    dispatch(PaymentType.confirmPaymentUser(jsonData));
    setVisible(false);
  };

  return (
    <View>
      <CHeaderPage />
      <ScrollView style={{marginBottom: 80}}>
        <View style={styles.contentPageUpgraded}>
          {
            <View style={styles.messenger}>
              <Text style={styles.textMessage}>
                {I18n.t('using-the')}{' '}
                <Text style={{fontWeight: 'bold'}}>
                  {' '}
                  {dataPack.PackOfData}{' '}
                </Text>{' '}
                {I18n.t('upgrade-now')}
              </Text>
            </View>
          }
          <View style={styles.postUpgrade}>
            <View style={styles.contentPost}>
              <Image
                source={require('../../assets/image/medal.png')}
                resizeMode="contain"
                style={styles.stylesIcon}
              />
              <View style={{marginLeft: 7, marginRight: 90}}>
                <Text style={styles.titleUpgrade}>{I18n.t('Premium')}</Text>
                <Text style={styles.hrpage} />
                <Text style={styles.subTitleUpgrade}>
                  {I18n.t('You-will-be')}{' '}
                  <Text
                    style={{
                      color: Colors.colorTextPageUpgrade,
                      fontWeight: 'bold',
                    }}>
                    {I18n.t('Warning-health')}
                  </Text>{' '}
                  {I18n.t('One-to-one')}
                </Text>
              </View>
            </View>
            <View style={styles.functionPost}>
              <View>
                <Text style={styles.price}>{I18n.t('Money-premium')}</Text>
                <Text style={styles.price}>{I18n.t('Month')}</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={() => showDialog(200000)}>
                <Text style={styles.titleButton}> {I18n.t('Use')} </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postUpgrade}>
            <View style={styles.contentPost}>
              <Image
                resizeMode="contain"
                source={require('../../assets/image/diamond.png')}
                style={styles.stylesIcon}
              />
              <View style={{marginLeft: 7, marginRight: 90}}>
                <Text style={styles.titleUpgrade}>{I18n.t('Pro')}</Text>
                <Text style={styles.hrpage} />
                <Text style={styles.subTitleUpgrade}>
                  {I18n.t('Immediately')}{' '}
                  <Text
                    style={{
                      color: Colors.colorTextPageUpgrade,
                      fontWeight: 'bold',
                    }}>
                    {I18n.t('Doctor')}{' '}
                  </Text>
                  {I18n.t('Complete-and-accurate')}
                </Text>
              </View>
            </View>
            <View style={styles.functionPost}>
              <View>
                <Text style={styles.price}>{I18n.t('Money-pro')}</Text>
                <Text style={styles.price}>{I18n.t('Month')}</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={() => showDialog(500000)}>
                <Text style={styles.titleButton}> {I18n.t('Use')} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Dialog.Container
          visible={visible}
          contentStyle={{justifyContent: 'center', alignItems: 'center'}}>
          <Dialog.Title> Thanh Toán </Dialog.Title>
          <Dialog.Description>
            Mở ứng dụng Momo và Thanh toán thông qua ví điện tử Momo
          </Dialog.Description>
          <Dialog.Button label="Tiếp Tục" onPress={() => handleOk()} />
          <Dialog.Button label="Hủy Bỏ" onPress={() => setVisible(false)} />
        </Dialog.Container>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  contentPageUpgraded: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  messenger: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
  },
  textMessage: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 15,
  },
  postUpgrade: {
    marginTop: 35,
    borderRadius: 10,
    backgroundColor: Colors.goldColor,
    marginBottom: 10,
  },
  contentPost: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
  },
  stylesIcon: {
    marginTop: 10,
    height: 80,
    width: 80,
    resizeMode: 'stretch',
  },
  titleUpgrade: {
    color: Colors.warning,
    fontWeight: 'bold',
    fontSize: 15,
  },
  hrpage: {
    marginTop: 12,
    width: 90,
    height: 4,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  subTitleUpgrade: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 13,
  },
  functionPost: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    textAlign: 'center',
    marginLeft: 10,
    color: Colors.white,
    fontSize: 23,
    width: 145,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    marginTop: 15,
    marginRight: 30,
    height: 40,
    width: 110,
    justifyContent: 'center',
    backgroundColor: Colors.info,
    borderRadius: 5,
  },
  titleButton: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});
