import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddAttributesScreen = ({ navigation }) => {
  const [device, setDevice] = useState('');
  const [users, setUsers] = useState('');

  const handleAddAttributes = (position) => {
    
    
  
    // Kiểm tra xem các thuộc tính đã được nhập đầy đủ hay chưa
    if (!device || !users) {
      // Hiển thị thông báo lỗi
      alert('Vui lòng nhập đầy đủ thông tin thuộc tính');
      return;
    }
  
    // Thêm thuộc tính vào cơ sở dữ liệu
    // ...
  
    // Thêm màn hình mới
    navigation.push('MyScreen', { position });
  };
  

  return (
    <View>
      {/* Button hoặc các thành phần khác để xác nhận việc thêm thuộc tính */}
      <Button title="Add" onPress={handleAddAttributes} />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddAttributesScreen;
